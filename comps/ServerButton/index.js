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
height:70px;
color: ${props=>props.color};
background-color:${props=>props.bgcolor};
border:none;
border-radius:20px;
font-size:24px;
font-family:Lexend;
margin-bottom:15px;
margin-top:50px;

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
margin-top:30px;
`;

const ServerButton = ({
text="",
bgcolor="#F0F0F0",
color="",
src=""
}) => {
  return (

        <Container>
            <Button bgcolor={bgcolor} color={color}>
                {text}
            </Button>
        </Container>

  );



}

export default ServerButton