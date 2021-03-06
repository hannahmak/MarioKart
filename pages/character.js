import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC } from '../utils/provider';
import { useTheme } from '../utils/provider';
import { io } from "socket.io-client";

import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'
import FilterButton from '../comps/FilterButton'
import SortButton from '../comps/SortButton'
import ButtonFilter from '../comps/ButtonFilter';
import { text } from '../utils/variable';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  justify-content: center;
`

const TopBarCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  position:fixed;
  height:10%;
  background-color:#FB0A40;
  z-index:20;
  top:0px;
`

const CardCont = styled.div`
  height:70%;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:100px;
`

const HeadingCont = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
  justify-content:center;  
`

const BottomBarCont = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  position:fixed;
  height:10%;
  background-color:#FB0A40;
  z-index:20;
  bottom:0px;
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;  
`

const FilterHeading =  styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  color:${props=>props.filterheadingcolor};
`


export default function Character() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()
  const {favC, setFavC} = useFavC();

  const [sbc, setSBC] = useState(false) //characters
  const [sbw, setSBW] = useState(false) //weight
  const [sba, setSBA] = useState(false) //acceleration

  const [sbr_type, setSBRType] = useState("asc") //asc and desc

  const inputFilter = async(name)=>{
    if(filter === 'Weight'){
      setSBW(true)
      setSBC(false)
      setSBA(false)
      console.log(filter)

      const res = await ax.get("/api/characters", {
        params: {
          txt: name,
          sort_weight:sbw,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Character'){
      setSBW(false)
      setSBC(true)
      setSBA(false)
      console.log(filter)

      const res = await ax.get("/api/characters", {
        params: {
          txt: name,
          sort_character:sbc,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Acceleration'){
      setSBW(false)
      setSBC(false)
      setSBA(true)
      console.log(filter)
  
      const res = await ax.get("/api/characters", {
        params: {
          txt: name,
          sort_acceleration:sba,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 
  }
  
  useEffect(()=>{
    const GetCharacter = async()=>{
      const resp = await ax.get("/api/characters")
      setData(resp.data)
    }

    GetCharacter()

  }, [])


  const StoreFav = (checked, obj) => {
    //store the favourites to be used on the next page
    console.log(checked, obj)
    if(checked){
      const C_obj = {
        ...favC 
      };
      C_obj[obj.Character] = obj;
      setFavC(C_obj);
    } else {
      const C_obj = {
        ...favC
      }
      delete C_obj[obj.Character]
      setFavC(C_obj)
    }
  }

  const {theme, setTheme} = useTheme();

  //multiplayer
  const [mySoc, setMySoc] = useState(null);
  const [msgs, setMsgs] = useState([]);

  const [mousePos, setMousePos] = useState({
    left:0,
    top:0
  })

  const [users, setUsers] = useState({});

  const [inputPin, setInputPin] = useState("");

  useEffect(()=>{
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });
    
    const socket = io(`http://localhost:8888`);

    socket.on("user_connected", (users)=>{
      setUsers(users);
      })

    socket.on("change", (id)=>{
      // alert(`${id} has connected`)

      //messages
      setMsgs((prev)=>[
        ...prev,
        `${id} has joined the server`
      ])
    });

    socket.on("update_mouse", (x, y, id)=>{
      // setMousePos({
      //   left:x,
      //   top:y
      // })
      setUsers((prev)=>({
        ...prev,
        [id]:{left:x, top:y}
      }))
    })

    setMySoc(socket)
  }, [])

  const SendToIO = async () => {
    mySoc.emit("alert_all", inputPin)
  }

  const MouseMoveUpdate = async (x, y) => {
    mySoc.emit("mouse_moved", x, y)
  }
  
  const colors = ["green", "yellow", "blue", "red", "purple"]
  return ( <Container onMouseMove={(e)=>MouseMoveUpdate(e.clientX, e.clientY)}>
      {Object.values(users).map((o,i)=>
        <div style={{
          background:colors[i%5],
          position:"relative",
          width:10,
          height:10,
          left:o.left,
          top:o.top,
          zIndex:10,
          borderRadius:100
        }}/>
      )}
    <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='character!'/>
      <FilterContainer>
        <FilterHeading filterheadingcolor={text[theme].textcolor}>Filter By</FilterHeading>
        <ButtonFilter text="Weight" onFilterClick={()=>setFilter("Weight")}/>
        <ButtonFilter text="Name" onFilterClick={()=>setFilter("Character")}/>
        <ButtonFilter text="Acceleration" onFilterClick={()=>setFilter("Acceleration")}/>
      </FilterContainer>
      <FilterHeading filterheadingcolor={text[theme].textcolor}>Sort By</FilterHeading>
      <FilterContainer>
        <ButtonFilter onFilterClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")} text={sbr_type == "asc" ? "Ascending" : "Decending"} />
      </FilterContainer>
      <br></br>
      <FilterContainer>
        <ButtonFilter onFilterClick={(e)=>inputFilter(e.target.value)} text={"Apply"} />
      </FilterContainer>
    </HeadingCont>

    

    <CardCont>
      {data.map((o,i)=>
        <div>
        <Card
          
          //card stylying
          name={o.Character}
          bgcolor={o.Color}
          img={o.Image}
          height={'114px'}
          width={'120px'}

          //stats info
          cat1={'Weight'}
          val1={o.Weight}
          
          cat2={'Acceleration'}
          val2={o.Acceleration}

          cat3={''}
          val3={null}
        >
        </Card>
        <input type="checkbox"
        checked={
          favC[o.Character] !== undefined && favC[o.Character] !== null
          //Object.keys(fav).indexOf(o.bookID.toString()) !== -1
        }
        onChange={(e)=>StoreFav(e.target.checked, o)}
        />
        </div>
      )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/body'/>
    </BottomBarCont>
  </Container>
  )
}