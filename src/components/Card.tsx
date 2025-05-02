// example of a simple card component

import React from "react"

type CardProps = {
    setCount: React.Dispatch<React.SetStateAction<number>> // make sure that the setCount can only be a react state setter function
 // children is a special prop in React that allows you to pass components as props
    alertMessage?: (message: string) => void // make sure that the alertMessage can only be a function that takes a string and returns void
    user: User // make sure that the user is an object with a name and age property
    children?: React.ReactNode // children is a special prop in React that allows you to pass components as props

    color: "red" | "blue" | "purple" // make sure that the color can only be red or blue, particular useful for tailwindcss
}

type User = {  // always make the objec type as its own type, so that you can reuse it
    name: string
    age: number
}

const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
}

// If you need to reuse the type in multiple code scripts, you can create a separate file for it, make a folder in src called "types" and import it here

export default function Card({setCount, color}: CardProps) {
    return (
    <div>
        <button onClick={()=>setCount((prev: number)=> prev + 1)} className={colorMap[color]}>Hi</button>
    </div>
    )
}