import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC } from '../utils/provider';
import { useTheme } from '../utils/provider';
import Link from 'next/link'

//Components
import PlayerSelect from '../comps/PlayerSelect';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;

`;

const Header = styled.h1`
 margin-bottom:0px;
`;

const SubHeader = styled.h3`
`;






export default function Character() {
  return ( <Container>
      <Header>Pick Your Players</Header>
      <SubHeader>Pick by yourself or with friends</SubHeader>

      <Link href="/character">
      <div> <PlayerSelect src="/Single_Toad.png" color="black" text="Singleplayer"></PlayerSelect></div>
      </Link>

      <Link href="/multiplayer">
      <div> <PlayerSelect src="Grouped_Toads.png" color="black"  text="Multiplayer"></PlayerSelect> </div>
      </Link>
  </Container>
  )
}