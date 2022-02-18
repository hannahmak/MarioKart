import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//components
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction:column;
justify-content: center;
`

const TopBarCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
position:fixed;
height:10%;
background-color:#FB0A40;
z-index:20;
top:0px;
`

const CardCont = styled.div`
height:70%;
width:100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom:100px;
`

const HeadingCont = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
justify-content:center;
`

const BottomBarCont = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
position:fixed;
height:10%;
background-color:#FB0A40;
z-index:20;
bottom:0px;
`


export default function Character() {

  const [data, setData] = useState([])

  useEffect(()=>{
    const GetCharacter = async()=>{
      const resp = await axios.get("/api/characters")
      setData(resp.data)
    }

    GetCharacter()

  }, [])

  return ( <Container>
    <TopBarCont>
      <TopMenu link='./'/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='character!'/>
    </HeadingCont>
    <CardCont>
      {data.map((o,i)=>
        <Card 
          key={i} 
          name={o.Character}
        >

        </Card>
      )}
    </CardCont>
    <BottomBarCont>
      <BottomBar link='/body'/>
    </BottomBarCont>
  </Container>
  )
}