import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFilter } from '../utils/provider';
import { useFavW } from '../utils/provider';
import ax from 'axios';
import { useTheme } from '../utils/provider';
import { text } from '../utils/variable';
import { io } from "socket.io-client";

//components
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

export default function Tire() {
  const [data, setData] = useState([])
  const {filter, setFilter} = useFilter()
  const {favW, setFavW} = useFavW();

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

  const StoreFav = (checked, obj) => {
    //store the favourites to be used on the next page
    console.log(checked, obj)
    if(checked){
      const W_obj = {
        ...favW 
      };
      W_obj[obj.Body] = obj;
      setFavW(W_obj);
    } else {
      const W_obj = {
        ...favW
      }
      delete W_obj[obj.Body]
      setFavW(W_obj)
    }
  }

  const {theme, setTheme} = useTheme();

  return ( <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='tire!'/>
    </HeadingCont>


    <FilterHeading filterheadingcolor={text[theme].textcolor}>Filter By</FilterHeading>
    <FilterContainer>
      <ButtonFilter text="Name" onFilterClick={()=>setFilter("Body")}/>
      <ButtonFilter text="Speed" onFilterClick={()=>setFilter("Speed")}/>
      <ButtonFilter text="Handling" onFilterClick={()=>setFilter("Handling")}/>
      <ButtonFilter text="Traction" onFilterClick={()=>setFilter("Traction")}/>
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
    <input type="checkbox"
        checked={
          favW[o.Body] !== undefined && favW[o.Body] !== null
          //Object.keys(fav).indexOf(o.bookID.toString()) !== -1
        }
        onChange={(e)=>StoreFav(e.target.checked, o)}
        />
    </div>
    )}
    </CardCont>
    <BottomBarCont>
      <BottomBar nextlink='/glider'/>
    </BottomBarCont>
  </Container>
  )
}
