import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd'

const DropContainer = styled.div`
    display: flex;
    background: ${({bg})=>bg || '#DDD'};
    height: 300px;
    width: 500px;
    margin: 50px;
`

const DeleteZone = ({
    //props
    children = null,
    onDropItem = ()=>{}
}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ['card'],
        drop:(item, monitor)=>{
            onDropItem(item)
            console.log("item that was dropped ", item, monitor)
        },
        // Props to collect
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return <DropContainer ref={drop} bg={canDrop && isOver ? '#999' : '#DDD'}> {children} </DropContainer>
}

export default DeleteZone