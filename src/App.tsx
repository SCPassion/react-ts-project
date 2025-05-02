import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log('App component rendered')
  return (
    <>
      <div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

    </>
  )
}

export default App
