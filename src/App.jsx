import { lazy, Suspense } from 'react'
import Modal from '@components/Modal/Modal'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from '@components/Loader/Loader'
const Main = lazy(() => import('@components/pages/Main/Main'))
const Course = lazy(() => import('@components/pages/Course/Course'))
const Offer = lazy(() => import('@components/pages/Offer/Offer'))
const NotFound = lazy(() => import('@components/pages/NotFound/NotFound'))
function App() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/course/:id' element={<Course />} />
            <Route path='/oferta' element={<Offer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <Modal />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
