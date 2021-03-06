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

const Logo = styled.img `
width:50%;
`

const Button = styled.button `
width: 295px;
height: 60px;
background: #FB0A40;
border-radius: 20px;
border-style:none;
color:white;
`

export default function Home() {
  const [load, setLoad] = useState(false)
  const {theme} = useTheme();

  if(load === false) {
    setTimeout(()=>{
      setLoad(true)
    },3000)

    return <LoadContainer backgroundcolor={loadingToad[theme].background}
    as={motion.div}
    initial="hidden" animate="visible" variants={{
      hidden: {
        opacity:1,

      },
      visible: {
        opacity: 0,

        transition: {
          duration:2,
          delay:1
        }
      }
    }}
    >
      <MushroomLogo image={loadingToad[theme].logo}/>
    </LoadContainer>
  }
  return ( <Container
    as={motion.div}
    initial="hidden" animate="visible" variants={{
      hidden: {
        opacity:0,

      },
      visible: {
        opacity: 1,

        transition: {
          duration:0.5,
          delay:0,
        }
      }
    }}
  >
    <Logo src='/mushroom-cup-red.svg'/>
    <Link href='/pickplayers'>
      <Button>Login</Button>
    </Link>
  </Container>
  )
}
