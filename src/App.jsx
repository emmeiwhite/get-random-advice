import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import backgroundImage from './assets/oasis.jpg'
const url = 'https://api.adviceslip.com/advice'

function App() {
  const [advice, setAdvice] = useState('A word of wisdom is enough for a wise man')
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  console.log('App Component')
  async function getAdvice() {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setAdvice(data.slip.advice)
      setCount(c => c + 1)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      setError(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('useEffect Invoked')
    getAdvice()
  }, [])

  return (
    <main
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="wisdom-wrapper text-center  p-8 rounded-lg mx-auto w-[90vw] sm:w-[500px] bg-slate-50 opacity-80">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Advice Oasis
          <br />
          <span className="text-base text-gray-700">Tap for Wisdom</span>
        </h1>
        <button
          onClick={getAdvice}
          className="my-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Get Advice
        </button>
        {loading && <Loader />}
        {error && !loading ? <Error error={error} /> : <Advice advice={advice} />}{' '}
        <Message count={count} />
      </div>
    </main>
  )
}

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 my-4"></div>
    </div>
  )
}

function Advice({ advice }) {
  return <h3 className="text-blue-900 text-xl font-semibold my-8">{advice}</h3>
}

function Error({ error }) {
  return <h3 className="text-red-900 text-xl font-semibold my-8">{error}</h3>
}

function Message({ count }) {
  return (
    <div className="message">
      <p className="text-gray-700 text-lg">Total advices read: {count}</p>
    </div>
  )
}

Message.propTypes = {
  count: PropTypes.number.isRequired
}

Advice.propTypes = {
  advice: PropTypes.string
}

Error.propTypes = {
  error: PropTypes.string
}

export default App
