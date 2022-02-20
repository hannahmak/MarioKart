import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFilter } from '../utils/provider';
import ax from 'axios'

//components
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'

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

export default function Tire() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()

  const [sbti, setSBTI] = useState(false) //sort by tire
  const [sbs, setSBS] = useState(false) //sort by speed
  const [sbh, setSBH] =  useState(false) //sort by handling
  const [sbt, setSBT] = useState(false) //sort by traction

  const [sbr_type, setSBRType] = useState("asc")

  const inputFilter = async(name)=>{

    if(filter === 'Body'){
      setSBTI(true)
      setSBS(false)
      setSBH(false)
      setSBT(false)
      console.log(filter)
      const res = await ax.get("/api/tires", {
        params: {
          txt: name,
          sort_tire:sbti,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Speed'){
      setSBTI(false)
      setSBS(true)
      setSBH(false)
      setSBT(false)
      console.log(filter)
      const res = await ax.get("/api/tires", {
        params: {
          txt: name,
          sort_speed:sbs,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Handling'){
      setSBTI(false)
      setSBS(false)
      setSBH(true)
      setSBT(false)
      console.log(filter)
      const res = await ax.get("/api/tires", {
        params: {
          txt: name,
          sort_handling:sbh,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Traction'){
      setSBTI(false)
      setSBS(false)
      setSBH(false)
      setSBT(true)
      console.log(filter)
      const res = await ax.get("/api/tires", {
        params: {
          txt: name,
          sort_traction:sbt,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 
  }



  useEffect(()=>{
    const GetBody = async()=>{
      const resp = await ax.get("/api/tires");
      setData(resp.data)
    }

    GetBody();
  }, [])

  return ( <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='tire!'/>
    </HeadingCont>

    <h1>Filter</h1>
    <button onClick={()=>setFilter("Body")}>Sort By Tire</button>
    <button onClick={()=>setFilter("Speed")}>Sort By Speed</button>
    <button onClick={()=>setFilter("Handling")}>Sort By Handling</button>
    <button onClick={()=>setFilter("Traction")}>Sort By Traction</button>
    
    <h1>Sort</h1>
    <button onClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")}>{sbr_type == "asc" ? "Ascending" : "Decending"}</button>

    <br />
    <button onClick={(e)=>inputFilter(e.target.value)}>Apply</button>

    
    <CardCont>
    {data.map((o,i)=>
    <Card 
      key={i}
      bgcolor={o.Color}

      //front card
      title={'Tires'}
      name={o.Body}
      img={o.Image}
      height={'94.72'}
      width={'148px'}
      
      //back card
      cat1={'Speed'}
      val1={o.Speed}
      cat2={'Handling'}
      val2={o.Handling}
      cat3={'Traction'}
      val3={o.Traction}
    />
    )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/glider'/>
    </BottomBarCont>
  </Container>
  )
}
