import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('home')

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      <AnimatePresence mode="wait" initial={false}>
        {page === 'home' && <Home key="home" />}
        {page === 'about' && <About key="about" />}
      </AnimatePresence>
    </Layout>
  )
}

export default App
