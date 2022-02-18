import styled from 'styled-components'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
`

export default function Settings() {

  return ( <Container>
    {data.map((o,i)=><div key={i}>
      {o.Body}
    </div>)}
  </Container>
  )
}