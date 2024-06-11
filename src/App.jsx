import { useEffect, useState } from 'react'
import './App.css'

const url = 'https://api.adviceslip.com/advice'
function App() {
  const [advice, setAdvice] = useState('A word of wisdom is enough for a wise man')

  const [count, setCount] = useState(0)

  async function getAdvice() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.slip.advice)

      setAdvice(data.slip.advice)
      setCount(c => c + 1)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div>
      <h1>Advices :</h1>
      <button onClick={getAdvice}>Get Advice</button>

      <h3>{advice}</h3>

      <div className="message">
        <p>Total advices read: {count}</p>
      </div>
    </div>
  )
}

export default App
