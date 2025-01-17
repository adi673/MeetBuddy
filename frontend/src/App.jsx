import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/navbar'
import QuestionnaireList from './components/QuestionnaireList'
import Footer from './components/footer'
import Router from './components/router-structure'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Router/>
    {/* <QuestionnaireList/>
    <Footer/> */}
    </>
  )
}

export default App
