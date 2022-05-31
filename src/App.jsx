import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div>
          <button onClick={()=>{setCount(count+1)}}>+</button>
          <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
        <button className='reset' onClick={()=>{setCount(0)}}>RESET</button>
      </header>
    </div>
  )
}

export default App
