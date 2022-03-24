import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';


const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;

const Button = styled.button`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:295px;
height:238px;
color: ${props=>props.color};
background-color:${props=>props.bgcolor};
border:none;
border-radius:20px;
font-size:28px;
font-family:Lexend;
margin-bottom:15px;
margin-top:50px;
transition:0.3s;

&:hover{
    background-color:#FB0A40;
    color:white;
    cursor:pointer;
}
`;

const Image = styled.img`
display: flex;
width:${props=>props.width};
height:${props=>props.height};
align-items: center;
justify-content: center;
margin-top:30px;
`;

const PlayerSelect = ({
text="",
bgcolor="#F0F0F0",
src="/Single_Toad.png",
color="",
width="",
height=""
}) => {
  return (

        <Container>
            <Button bgcolor={bgcolor} color={color}>
                {text}
                <Image width={width} height={height} src={src}></Image>
            </Button>
        </Container>

  );



}

export default PlayerSelect