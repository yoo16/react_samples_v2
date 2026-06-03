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
import LoadingModal from './components/LoadingModal'
import FlashMessage from './components/FlashMessage';
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'
import { useEffect } from 'react';

function App() {
  const { user, authLoading } = useAuth()
  const { works, loading, error } = useWorks()

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

  // 毎回実行（依存配列なし）— ほぼ使わない
  useEffect(() => {
    console.log('毎回実行')
  })

  // 初回のみ実行（データ取得に最適）
  useEffect(() => {
    console.log('初回のみ実行')
  }, [])

  // selectedGenre が変わるたびに実行
  useEffect(() => {
    console.log(selectedGenre)
  }, [selectedGenre])

  if (authLoading) {
    return <LoadingModal isOpen={true} />
  }

  // 未ログイン
  if (!user) {
    return <LoginButton />
  }

  // ログイン済み
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.app} data-theme={theme}>
        <LoadingModal isOpen={loading} />

        <Header />

        <FlashMessage message={error} type="error" />

        <main className={styles.main}>
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />

          <h2 className={styles.sectionTitle}>注目作品</h2>
          <WorkList
            works={filteredWorks}
            onSelect={(work) => setSelectedWork(work)} />
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
