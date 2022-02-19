import styled from 'styled-components'
import {useState} from 'react'


// card component styling 
const ButtonContainer = styled.button`
display:flex;
width:295px;
height:70px;
background-color:${props=>props.bgcolor};
color:white;
font-size:28px;
font-family:Lexend;
justify-content:center;
align-items:center;
text-align:center;
border:white 1px solid; 
border-radius:20px;
`

// ^^ Change border back to white once figure out page background colour

const ButtonText = styled.p`

`

// const CardFront = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     background-color: ${props=>props.bgcolor};
//     z-index: 2;
//     border-radius: 20px;
// `



const BigButton =({
bgcolor="",
buttontext="Continue"
}) => {

   

    return <ButtonContainer bgcolor="">
        <ButtonText>
            {buttontext}
        </ButtonText>
    </ButtonContainer>
   
}

export default BigButton