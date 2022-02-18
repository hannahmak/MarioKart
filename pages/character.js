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
    {data.map((o,i)=>
      <Card 
        key={i} 
        name={o.Character}
      >

      </Card>
    )}
  </Container>
  )
}