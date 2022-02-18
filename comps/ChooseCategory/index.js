import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';



const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
margin-top:100px;
`
const Text = styled.h2`
font-size:36px;
color:${props=>props.color}
`

const ChooseCategory = ({
    category="kart!"
}) => {
  const {theme} = useTheme()
  return (
    <Container>
        <Text color={text[theme].textcolor}>Choose your {category}</Text>
    </Container>
  );
}

export default ChooseCategory