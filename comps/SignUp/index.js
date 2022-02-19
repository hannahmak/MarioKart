import styled from 'styled-components'
import {useState} from 'react'

// Button Comp Styling 
const UserForm = styled.button`
display:flex;
width:295px;
height:70px;
background-color:#FB0A40; 
font-size:28px;
font-family:Lexend;
justify-content:center;
align-items:center;
text-align:center;
border:white 1px solid; 
border-radius:20px;
margin-bottom:35px;
color:white;
`

// ^^ Change border back to white once figure out page background colour

const ButtonText = styled.p`

`

const UserForm =({
buttontext="Continue"
}) => {

   

    return <UserForm>

    </UserForm>
   
}

export default UserForm