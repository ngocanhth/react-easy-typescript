import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Footer, Header } from './components/common'
import { Student} from './features/labs/Students'
import { StudentModel } from './models/student'
// import Header from './components/common/Header'
// import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  const john: StudentModel = {
    name: 'John',
    age: 32,
    gender: "Male",
  }

  function handleStudentClick(student: StudentModel) {
    console.log("Student Click");
    console.log(student);
  }


  return (
    <div className="App">
     <Header />
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          {/* <Student student = {{name:"Easy frontend", gender: 'male', isHero: true}}/> */}

          <Student student = {john} onClick={handleStudentClick} />

     <Footer />
    </div>
  )
}

export default App
