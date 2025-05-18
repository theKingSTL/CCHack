import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Results from './Results';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-100 h-screen w-screen">
      <Results />  
    </div>
  )
}

export default App
