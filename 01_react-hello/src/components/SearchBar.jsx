/* src/components/SearchBar.jsx */
import styles from './SearchBar.module.css'

function SearchBar({ query, onQueryChange, genres, selectedGenre, onGenreChange }) {
  return (
    <div className={styles.searchBar}>
      <section className={styles.section}>
        <input
          className={styles.input}
          type="text"
          placeholder="タイトルで検索..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </section>
      <section className={styles.section}>
        <div className={styles.filters}>
          {genres.map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? styles.filterActive : styles.filter}
              onClick={() => onGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SearchBar