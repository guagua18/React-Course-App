import './App.css'
import { useState } from 'react'

function Greeting({name,age}) {
  return <h1>Hello, I am {name},i am {age} years old!</h1>
}

function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }
  return (
    <div>
      <button onClick={toggleGreeting}>Toggle Greeting</button>
      {showGreeting && <Greeting name="Alice" age={30} />}
    </div>
  )
}

export default App
