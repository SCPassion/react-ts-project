import Card from './components/Card'
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },

  ]

  function alertMessage(message: string) {
    alert(message)
  }
  

  return (
    <>
      {
        users.map((user, index) => (
          <Card color="red" setCount={setCount} alertMessage={alertMessage} user={user} key={index}>{user.name}</Card>
        ))
      }
    </>
  )
}

export default App
