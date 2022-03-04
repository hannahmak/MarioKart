import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC, useFavV, useFavW, useFavG } from '../utils/provider';
import { useTheme } from '../utils/provider';


//components
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'
import FilterButton from '../comps/FilterButton'
import SortButton from '../comps/SortButton';
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
const Header = styled.h2`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
margin-top:100px;
color:${props=>props.headcolor};
`



export default function Fav() {
  const {favC, setFavC} = useFavC();
  const {favV, setFavV} = useFavV();
  const {favW, setFavW} = useFavW();
  const {favG, setFavG} = useFavG();
  const {theme} = useTheme();


  return (
    <Container>
    <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
    <HeadingCont>
      <Header headcolor={text[theme].textcolor}>Favourites</Header>
    </HeadingCont>
      <CardCont>
      {Object.values(favC).map((o,i)=>
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
    
      )}
        {Object.values(favV).map((o,i)=>
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
    
      )}
        {Object.values(favW).map((o,i)=>
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
        {Object.values(favG).map((o,i)=>
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
    
      )}
    </CardCont>  
  
     <BottomBarCont>
      <BottomBar nextlink='/'/>
    </BottomBarCont>
    </Container>
  )
}
