import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';


const Container = styled.div``

const Button = styled.button`
width:108px;
height:34px;
font-family:Lexend;
color: #FB0A40;
background-color:white;
border:2px #FB0A40 solid;
border-radius:8px;

`

const FilterButton = ({
text=""
}) => {
  return (

        <Button>{text}</Button>

  );



}

export default FilterButton