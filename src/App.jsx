import { useState, lazy, Suspense } from 'react'
import Modal from './components/modal/Modal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader/Loader'
const Main = lazy(() => import('./components/pages/main/Main'))
const Course = lazy(() => import('./components/pages/cource/Course'))
const NotFound = lazy(() => import('./components/pages/NotFound/NotFound'))
function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/course/:id' element={<Course />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <Modal />
      </Suspense>
    </>
  )
}

export default App
