import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
`

export default function Home() {
  return ( <Container>
    {data.map((o,i)=><div key={i}>
      {o.Vehicle}
    </div>)}
  </Container>
  )
}
