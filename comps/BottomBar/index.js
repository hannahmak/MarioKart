import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
width:90%;
height:100%;
justify-content:center;
align-items:center;
`
const Button = styled.button`
border: 1px solid #FDFDFD;
box-sizing: border-box;
border-radius: 20px;
background-color:transparent;
color:white;
width:130px; 
height:50%;
`

const ButtonHolder = styled.div`
display:flex;
flex-direction:column;
width:90%;
align-items:flex-end;
justify-content:center;
height:100%;
`

const BottomBar =({
  nextlink="./"
}) => {
  return (
    <Container>
      <ButtonHolder>
        {/* <Link href={link}>Next</Link> */}
        <Link href={nextlink}>
          <Button>Next</Button>
        </Link>
      </ButtonHolder>
    </Container>
  );
}

export default BottomBar