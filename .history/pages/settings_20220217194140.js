import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DarkMode from '../comps/DarkMode'
import


const Container = styled.div`
background-color:#FB0A40;
`

export default function Tire() {

  return ( <Container>
      <DarkMode/>

  </Container>
  )
}
