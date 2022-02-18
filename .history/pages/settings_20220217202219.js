import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DarkMode from '../comps/DarkMode'
import { useTheme } from '../utils/provider'

const Container = styled.div`
background-color:#FB0A40;
`

export default function Tire() {

const {theme, setTheme} = useTheme();

  return ( 
  <Container>
      <DarkMode onSwitchClick={()=>setTheme(theme==='dark'?'default':'dark')}/>
  </Container>
  )
}
