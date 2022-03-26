import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavG } from '../utils/provider';
import { text } from '../utils/variable';
import { useTheme } from '../utils/provider';
import { io } from 'socket.io-client';

//component
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'
import ButtonFilter from '../comps/ButtonFilter'

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
  font-weight: 500;
  font-size: 18px;
  color:${props=>props.filterheadingcolor};
`

export default function Glider() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()
  const {favG, setFavG} = useFavG();

  const [sbg, setSBG] = useState(false) //sort by glider
  const [sbk, setSBK] = useState(false) //sort by kind 
  const [sbw, setSBW] =  useState(false) //sort by weight
  const [sbas, setSBAS] = useState(false) //sort by airspeed

  const [sbr_type, setSBRType] = useState("asc")

  const inputFilter = async(name)=>{

    if(filter === 'Body'){
      setSBG(true)
      setSBK(false)
      setSBW(false)
      setSBAS(false)
      console.log(filter)
      const res = await ax.get("/api/gliders", {
        params: {
          txt: name,
          sort_glider:sbg,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Type'){
      setSBG(false)
      setSBK(true)
      setSBW(false)
      setSBAS(false)
      console.log(filter)
      const res = await ax.get("/api/gliders", {
        params: {
          txt: name,
          sort_kind:sbk,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Weight'){
      setSBG(false)
      setSBK(false)
      setSBW(true)
      setSBAS(false)
      console.log(filter)
      const res = await ax.get("/api/gliders", {
        params: {
          txt: name,
          sort_weight:sbw,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'SpeedAir'){
      setSBG(false)
      setSBK(false)
      setSBW(false)
      setSBAS(true)
      console.log(filter)
      const res = await ax.get("/api/gliders", {
        params: {
          txt: name,
          sort_airspeed:sbas,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 
  }

  useEffect(()=>{
    const GetGliders = async()=>{
      const resp = await ax.get("/api/gliders");
      setData(resp.data)
    }

    GetGliders()
  }, [])

  const StoreFav = (checked, obj) => {
    //store the favourites to be used on the next page
    console.log(checked, obj)
    if(checked){
      const G_obj = {
        ...favG 
      };
      G_obj[obj.Body] = obj;
      setFavG(G_obj);
    } else {
      const G_obj = {
        ...favG
      }
      delete G_obj[obj.Body]
      setFavG(G_obj)
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
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='glider!'/>
    </HeadingCont>

    <FilterHeading filterheadingcolor={text[theme].textcolor}>Filter By</FilterHeading>
    <FilterContainer>
      <ButtonFilter text="Type" onFilterClick={()=>setFilter("Type")}/>
      <ButtonFilter text="Weight" onFilterClick={()=>setFilter("Weight")}/>
      <ButtonFilter text="Speed Air" onFilterClick={()=>setFilter("SpeedAir")}/>
      <ButtonFilter text="Body" onFilterClick={()=>setFilter("Body")}/>
    </FilterContainer>
    <FilterHeading filterheadingcolor={text[theme].textcolor}>Sort By</FilterHeading>
    <FilterContainer>
      <ButtonFilter onFilterClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")} text={sbr_type == "asc" ? "Ascending" : "Decending"} />
    </FilterContainer>
    <br></br>
    <FilterContainer>
      <ButtonFilter onFilterClick={(e)=>inputFilter(e.target.value)} text={"Apply"} />
    </FilterContainer>

    <CardCont>
    {data.map((o,i)=>
    <div>
      <Card
        key={i}
        bgcolor={o.Color}


        //front card
        title='Glider'
        name={o.Body}
        img={o.Image}
        height={'94.72'}
        width={'148px'}

        //back card
        cat1={'Type'} 
        val1={o.Type}
        cat2={'Weight'}
        val2={o.Weight}
        cat3={'Air Speed'}
        val3={o.SpeedAir}
      />
      <input type="checkbox"
        checked={
          favG[o.Body] !== undefined && favG[o.Body] !== null
          //Object.keys(fav).indexOf(o.bookID.toString()) !== -1
        }
        onChange={(e)=>StoreFav(e.target.checked, o)}
        />
    </div>
    )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/favourites'/>
    </BottomBarCont>
  </Container>
  )
}