import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC, useFavV, useFavW, useFavG } from '../utils/provider';

import Card from '../comps/Card'


export default function Fav() {
  const {favC, setFavC} = useFavC();
  const {favV, setFavV} = useFavV();
  const {favW, setFavW} = useFavW();
  const {favG, setFavG} = useFavG();


  return (
    <div>
      Favourites
      
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
    </div>
  )
}