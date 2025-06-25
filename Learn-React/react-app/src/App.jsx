import { useState } from 'react'
import './App.css'
import Item from './components/Item';
import ItemData from "./components/ItemData.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Item name="Nirma"></Item>
          <ItemData day="15" month="Feb" year="2005"></ItemData>

          <Item name="SurfExcel3"></Item>
          <ItemData day="15" month="May" year="2009"></ItemData>

          <Item name="Tide"></Item>
          <ItemData  day="21" month="Feb" year="2016"></ItemData>

          <div className="App">
              Hello World!
          </div>
      </div>

  );
}

export default App
