/* src/App.jsx */
import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import { WorkList } from './components/WorkList'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'
import LoginForm from './components/LoginForm'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import { useAuth } from './context/AuthContext'
import { useWorks } from './hooks/useWorks'

function App() {
  const { user } = useAuth()
  const { works, loading, error } = useWorks()

  const [selectedGenre, setSelectedGenre] = useState('すべて')
  const [query, setQuery] = useState('')
  const [selectedWork, setSelectedWork] = useState(null)

  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  const filteredWorks = works
    .filter((w) => selectedGenre === 'すべて' || w.genre === selectedGenre)
    .filter((w) => w.title.includes(query))

  // 未ログインの場合はログインフォームを表示
  if (!user) {
    return (
      <div className={styles.app}>
        <Header />
        <LoginForm />
        <Footer />
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />

        {loading && <Spinner />}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <WorkList
            works={filteredWorks}
            onSelect={(work) => setSelectedWork(work)}
          />
        )}

      </main>
      <Footer />

      {selectedWork && (
        <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  )
}

export default App
