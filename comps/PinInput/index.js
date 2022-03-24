import { color } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import { text } from '../../utils/variable';

const PinEnter = styled.input`
width: 251.63px;
height: 59.71px;
background: rgba(196, 196, 196, 0.22);
border-radius: 17.0599px;
border:none;
font-family:Lexend;
`;

const PinInput = ({

}) => {
  return (
    <PinEnter placeholder="Pin"></PinEnter>
  );
}

export default PinInput