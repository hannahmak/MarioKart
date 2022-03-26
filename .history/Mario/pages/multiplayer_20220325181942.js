import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { loadingToad, themes } from '../utils/variable'
import {useTheme} from '../utils/provider'
import MushroomLogo from '../comps/MushroomLogo'

const LoadContainer = styled.div`
background-color:${props=>props.backgroundcolor};
display:flex;
flex-direction:column;
width:100%;
height:100vh;
justify-content:center;
align-items:center;
`

//components
import Card from '../comps/Card'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
gap:100px;
`



export default function Multiplayer() {
  const [load, setLoad] = useState(false)

  if(load === false) {
    document.getElementById('code').style.display = 'none'
  }
  const {theme} = useTheme();
  return ( <Container>
      <Link href="/joinserver">
      <button>Join Server</button>
      </Link>
      <button>Generate Pin</button>
      <div id='code'>http://3d0e-2604-3d08-4a85-d700-9cac-5070-b3ab-1046.ngrok.io</div>
  </Container>
  )
}
