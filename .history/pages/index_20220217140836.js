import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
`

export default function Home() {
  
  useEffect(()=>{
    const GetBody = async()=>{
      const resp = await axios.get("../api/bodies");
    }

    GetBody();

  }, [])

  return ( <Container>
    
  </Container>
  )
}
