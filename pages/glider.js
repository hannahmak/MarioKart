import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavG } from '../utils/provider';

//component
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
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

  return ( <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='glider!'/>
    </HeadingCont>

    <h1>Filter</h1>
    <button onClick={()=>setFilter("Type")}>Sort By Type</button>
    <button onClick={()=>setFilter("Weight")}>Sort By Weight</button>
    <button onClick={()=>setFilter("SpeedAir")}>Sort By Air Speed</button>
    <button onClick={()=>setFilter("Body")}>Sort By Name</button>
    
    <h1>Sort</h1>
    <button onClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")}>{sbr_type == "asc" ? "Ascending" : "Decending"}</button>

    <br />
    <button onClick={(e)=>inputFilter(e.target.value)}>Apply</button>



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
