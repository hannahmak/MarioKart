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

const HeadingCont = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
  justify-content:center;
`

const ContImage = styled.div`
display:flex;
align-items: center;
justify-content: center;

`;

const ImageCont = styled.div`
display:flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 0;
`;

const Image = styled.img`
display: flex;
width:303px;
height:303px;
align-items: center;
justify-content: center;
margin-top:30px;
`;





export default function Multiplayer() {
    
  return ( <Container>
 <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
{/* DELETE THESE AFTER DONE */}
<br></br>
<br></br>
<br></br>
<br></br>
 {/* DELETE THESE AFTER DONE */}

<Link href="/enterpin">
    <div>
        <ServerButton text="Join Server"></ServerButton>
    </div>
</Link>

<Link href="/enterpin">
    <div>
        <ServerButton text="Generate Pin" bgcolor="#FB0A40" color="white"></ServerButton>
    </div>
</Link>

<ContImage>

<ImageCont>
<Image src="/Pipe.png"></Image>
</ImageCont>
</ContImage>


  </Container>
  )
}