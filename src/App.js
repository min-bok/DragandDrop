import { useState } from 'react';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar';
import styled from "styled-components"

const data = [{name: '이혜영'}, {name: '전유진'}, {name: '이서영'}]

function App() {
  const [list, setList] = useState([...data])

  return (
    <Cont>
        <ItemList list={list}/>
        <NavBar list={list} setList={setList}/>
    </Cont>
  );
}

export default App;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 50px;
  gap: 50px;
`
