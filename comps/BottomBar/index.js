import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:row;
width:90%;
height:100%;
justify-content:flex-end;
align-items:center;
`

const BottomBar = ({
    link="/"
}) => {
  return (
    <Container>
        <Link href={link}>Next</Link>
    </Container>
  );
}

export default BottomBar