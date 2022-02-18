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
  </Container>
  )
}
