import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFilter } from '../utils/provider';
import { useFavV } from '../utils/provider';
import ax from 'axios'
import { useTheme } from '../utils/provider';
import { text } from '../utils/variable';
import { io } from "socket.io-client";

//components
import Card from '../comps/Card'
import ChooseCategory from '../comps/ChooseCategory'
import TopMenu from '../comps/TopMenu'
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

export default function Body() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()
  const {favV, setFavV} = useFavV();

  const [sbv, setSBV] = useState(false) //sort by vehicle
  const [sbs, setSBS] = useState(false) //sort by speed
  const [sba, setSBA] =  useState(false) //sort by acceleration
  const [sbmt, setSBMT] = useState(false) //sort by mini turbo

  const [sbr_type, setSBRType] = useState("asc")

  const inputFilter = async(name)=>{

    if(filter === 'Vehicle'){
      setSBV(true)
      setSBS(false)
      setSBA(false)
      setSBMT(false)
      console.log(filter)
      const res = await ax.get("/api/bodies", {
        params: {
          txt: name,
          sort_kart:sbv,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Speed'){
      setSBV(false)
      setSBS(true)
      setSBA(false)
      setSBMT(false)
      console.log(filter)
      const res = await ax.get("/api/bodies", {
        params: {
          txt: name,
          sort_speed:sbs,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'Acceleration'){
      setSBV(false)
      setSBS(false)
      setSBA(true)
      setSBMT(false)
      console.log(filter)
      const res = await ax.get("/api/bodies", {
        params: {
          txt: name,
          sort_acceleration:sba,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 

    if(filter === 'MiniTurbo'){
      setSBV(false)
      setSBS(false)
      setSBA(false)
      setSBMT(true)
      console.log(filter)
      const res = await ax.get("/api/bodies", {
        params: {
          txt: name,
          sort_miniturbo:sbmt,
          sort_type:sbr_type
        }
      })
      setData(res.data)
    } 
  }

  useEffect(()=>{
    const GetBody = async()=>{
      const resp = await ax.get("/api/bodies")
      setData(resp.data)
    }
    GetBody()
  }, [])

  const StoreFav = (checked, obj) => {
    //store the favourites to be used on the next page
    console.log(checked, obj)
    if(checked){
      const V_obj = {
        ...favV 
      };
      V_obj[obj.Vehicle] = obj;
      setFavV(V_obj);
    } else {
      const V_obj = {
        ...favV
      }
      delete V_obj[obj.Vehicle]
      setFavV(V_obj)
    }
  }
  const {theme, setTheme} = useTheme();
  
  return ( <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory/>
    </HeadingCont>

    <FilterHeading filterheadingcolor={text[theme].textcolor}>Filter By</FilterHeading>
    <FilterContainer>
      <ButtonFilter text="Vehicle" onFilterClick={()=>setFilter("Vehicle")}/>
      <ButtonFilter text="Speed" onFilterClick={()=>setFilter("Speed")}/>
      <ButtonFilter text="Acceleration" onFilterClick={()=>setFilter("Acceleration")}/>
      <ButtonFilter text="Mini Turbo" onFilterClick={()=>setFilter("MiniTurbo")}/>
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
          title={'Kart'}
          name={o.Vehicle}
          img={o.Image}
          height={'94.72'}
          width={'148px'}

          //back card
          cat1={'Speed'}
          val1={o.Speed}
          cat2={'Acceleration'}
          val2={o.Acceleration}
          cat3={'Mini Turbo'}
          val3={o.MiniTurbo}
        />
        <input type="checkbox"
        checked={
          favV[o.Vehicle] !== undefined && favV[o.Vehicle] !== null
          //Object.keys(fav).indexOf(o.bookID.toString()) !== -1
        }
        onChange={(e)=>StoreFav(e.target.checked, o)}
        />
        </div>
      )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/tire'/>
    </BottomBarCont>
  
  </Container>
  )
}
