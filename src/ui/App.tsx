import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import BaseChart from './components/BaseChart'

function App() {
  useEffect(() => {
    const unsub = window.electron.subscribeStatistics(stats =>
      console.log(stats)
    )

    return unsub
  }, [])

  return (
    <>
      <header>
        <h1>
          <strong>F</strong>itness <strong>W</strong>orkplace
        </h1>
      </header>
      <main>
        <BaseChart data={[{ value: 25 }, { value: 30 }, { value: 100 }]} />
      </main>
      <Footer />
    </>
  )
}

export default App
