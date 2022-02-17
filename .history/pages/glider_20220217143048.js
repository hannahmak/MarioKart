import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
`

export default function Glider() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const GetGliders = async()=>{
      const resp = await axios.get("/api/gliders");
      setData(resp.data)
    }

    GetBody();
  }, []);

  return ( <Container>
    {data.map((o,i)=><div key={i}>
      {o.Vehicle}
    </div>)}
  </Container>
  )
}
