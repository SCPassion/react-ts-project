import Card from './components/Card'
import React from 'react'

type User = {
  name: string
  age: number
}

function App() {
  // typing the useState hook
  const [count, setCount] = React.useState<number>(0) // 
  const [user, setUser] = React.useState<User | null>(null) // if it is async data from an api, it is possible to either get the user data or null, so we need to make the type as User or null
  const [loading, setLoading] = React.useState<boolean>(true) // if it is async data from an api, it is possible to either get the user data or null, so we need to make the type as User or null
  
  const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },

  ]

  React.useEffect(() => {
    setUser({ name: 'John', age: 25 }) // this is just an example, in a real world app, you would get the user data from an api
    setLoading(false) // this is just an example, in a real world app, you would get the user data from an api
  }, [])

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
      {!loading && user && user.name}
    </>
  )
}

export default App
