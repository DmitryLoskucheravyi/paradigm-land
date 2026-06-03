import { useState, lazy, Suspense } from 'react'
import Modal from './components/modal/Modal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Main = lazy(() => import('./components/pages/main/Main'))
const Course = lazy(() => import('./components/pages/cource/Course'))
function App() {

  return (
    <>
      <Suspense fallback={'load...'}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/course/:id' element={<Course />} />
          </Routes>
        </Router>
        <Modal />
      </Suspense>
    </>
  )
}

export default App
