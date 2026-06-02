import { useState, lazy } from 'react'
import Modal from './components/modal/Modal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Main = lazy(() => import('./components/pages/main/Main'))
const Course = lazy(() => import('./components/pages/cource/Course'))
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/course' element={<Course />} />
        </Routes>
      </Router>

      <Modal />
    </>
  )
}

export default App
