import styled from 'styled-components'
import {useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'

// card component styling 

const CardContainer = styled.div`
    display: flex;
    margin: 8px;
    background-color: transparent;
    width: 188px;
    height: 250px;
    perspective: 2000px;
    cursor: pointer;
    ${({op})=>op && `opacity:${op};`}
    ${({position, left, top})=>position === 'fixed' && `
      left:${left}px;
      top:${top}px;
      position:${position};
      z-index:10;
    `}  
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
const ImageCont = styled.div`
    background-size:contain;
    width:${props=>props.width};
    height:${props=>props.height};
`;

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




const Card =({
    //props
    item = {},
    children = null,

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

    const [pos, setPos] = useState({
        left: 0, 
        top: 0, 
        position: 'relative'
    })

	const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
        type: 'card',
        item,
        end:(item, monitor)=>{
        if(!monitor.didDrop()){
            setPos({
            left:monitor.getClientOffset().x,
            top:monitor.getClientOffset().y,
            position:'fixed'
            })
        }
        },
 
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            coords: monitor.getClientOffset()
        })
    }))
    
    // console.log(isDragging)
    //console.log(coords)

    const sty = {
        left:pos.left,
        top:pos.top,
        position:pos.position
    }

    if(coords !== null && isDragging){
        sty.left = coords.x +20;
        sty.top = coords.y;
        sty.position = 'fixed';
    }
    

    return <CardContainer 
        ref={dragPreview} 
        op={isDragging ? 0.5 : 1}
        left={sty.left}
        top={sty.top}
        position={sty.position} 
    >
        <CardFront bgcolor={bgcolor} ref={drag}>
            <ContentContainerFront>
                <ImageCont>
                    <Image height={height} width={width} src={img}/>
                </ImageCont>

                <DescContainer>
                    <Title>{title}</Title>
                    <Name>{name}</Name>
                </DescContainer>
            </ContentContainerFront>
        </CardFront>
    </CardContainer>
   
}

export default Card

    // width: 148px;
    // height: 20px;
    // border-radius: 20px;
    // border: none;
    // margin-top: 10px;
    // background: #FDFDFD;
    // cursor: pointer;
    // font-size: 12px;
    // color: #303030;