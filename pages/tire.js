import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from '../comps/Card'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
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
  </Container>
  )
}
