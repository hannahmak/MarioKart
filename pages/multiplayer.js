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
    const [show, setShow] = useState(false);
    function displayPin(){
      setShow(true)
    }
  return ( <Container>
 <TopBarCont>
      <TopMenu link='/pickplayers'/>
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
    <div onClick={displayPin}>
        <ServerButton text="Generate Pin" bgcolor="#FB0A40" color="white"></ServerButton>
    </div>
    <div style={{display: show?"flex":"none", width:'100%', justifyContent:"center", alignItems:'center'}}>
      <p style={{background:'#FB0A40', color:'white', padding:'20px', borderRadius:'20px'}}>http://3d0e-2604-3d08-4a85-d700-9cac-5070-b3ab-1046.ngrok.io</p>
    </div>

<ContImage>

<ImageCont>
<Image src="/Pipe.png"></Image>
</ImageCont>
</ContImage>


  </Container>
  )
}