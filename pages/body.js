import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//components
import Card from '../comps/Card'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Body() {
  const [data, setData] = useState([])

  useEffect(()=>{
    const GetBody = async()=>{
      const resp = await axios.get("/api/bodies")
      setData(resp.data)
    }

    GetBody()

  }, [])

  return ( <Container>
  {data.map((o,i)=>
      <Card 
        key={i} 
        bgcolor={o.Color}

        //front card
        title={'Kart'}
        name={o.Vehicle}
        img={o.Image}
        height={'94.72'}
        width={'148px'}

        //back card
        cat1={'Speed'}
        val1={o.Speed}
        cat2={'Acceleration'}
        val2={o.Acceleration}
        cat3={'Mini Turbo'}
        val3={o.MiniTurbo}
      />
    )}
  </Container>
  )
}
