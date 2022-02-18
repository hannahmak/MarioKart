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
        title={'Kart'}
        name={o.Vehicle}
      >

      </Card>
    )}
  </Container>
  )
}
