import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:row;
width:90%;
height:100%;
justify-content:center;
align-items:center;
`
const BackCont = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
`
const SettingCont = styled.div`
width:50%;
`
const Setting = styled.img`
width:35px;
`
const Back = styled.img`
width:40px;
`

const TopMenu = ({
    link="/"
}) => {
  return (
    <Container>
        <SettingCont>
            <Link href={link}>
                <Back src='back-icon.svg'/>
            </Link>
        </SettingCont>
        <BackCont>
            <Link href="/settings">
                <Setting src='/setting-icon.svg'/>
            </Link>
        </BackCont>
    </Container>
  );
}

export default TopMenu