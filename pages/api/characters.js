import {filtering, sortArr} from '../../utils/func.js'
import characters_data from '../../utils/characters_data.json'

export default function handler(req, res) {
    // console.log("body data", bodies_data);

    const {name, sort_weight, sort_character, sort_acceleration, sort_type} = req.query

    var lists = []
    if(name){
      lists = filtering(characters_data, {
        Characters: name
      })
    }

    if(sort_character){
      lists = sortArr(characters_data, {
        key: "Character",
        type: sort_type
      })
    }
  
    if(sort_weight){
      lists = sortArr(characters_data, {
        key: "Weight",
        type: sort_type
      })
    }
    if(sort_acceleration){
      lists = sortArr(characters_data, {
        key: "Acceleration",
        type: sort_type
      })
    } else {
      const characters = characters_data
      res.status(200).json(characters)
    }
  
    lists = lists.slice(0,100)
    res.status(200).json(lists)  
  }