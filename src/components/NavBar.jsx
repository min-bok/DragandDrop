import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { onDragStart, onDragEnter, onDragEnd, onDragOver } from '../utils/dnd'

export default function NavBar({ list, setList }) {
  const dragItem = useRef(null)
  const dragOver = useRef(null)

  return (
    <NavList>
        {list && list.map((el, idx) => (
            <Item key={idx}
                draggable="true" 
                onDragStart={() => {onDragStart(dragItem, idx)}} 
                onDragEnter={() => {onDragEnter(dragOver, idx)}} 
                onDragEnd={() => {onDragEnd(list, dragItem, dragOver, setList)}} 
                onDragOver={(e) => onDragOver(e)}>
            {el.name}</Item>
        ))}
    </NavList>
  )
}

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
    padding: 15px;
`

const Item = styled.li`
    background-color: pink;
    padding: 15px;
    text-align: center;
    cursor: pointer;
`