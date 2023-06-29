import React from 'react'
import styled from 'styled-components'

export default function ItemList({ list }) {

  return (
    <ListWrap>
        {list && list.map((item, idx) => (
        <ListItem key={idx}>
            <li>{item.name}</li>
            {/* <DragBtn type='button'>
              <img src={process.env.PUBLIC_URL + "/images/drag-icon.svg"} alt="drag-button" />
            </DragBtn> */}
        </ListItem>
        ))}
    </ListWrap>
  )
}

const ListWrap = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
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