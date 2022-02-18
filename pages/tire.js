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

export default function Tire() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const GetBody = async()=>{
      const resp = await axios.get("/api/tires");
      setData(resp.data)
    }

    GetBody();
  }, []);

  return ( <Container>
    <TopBarCont>
      <TopMenu link='/character'/>
    </TopBarCont>
    <HeadingCont>
      <ChooseCategory category='tire!'/>
    </HeadingCont>
    <CardCont>
    {data.map((o,i)=>
    <Card 
      key={i}
      bgcolor={o.Color}

      //front card
      title={'Tires'}
      name={o.Body}
      img={o.Image}
      height={'94.72'}
      width={'148px'}
      
      //back card
      cat1={'Speed'}
      val1={o.Speed}
      cat2={'Handling'}
      val2={o.Handling}
      cat3={'Traction'}
      val3={o.Traction}
    />
    )}
    </CardCont>
    <BottomBarCont>
      <BottomBar link='/glider'/>
    </BottomBarCont>
  </Container>
  )
}
