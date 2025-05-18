import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EnterWords from './EnterWords'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EnterWords/>
    </>
  )
}

export default App
