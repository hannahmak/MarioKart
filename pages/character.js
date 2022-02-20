import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';

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


export default function Character() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()

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

  return ( <Container>
    <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='character!'/>
    </HeadingCont>
    <h1>Filter</h1>
    <button onClick={()=>setFilter("Weight")}>Sort By Weight</button>
    <button onClick={()=>setFilter("Character")}>Sort By Name</button>
    <button onClick={()=>setFilter("Acceleration")}>Sort By Acceleration</button>
    
    <h1>Sort</h1>
    <button onClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")}>{sbr_type == "asc" ? "Ascending" : "Decending"}</button>

    <br></br>
    <button onClick={(e)=>inputFilter(e.target.value)}>Apply</button>
    <CardCont>
      {data.map((o,i)=>
        <Card 
          key={i}
          
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
      )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/body'/>
    </BottomBarCont>
  </Container>
  )
}