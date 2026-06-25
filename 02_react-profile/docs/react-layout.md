# React のレイアウト手法

React で共通レイアウトを作る方法はいくつかあります。
プロジェクトの規模やルーティングの有無によって使い分けます。

| 方法 | 特徴 | 向いている場面 |
| ---- | ---- | ---- |
| Layout コンポーネント | `children` にページ内容を渡して共通レイアウトで囲む | React Router を使わない小規模アプリ、学習用途 |
| React Router の `Outlet` | ルート定義の中で Layout を使い、`Outlet` に子ページを表示する | URL によるページ遷移が必要な SPA |
| Context によるレイアウト制御 | Context でレイアウト状態を共有し、動的に切り替える | サイドバーの開閉、テーマ切替、ログイン状態による表示切替 |

---

## Layout コンポーネントとは

複数のページで共通して表示される `Header`、`Footer`、ナビゲーションなどをまとめたコンポーネントを **Layout コンポーネント** といいます。

ページごとのコンテンツは Layout コンポーネントの中に差し込んで表示します。
こうすることで、共通部分を一か所で管理できます。

---

## Layout コンポーネントのメリット

ページごとに `Header` や `Footer` を毎回書くと、同じコードが何度も出てきます。

Layout コンポーネントに共通部分をまとめると、修正が一か所で済みます。

| 項目 | Layout なし | Layout あり |
| ---- | ---- | ---- |
| Header の記述 | 各ページに書く | Layout に一度だけ書く |
| Footer の修正 | 各ページを修正する | Layout だけ修正する |
| コードの重複 | 多い | 少ない |
| ページの役割 | 共通部分と内容が混ざる | ページは内容だけに集中できる |

---

## ファイル構成

```txt
src/
├── components/
│   └── Layout.jsx       # Header・Footer・ナビゲーションなど共通部分
├── pages/
│   ├── Home.jsx         # Home ページのコンテンツ
│   └── About.jsx        # About ページのコンテンツ
└── App.jsx              # ページ切り替えと Layout の適用
```

`pages` のコンポーネントは、ページごとのコンテンツだけを担当します。
Layout の適用は `App.jsx` が担当します。

---

## Layout コンポーネントの作成

Layout コンポーネントでは `children` という props を使います。

`children` には、Layout を使う側がタグの中に書いた内容が入ります。

```jsx
// src/components/Layout.jsx

function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>サイトタイトル</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
```

`{children}` の部分に、各ページのコンポーネントが表示されます。

---

## ページコンポーネントの作成

ページコンポーネントは、ページごとの内容だけを返します。
ここでは Layout を import しません。

```jsx
// src/pages/Home.jsx

function Home() {
  return (
    <section>
      <h2>ホームページ</h2>
      <p>ようこそ！</p>
    </section>
  )
}

export default Home
```

```jsx
// src/pages/About.jsx

function About() {
  return (
    <section>
      <h2>About ページ</h2>
      <p>このサイトについて説明します。</p>
    </section>
  )
}

export default About
```

---

## App.jsx で Layout を使う

`App.jsx` で `Layout` を使い、その中に表示したいページコンポーネントを入れます。

```jsx
// src/App.jsx

import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
```

この場合、`Home` コンポーネントが `Layout` の `children` として渡されます。

---

## useState でページを切り替える

React Router を使わない場合は、`useState` で現在のページを管理できます。

```jsx
// src/App.jsx

import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('home')

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </Layout>
  )
}

export default App
```

`page` の値によって、表示するページコンポーネントを切り替えています。

---

## ナビゲーションを Layout に追加する

ナビゲーションのボタンから `setPage` を呼び出せるように、`onNavigate` を Layout に渡します。

```jsx
// src/components/Layout.jsx

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div>
      <header>
        <h1>サイトタイトル</h1>

        <nav aria-label="ページ切り替え">
          <button
            type="button"
            onClick={() => onNavigate('home')}
          >
            ホーム
          </button>

          <button
            type="button"
            onClick={() => onNavigate('about')}
          >
            About
          </button>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
```

この構成では、実際の URL は変わりません。
React の state を変更して、画面に表示するコンポーネントを切り替えています。

そのため、ここでは `<a href="">` ではなく `<button>` を使います。
`<a>` は別ページや URL へ移動するときに使います。

---

## ページ切り替えの流れ

| 手順 | 内容 |
| ---- | ---- |
| 1 | `App.jsx` の `useState` で現在のページ名を管理する |
| 2 | ナビゲーションボタンをクリックする |
| 3 | `onNavigate` 経由で `setPage` が呼ばれる |
| 4 | `page` の値が変わる |
| 5 | `App.jsx` が再レンダリングされる |
| 6 | 対応するページコンポーネントが表示される |
| 7 | Header・Footer は Layout にあるため、切り替えても共通のまま残る |

---

## children の仕組み

`children` は React が用意している特別な props です。

コンポーネントの開始タグと終了タグの間に書いた内容が、自動的に `children` として渡されます。

```jsx
<Layout>
  <h2>ページコンテンツ</h2>
</Layout>
```

上の例では、次の部分が `children` になります。

```jsx
<h2>ページコンテンツ</h2>
```

Layout 側では `{children}` と書いた場所に表示されます。

```jsx
function Layout({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}
```

---

## CSS でレイアウトを整える

CSS Modules を使う場合は、`Layout.module.css` を作成してスタイルを管理します。

```css
/* src/components/Layout.module.css */

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.main {
  flex: 1;
  padding: 2rem;
}

.footer {
  background-color: #eee;
  padding: 1rem;
  text-align: center;
}
```

```jsx
// src/components/Layout.jsx

import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>サイトタイトル</h1>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
```

`wrapper` に `min-height: 100vh` を指定すると、画面の高さ全体を使うレイアウトになります。

また、`main` に `flex: 1` を指定すると、余った高さを `main` が埋めます。
その結果、コンテンツが少ない場合でも Footer が画面下部に配置されやすくなります。

※ `position: fixed` のように Footer を常に画面に固定しているわけではありません。

---

## React Router を使う場合

React Router を使う場合も Layout コンポーネントはよく使います。

ただし、`children` ではなく `Outlet` を使ってページを差し込みます。

```jsx
import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header>
        <h1>サイトタイトル</h1>

        <nav>
          <NavLink to="/">ホーム</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
```

React Router を使うと、`/` や `/about` のように URL でページを管理できます。

今回のような学習用の小さなサンプルでは、まず `useState` と `children` を使った Layout コンポーネントから理解するとよいです。

---

## まとめ

| 項目 | 内容 |
| ---- | ---- |
| Layout コンポーネント | Header・Footer・ナビゲーションなど共通部分をまとめる |
| children | タグの中に書いた内容が自動で渡される props |
| pages の役割 | ページごとのコンテンツだけを返す |
| App.jsx の役割 | ページの状態を管理し、Layout の中に表示する |
| onNavigate | ページ切り替え用の関数を Layout に渡す props |
| CSS Modules | コンポーネント単位で CSS を管理できる仕組み |
| React Router の Outlet | ルーティングを使う場合にページを差し込む場所 |
