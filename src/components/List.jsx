import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
// import { onDragStart, onDragEnter } from "../utils/dnd.js"

const data = [{id: 1,  name: '이혜영'}, {id: 2, name: '전유진'}, {id: 3, name: '이서영'}]

export default function List() {
  const dragItem = useRef(null)
  const dragOver = useRef(null)
  const [list, setList] = useState([...data])

  const onDragStart = (e, idx) => {
    dragItem.current = idx
  }
  
  const onDragEnter = (e, idx) => {
    dragOver.current = idx
  }

  const onDragEnd = () => {
    const copyList = [...list]
    const getDragItem = copyList[dragItem.current]
    copyList.splice(dragItem.current, 1);
    copyList.splice(dragOver.current, 0, getDragItem); 
    dragItem.current = null;
    dragOver.current = null;
    setList(copyList);
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <ListWrap>
        {list && list.map((item, idx) => (
        <ListItem 
          key={idx} 
          draggable="true" 
          onDragStart={(e) => {onDragStart(e, idx)}} 
          onDragEnter={(e) => {onDragEnter(e, idx)}} 
          onDragEnd={onDragEnd} 
          onDragOver={onDragOver}>
            <li>{item.name}</li>
            <DragBtn type='button'>
              <img src={process.env.PUBLIC_URL + "/images/drag-icon.svg"} alt="drag-button" />
            </DragBtn>
        </ListItem>
        ))}
    </ListWrap>
  )
}

const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 100px auto;
`

const ListItem = styled.div`
  display: flex;
  background-color: #c2c2c2;
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
`

const DragBtn = styled.button`
  border: none;
  background-color: transparent;
`
