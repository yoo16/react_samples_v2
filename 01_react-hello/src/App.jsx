/* src/App.jsx */
import styles from './App.module.css'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import ProfileForm from './components/ProfileForm'

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>React 入門</h1>
      </header>
      <main className={styles.main}>
        <h2>カウンター</h2>
        <Counter />

        <h2>名前フォーム</h2>
        <NameForm />

        <h2>プロフィールフォーム</h2>
        <ProfileForm />
      </main>
    </div>
  )
}

export default App
