import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

//components
import Card from '../comps/Card'

const Container = styled.div`
`

export default function Home() {
  return ( <Container>
    <Card></Card>
  </Container>
  )
}
