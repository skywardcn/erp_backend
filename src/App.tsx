import { useState } from 'react'
import './App.css'
import { Button } from 'antd'




const App = () => {
  const [count, setCount] = useState(1)
  const inc = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Button type="primary" onClick={inc}>{count}</Button>
    </>
  )
}

export default App
