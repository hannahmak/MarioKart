import styled from 'styled-components'
import {useState} from 'react'
import { useTheme } from '../../utils/provider'
import { loadingToad } from '../../utils/variable'


// card component styling 
const Container = styled.div`
display:flex;
width:100%;
height:100%;
justify-content:center;
align-items:center;
`

const Logo = styled.img`
width:50%;
`

const MushroomLogo =({
    //props
    image="/mushroom-cup-white.svg"
}) => {
    return <Container>
        <Logo src={image}/>
    </Container>
   
}

export default MushroomLogo