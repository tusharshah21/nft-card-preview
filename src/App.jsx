import { useState } from 'react'
import './App.css'
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[hsl(217,54%,11%)] min-h-screen'>
        <Card/>
      </div>
    </>
  )
}

export default App
