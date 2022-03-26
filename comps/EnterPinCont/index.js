import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';
import PinInput from '../PinInput';
import Link from 'next/link';


const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;

const PinContainer = styled.div`
display:flex;
flex-direction: column;
width:316px;
height:260px;
box-shadow: 0px 3.41198px 10px rgba(125, 125, 125, 0.2);
border-radius: 29.8548px;

`;

const PinContent = styled.div`
display:flex;
flex-direction: column;
margin-left:25px;
`;

const PinHeader = styled.h2`
font-family:Lexend;
font-size:20px;
`;

const PinEnter = styled.input`
width: 251.63px;
height: 59.71px;
background: rgba(196, 196, 196, 0.22);
border-radius: 17.0599px;
`;

const PinButton = styled.button`
width: 251.63px;
height: 59.71px;
background: rgba(196, 196, 196, 0.22);
border-radius: 17.0599px;
background-color:#FB0A40;
border:none;
font-family:Lexend;
color:white;
font-size:24px;
margin-top: 25px ;


&:hover{
    cursor:pointer;
}
`;

const Image = styled.img`
display: flex;
width:${props=>props.width};
height:${props=>props.height};
align-items: center;
justify-content: center;
margin-top:200px;
margin-left:180px ;
`;


const EnterPins = ({
src="/Yoshi.png"
}) => {
  return (

        <Container>
            
               <Image src={src}></Image>
       <PinContainer>
           <PinContent>
                <PinHeader>Enter Pin</PinHeader>
                <PinInput>
                  <PinEnter></PinEnter>
                </PinInput>                
                <Link href="/character">
                    <div>
                        <PinButton>Start</PinButton>
                    </div>
                </Link>
           </PinContent>
       </PinContainer>
        </Container>

  );



}

export default EnterPins