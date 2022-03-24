import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC } from '../utils/provider';
import { useTheme } from '../utils/provider';
import Link from 'next/link';

//Components
import TopMenu from '../comps/TopMenu'
import ServerButton from '../comps/ServerButton';
import ChooseCategory from '../comps/ChooseCategory'



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  justify-content: center;
`;

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





export default function EnterPin() {
  return ( <Container>
 <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>


  </Container>
  )
}