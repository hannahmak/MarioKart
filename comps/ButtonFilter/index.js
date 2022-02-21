import styled from 'styled-components'

const ButtonContainer = styled.div`
    margin: 10px;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    height: 34px;
    width: 108px;
    background-color: ${props=>props.bgcolor};
    border: 1px solid #FB0A40;
    box-sizing: border-box;
    border-radius: 20px;

    color: #FB0A40;
    font-weight: 500;
    font-size: 12px;
`

const ButtonFilter = ({
    //props
    bgcolor =  'none',
    text = "default",
    onFilterClick=()=>{}

}) => {
  return (
      <ButtonContainer onClick={onFilterClick}>
          <Button bgcolor={bgcolor} >
              {text}
          </Button>
      </ButtonContainer>
  )
}

export default ButtonFilter