import { useState } from "react"

export const Clicks = () => {

  const [counter, setCounter] = useState(0)

  return (
    <button onClick={() => setCounter(current => current + 1)}>{counter} clicks!</button>
  )
}
