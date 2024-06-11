import { useEffect, useState } from 'react'

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
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="wisdom-wrapper text-center  ">
        <h1 className="text-3xl">Advice Oasis: Tap for Wisdom</h1>
        <button
          onClick={getAdvice}
          className="my-4 py-1 px-2 "
        >
          Get Advice
        </button>

        <h3>{advice}</h3>

        <div className="message">
          <p>Total advices read: {count}</p>
        </div>
      </div>
    </main>
  )
}

export default App
