import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Footer, Header } from './components/common'
import { Student} from './features/labs/Students'
import { StudentModel } from './models/student'
import { MyText } from './features/labs/MyText'
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

     <MyText title="12134">Esy Frontend</MyText>
     <MyText>123</MyText>
     <MyText>{false}</MyText>
     <MyText>{undefined}</MyText>
     <MyText>
       <span>easy</span>
     </MyText>
     <MyText>
       <span>easy</span> frontend
     </MyText>
     <MyText>
       <span>easy</span> 
       <span>frontend</span>
     </MyText>
    </div>
  )
}

export default App
