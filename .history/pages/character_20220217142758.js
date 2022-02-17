import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
`

export default function Character() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const GetCharacter = async()=>{
      const resp = await axios.get("/api/characters");
      setData(resp.data)
    }

    GetCharacter();
  }, []);

  return ( <Container>
    {data.map((o,i)=><div key={i}>
      {o.Vehicle}
    </div>)}
  </Container>
  )
}