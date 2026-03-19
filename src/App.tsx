import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button role='count-button' onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
         Learning Docker to build app and deploy into nginx.
        </p>
      </div>
      <p>This app is running inside Docker container with Docker volume, <br/>
      that helps us enabling hot reloading by mapping docker container source files to local machine source files.</p>
    </>
  )
}

export default App
