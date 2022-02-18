import styled from 'styled-components'
import {useState} from 'react'


// card component styling 
const CardInner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
`

const CardContainer = styled.div`
    display: flex;
    margin: 8px;
    background-color: transparent;
    width: 188px;
    height: 250px;
    perspective: 2000px;
    cursor: pointer;  

    &:hover ${CardInner} {
        transform: rotateY(180deg);
    }
`

const CardFront = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: ${props=>props.bgcolor};
    z-index: 2;
    border-radius: 20px;
`

const CardBack = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: ${props=>props.bgcolor};
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    border-radius: 20px;
`

//card content
const ContentContainerFront = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin: 20px;
`
//front card content
const Image = styled.img`
    height: ${props=>props.height};
    width: ${props=>props.width};
`

const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: flex-start;
    margin-top: 20px;
    font-size: 12px;
    color: #FDFDFD;
    text-align: left;
`

const Title = styled.div`
    font-size: 12px;
`

const Name = styled.div`
    font-weight: bold;
    font-size: 18px;
`
//back card content
const ContentContainerBack = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const StatsContainer = styled.div`
    height: 114px;
    width: 148px;
    border-radius: 10px;
    background: #FDFDFD;
    margin-bottom: 20px;
`

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    font-size: 12px;
    color: #303030;
`

const StatsHeader = styled.div`
    font-weight: 500;
    font-size: 16px;
`

const StatsVal = styled.div`
    font-size: 12px;
`

const Button = styled.button`
    width: 148px;
    height: 20px;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    background: #FDFDFD;
    
    cursor: pointer;
    font-size: 12px;
    color: #303030;
`

const Card =({
    //props
    bgcolor = '#FB0A40',
    img = '/mario.png',
    height = '114px',
    width = '107.14px',
    title = 'Driver',
    name = 'Mario', 

    cat1 = 'Class',
    val1 = 'Medium',

    cat2 = 'Class',
    val2 = 'Medium',

    cat3 = 'Class',
    val3 = 'Medium',
  
    onButtonClick= ()=>{ console.log('selected')}

}) => {

    const [flip, setFlip] = useState(false)

    return <CardContainer>
        <CardInner>

            <CardFront bgcolor={bgcolor}>
                <ContentContainerFront>
                  
                    <Image height={height} width={width}src={img}/>
              

                    <DescContainer>
                        <Title>{title}</Title>
                        <Name>{name}</Name>
                    </DescContainer>
                </ContentContainerFront>
            </CardFront>

            <CardBack bgcolor={bgcolor}>
                <ContentContainerBack>
                    <StatsContainer>
                        <Stats>
                            <StatsHeader>{cat1}</StatsHeader>
                            <StatsVal>{val1}</StatsVal>
                        </Stats>
                        <Stats>
                            <StatsHeader>{cat2}</StatsHeader>
                            <StatsVal>{val2}</StatsVal>
                        </Stats>
                        <Stats>
                            <StatsHeader>{cat3}</StatsHeader>
                            <StatsVal>{val3}</StatsVal>
                        </Stats>

                    </StatsContainer>
                    <DescContainer>
                        <Title>{title}</Title>
                        <Name>{name}</Name>
                    </DescContainer>
            
                        <Button  onClick={()=>{onButtonClick()}}>Select</Button>
                  
                </ContentContainerBack>
          
            </CardBack>
        </CardInner>
     
    </CardContainer>
   
}

export default Card