import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoadContainer = styled.div``

const Container = styled.div`
`

export default function Home() {
  const [load, setLoad] = useState(false)

  if(load === false) {
    setTimeout(()=>{
      setLoad(true)
    },3000)

    return <Container
  }
  return ( <>
    boop
  </Container>
  )
}
