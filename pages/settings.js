import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DarkMode from '../comps/DarkMode'
import { useTheme } from '../utils/provider'
import Link from 'next/link'
import TopMenu from '../comps/TopMenu'
import { text } from '../utils/variable'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`

const TopBarCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
position:fixed;
height:10%;
background-color:#FB0A40;
z-index:20;
top:0px;
`
const UserInfoCont = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
justify-content:center;
margin-top:100px;
`

const SettingCont = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:90%;
`

const HeadingCont = styled.div`
display:flex;
flex-direction:column;
width:90%;
`

const Preference = styled.h2`
color:${props=>props.headcolor}
`

const TextHolder = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:left
`

const Text = styled.p`
color:${props=>props.pcolor}
`

const DarkModeHolder = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:flex-end;
`

const SettingHeader = styled.h1 `
color:${props=>props.settingheadcolor};
`

export default function Tire() {
  const {theme, setTheme} = useTheme();

  return ( 
  <Container>
    <TopBarCont>
      <TopMenu display='none'/>
    </TopBarCont>
    <UserInfoCont>
      <SettingHeader settingheadcolor={text[theme].textcolor}>profile info goes here</SettingHeader>
    </UserInfoCont>
    <HeadingCont>
      <Preference headcolor={text[theme].textcolor}>Preferences</Preference>
    </HeadingCont>
    <SettingCont>
      <TextHolder>
        <Text pcolor={text[theme].textcolor}>Dark Mode</Text>
      </TextHolder>
      <DarkModeHolder>
        <DarkMode onSwitchClick={()=>setTheme(theme==='dark'?'default':'dark')}/>
      </DarkModeHolder>
    </SettingCont>
  </Container>
  )
}
