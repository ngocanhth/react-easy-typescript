import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Footer, Header } from './components/common'
import { Student } from './features/labs/Students'
// import Header from './components/common/Header'
// import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

     <Header />
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          {/* <Student student = {{name:"Easy frontend", gender: 'male', isHero: true}}/> */}

          <Student name= 'Easy frontend' gender= 'male' isHero />

     <Footer />
    </div>
  )
}

export default App
