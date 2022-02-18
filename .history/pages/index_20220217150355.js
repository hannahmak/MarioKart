import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const LoadContainer = styled.div`
background-color:#FB0A40;
`

const Container = styled.div`
`

const Logo = styled.img `
width:50%;
`

export default function Home() {
  const [load, setLoad] = useState(false)

  if(load === false) {
    setTimeout(()=>{
      setLoad(true)
    },3000)

    return <LoadContainer
    as={motion.div}
    initial="hidden" animate="visible" variants={{
      hidden: {
        opacity:1,

      },
      visible: {
        opacity: 0,

        transition: {
          duration:1,
          delay:1
        }
      }
    }}
    >
      <Logo src='/mushroom-cup-white.svg'/>
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
    boop
  </Container>
  )
}
