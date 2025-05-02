import Card from './components/Card'
import React from 'react'

type User = {
  name: string
  age: number
}

function App() {
  
  // typing event with react, just hover over the event and see what type it is
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) { // this type of event is going to change depending on the type of element you are using, in this case it is a button
  }
  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {}

  // typing the useState hook
  const [count, setCount] = React.useState<number>(0) // 
  const [user, setUser] = React.useState<User | null>(null) // if it is async data from an api, it is possible to either get the user data or null, so we need to make the type as User or null
  const [loading, setLoading] = React.useState<boolean>(true) // if it is async data from an api, it is possible to either get the user data or null, so we need to make the type as User or null
  
  // typing the useRef hook
  const myRef = React.useRef<HTMLButtonElement>(null) 

  // The whole idea for typing hooks is, go to where you are using the hook and hover over it, 
  // it will show you the type of the hook, then you can use that type to type your hook
  // for example, if you are using useRef, hover over it and see what type it is, then you can use that type to type your ref
  
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

  const numbers = [1,2,3] as const // this defines the array as readonly, so you cannot change the values of the array
  const obj = { name: 'John', age: 25 } as const // this defines the object as readonly, so you cannot change the values of the object
  // This can be used with array and object to make sure that the values are readonly
  //numbers[0] = 1
  

  return (
    <>
      {
        users.map((user, index) => (
          <Card color="red" setCount={setCount} alertMessage={alertMessage} user={user} key={index}>{user.name}</Card>
        ))
      }
      {!loading && user && user.name}

      <button ref={myRef} onClick={(e)=>handleClick(e)}>Hello</button>
      <input type="text" onChange={(e)=>handleTextInput(e)} />
    </>
  )
}

export default App
