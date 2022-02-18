import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//component
import Card from '../comps/Card'
import TopMenu from '../comps/TopMenu'
import ChooseCategory from '../comps/ChooseCategory'
import BottomBar from '../comps/BottomBar'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
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

export default function Glider() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const GetGliders = async()=>{
      const resp = await axios.get("/api/gliders");
      setData(resp.data)
    }

    GetGliders();
  }, []);

  return ( <Container>
    <TopBarCont>
      <TopMenu/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='glider!'/>
    </HeadingCont>
    <CardCont>
    {data.map((o,i)=>
      <Card
        key={i}
        bgcolor={o.Color}


        //front card
        title='Glider'
        name={o.Body}
        img={o.Image}
        height={'94.72'}
        width={'148px'}

        //back card
        cat1={'Type'}
        val1={o.Type}
        cat2={'Weight'}
        val2={o.Weight}
        cat3={'Air Speed'}
        val3={o["Speed (Air)"]}
      />
    )}
    </CardCont>
    <BottomBarCont>
      <BottomBar link='/'/>
    </BottomBarCont>
  </Container>
  )
}
