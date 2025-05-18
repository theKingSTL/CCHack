import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Results from './Results';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Results prompt="Make me a goofy and silly conspiracy theory with a max of 500 characters. Use the following topics: chickens, the moon landing, and Lebron James."/>
    </>
  )
}

export default App
