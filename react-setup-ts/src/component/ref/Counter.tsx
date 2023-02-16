import React, { useRef, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  const ref = useRef<number>(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }
  return <button onClick={handleClick}>Click me!</button>
}

export default Counter
