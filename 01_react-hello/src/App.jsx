/* src/App.jsx */
import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { useWorks } from './hooks/useWorks'
import styles from './App.module.css'
import Header from './components/Header'
import { WorkList } from './components/WorkList'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'
import LoginButton from './components/LoginButton'
import Spinner from './components/Spinner'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { user, loading: authLoading } = useAuth()
  const { works, loading: worksLoading, error } = useWorks()

  const [selectedGenre, setSelectedGenre] = useState('すべて')
  const [query, setQuery] = useState('')
  const [selectedWork, setSelectedWork] = useState(null)

  const [theme, setTheme] = useState('light')

  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  const filteredWorks = works
    .filter((w) => selectedGenre === 'すべて' || w.genre === selectedGenre)
    .filter((w) => w.title.includes(query))

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  // 認証状態の確認中
  if (authLoading) {
    return <Spinner />
  }

  // 未ログイン
  if (!user) {
    return <LoginButton />
  }

  // ログイン済み
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.app} data-theme={theme}>
        <Header />
        <main className={styles.main}>
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />

          {worksLoading && <Spinner />}
          {error && <p className={styles.error}>{error}</p>}

          {!worksLoading && !error && (
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
    </ThemeContext.Provider>
  )
}

export default App
