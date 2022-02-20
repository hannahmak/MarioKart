export function filtering(
    arr = [],

    config = {
        Character: null, //character
        Weight: null, 
        Acceleration: null, //kart
        Handling: null, 
        Speed: null, //kart
        Body: null, //glider
        Type: null, //glider
        SpeedAir: null, //glider
        MiniTurbo: null, //kart
    }
){
    const {Character, Weight, Acceleration, Handling, Speed, Body, Type, SpeedAir, MiniTurbo} = config

    if(Character || Weight || Acceleration || Handling || Speed || Body || Type || SpeedAir || MiniTurbo){
        const filtered_arr = arr.filter((o)=>{
            var cond = true

            if(Character){
                cond = cond && o.Character.includes(Character)
            }
            if(Body){
                cond = cond && o.Body.includes(Body)
            }
            if(Type){
                cond = cond && o.Type.includes(Type)
            }
            if(Weight){
                cond = cond && Number(o.Weight) >= Number(Weight)
            }
            if(Acceleration){
                cond = cond && Number(o.Acceleration) >= Number(Acceleration)
            }
            if(Handling){
                cond = cond && Number(o.Handling) >= Number(Handling)
            }
            if(Speed){
                cond = cond && Number(o.SpeedAir) >= Number(Speed)
            }
            if(SpeedAir){
                cond = cond && Number(o.SpeedAir) >= Number(SpeedAir)
            }
            if(MiniTurbo){
                cond = cond && Number(o.MiniTurbo) >= Number(MiniTurbo)
            }

            return cond
        })

        return filtered_arr
    } else {

        return []
    }
}


export function sortArr(
    arr = [],
    config = {key: null, type: null}
){
    const {key, type} = config

    if(key){
        arr.sort((cur, next) =>{
            var num1 = Number(cur[key])
            var num2 = Number(next[key])

            if(isNaN(cur[key])){
                var num1 = cur[key]
                var num2 = next[key]
            }

            if(num1 > num2){
                if(type && type === "desc"){
                    return -1
                } else {
                    return 1
                }
            }
            if(num1 < num2){
                if(type && type === "desc"){
                    return 1
                } else {
                    return -1
                }
            }
            return 0
        })

        return arr
    }
}