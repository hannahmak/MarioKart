import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const CircleCont = styled.div`
display:flex;
width:100%;
height:600px;
border-radius:0px 0px 600px 600px;
background-color:red;
justify-content:center;
align-items:center;
`;

export default function Home() {
 
  return ( <CircleCont>
    <p>Insert mario pic here</p>
  </CircleCont>
  )
}
