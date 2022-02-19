import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//component
import TopMenu from '../comps/TopMenu'
import BigButton from '../comps/BigButton'


const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color:#FB0A40;
color:white;

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

export default function ReviewSelection() {
  return ( 
     <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <CardCont>
    </CardCont>
    <h1>Review Selections</h1>
    <BigButton buttontext='Save'></BigButton>
    <BigButton buttontext='Share'></BigButton>
  </Container>
  )
}