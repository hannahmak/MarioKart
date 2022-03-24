import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'
import { useFilter } from '../utils/provider';
import { useFavC } from '../utils/provider';
import { useTheme } from '../utils/provider';

//Components


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  justify-content: center;
`;






export default function Character() {
  return ( <Container>

  </Container>
  )
}