import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import 

const LoadContainer = styled.div``

const Container = styled.div`
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
      Mushroom
    </LoadContainer>
  }
  return ( <Container>
    boop
  </Container>
  )
}
