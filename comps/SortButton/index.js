import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';


const Container = styled.div`
width:240px;
height:34px;
font-family:Lexend;
color: #FB0A40;
background-color:white;
border:2px #FB0A40 solid;
border-radius:8px;
`

const LeftButton = styled.button`
width:120px;
height:34px;
font-family:Lexend;
color: #FB0A40;
background-color:white;
border:1px #FB0A40 solid;
border-radius: 5px 0px 0px 5px;
`

const RightButton = styled.button`
width:120px;
height:34px;
font-family:Lexend;
color: #FB0A40;
background-color:white;
border:1px #FB0A40 solid;
border-radius: 0px 5px 5px 0px;
`

const SortButton = ({
text=""
}) => {
  return (
        <Container>
            <LeftButton>{text}</LeftButton>
            <RightButton>{text}</RightButton>
        </Container>

  );



}

export default SortButton