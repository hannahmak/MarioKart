import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC } from '../utils/provider';

//components
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'
import FilterButton from '../comps/FilterButton'
import SortButton from '../comps/SortButton'
import ButtonFilter from '../comps/ButtonFilter';

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

  return ( <Container>
    <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='character!'/>
    </HeadingCont>

    <FilterHeading>Filter By</FilterHeading>
    <FilterContainer>
      <ButtonFilter text="Weight" onFilterClick={()=>setFilter("Weight")}/>
      <ButtonFilter text="Name" onFilterClick={()=>setFilter("Character")}/>
      <ButtonFilter text="Acceleration" onFilterClick={()=>setFilter("Acceleration")}/>
    </FilterContainer>
    <FilterHeading>Sort By</FilterHeading>
    <FilterContainer>
      <ButtonFilter onFilterClick={()=>setSBRType(sbr_type == "asc"?"desc":"asc")} text={sbr_type == "asc" ? "Ascending" : "Decending"} />
    </FilterContainer>
    <br></br>
    <FilterContainer>
      <ButtonFilter onFilterClick={(e)=>inputFilter(e.target.value)} text={"Apply"} />
    </FilterContainer>
    

    <CardCont>
      {data.map((o,i)=>
        <div key={i}>
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