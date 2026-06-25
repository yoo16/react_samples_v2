## lucide-react とは

`lucide-react` は、`React` でアイコンをコンポーネントとして利用できる `npm` パッケージです。

アイコンは `SVG` として表示されるため、サイズや色を `props` や `CSS` で調整しやすい特徴があります。

**ボタン、ナビゲーション、見出し、カードなどにアイコンを追加すると、画面の意味が伝わりやすくなります。**

### アイコンを使う目的

文字だけの画面でも機能は伝えられますが、アイコンを組み合わせると視線の移動がしやすくなります。

たとえば、ホーム画面へのリンクに家のアイコンを付けると、ユーザーはリンクの意味を直感的に理解しやすくなります。

| 使う場所 | 例 | 効果 |
| ---- | ---- | ---- |
| ナビゲーション | ホーム、プロフィール | ページの意味を伝えやすい |
| ボタン | 保存、削除、検索 | 操作の内容を伝えやすい |
| 見出し | 好きな技術、目標 | セクションの内容を見つけやすい |
| フッター | コピーライト、確認済み表示 | 補助情報を読みやすくする |

> アイコンは便利ですが、付けすぎると画面が読みにくくなります。意味が伝わる場所に絞って使うことが大切です。

---

## パッケージのインストール

`lucide-react` は `npm install` で追加できます。

```bash
npm install lucide-react
```

インストールすると、`package.json` の `dependencies` に `lucide-react` が追加されます。

```json
{
  "dependencies": {
    "lucide-react": "^1.20.0"
  }
}
```

> バージョン番号はインストールした時期によって変わります。教材と完全に同じ番号でなくても問題ありません。

### 基本的な使い方

使いたいアイコンを `lucide-react` から `import` します。

```jsx
import { Home } from 'lucide-react'

function Example() {
  return (
    <Home size={24} />
  )
}

export default Example
```

`Home` は `React` コンポーネントとして使えます。

通常の `HTML` タグと同じように `JSX` の中に書けます。

### よく使う props

`lucide-react` のアイコンには、サイズや色などを指定できます。

| props | 内容 |
| ---- | ---- |
| size | アイコンの大きさ |
| color | アイコンの色 |
| strokeWidth | 線の太さ |
| className | CSS クラス名 |
| aria-hidden | 装飾目的のアイコンを読み上げ対象から外す指定 |

```jsx
import { UserRound } from 'lucide-react'

function ProfileIcon() {
  return (
    <UserRound
      size={32}
      color="#0f766e"
      strokeWidth={2}
    />
  )
}

export default ProfileIcon
```

---

## ナビゲーションにアイコンを付ける

このサンプルでは、`Layout.jsx` にナビゲーションがあります。

`Home` ページには `Home` アイコン、`About` ページには `UserRound` アイコンを使います。

### Layout.jsx の例

```jsx
import { Home, UserRound } from 'lucide-react'
import styles from './Layout.module.css'

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Profile Site</h1>

        <nav className={styles.nav} aria-label="ページ切り替え">
          <button
            className={currentPage === 'home' ? styles.activeButton : styles.navButton}
            type="button"
            onClick={() => onNavigate('home')}
          >
            <Home size={18} aria-hidden="true" />
            ホーム
          </button>

          <button
            className={currentPage === 'about' ? styles.activeButton : styles.navButton}
            type="button"
            onClick={() => onNavigate('about')}
          >
            <UserRound size={18} aria-hidden="true" />
            About
          </button>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
```

`button` の中にアイコンコンポーネントとテキストを並べています。

`aria-hidden="true"` は、装飾目的のアイコンをスクリーンリーダーの読み上げ対象から外すための指定です。

### アイコンとテキストを横並びにする CSS

アイコンとテキストをきれいに並べるには、`button` に `flex` を指定します。

```css
/* src/components/Layout.module.css */

.navButton,
.activeButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-width: 6rem;
  border: 1px solid #93a4bb;
  border-radius: 8px;
  padding: 0.65rem 1rem;
  font: inherit;
  cursor: pointer;
}
```

| プロパティ | 内容 |
| ---- | ---- |
| display: inline-flex | アイコンと文字を横並びにする指定 |
| align-items: center | 縦方向の中央揃え |
| justify-content: center | 横方向の中央揃え |
| gap | アイコンと文字の間隔 |

---

## 見出しやカードにアイコンを付ける

ナビゲーション以外にも、カードの見出しにアイコンを付けると内容が見つけやすくなります。

このサンプルでは、`Home.jsx` のカード見出しに `Code2` と `Target` を使います。

### Home.jsx の例

```jsx
import { Code2, Target } from 'lucide-react'
import styles from './Page.module.css'
import user from '../data/User'

function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.iconTitle}>
            <Code2 size={20} aria-hidden="true" />
            好きな技術
          </h3>
          <p>{user.skills.join('、')}</p>
        </article>

        <article className={styles.card}>
          <h3 className={styles.iconTitle}>
            <Target size={20} aria-hidden="true" />
            目標
          </h3>
          <p>{user.goal}</p>
        </article>
      </div>
    </section>
  )
}

export default Home
```

### 共通スタイルの例

見出し用のスタイルを作ると、複数のページで同じ見た目にできます。

```css
/* src/pages/Page.module.css */

.iconTitle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.iconTitle svg {
  flex: 0 0 auto;
  color: #0f766e;
}
```

`lucide-react` のアイコンは `SVG` として表示されます。

そのため、`.iconTitle svg` のように `CSS` でアイコンの色やサイズの補助指定ができます。

> 個別のアイコンに `color` props を指定する方法もあります。画面全体で統一したい場合は CSS で管理すると変更しやすくなります。

---

## Header と Footer にアイコンを付ける

ページ全体の雰囲気を出したい場合は、`Header` や `Footer` にもアイコンを追加できます。

ただし、`Header` や `Footer` は全ページで表示されるため、主張が強すぎないアイコンを選ぶとよいです。

### Header の例

```jsx
import { Sparkles } from 'lucide-react'
import styles from './Layout.module.css'

function HeaderTitle() {
  return (
    <div className={styles.brand}>
      <Sparkles className={styles.brandIcon} size={28} aria-hidden="true" />

      <div>
        <p className={styles.label}>React Layout Sample</p>
        <h1 className={styles.title}>Profile Site</h1>
      </div>
    </div>
  )
}

export default HeaderTitle
```

### Footer の例

```jsx
import { BadgeCheck } from 'lucide-react'
import styles from './Layout.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <BadgeCheck size={16} aria-hidden="true" />
        &copy; 2026 React Profile
      </p>
    </footer>
  )
}

export default Footer
```

### Header と Footer の CSS

```css
/* src/components/Layout.module.css */

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brandIcon {
  flex: 0 0 auto;
  color: #67e8f9;
}

.footer p {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
```

---

## アイコン選びの考え方

アイコンは、見た目だけでなく意味が合っていることが大切です。

似た意味のアイコンが複数ある場合は、画面の雰囲気や用途に合うものを選びます。

| 用途 | 例 |
| ---- | ---- |
| ホーム | Home |
| ユーザー、プロフィール | User、UserRound |
| 技術、コード | Code、Code2 |
| 目標 | Target |
| 確認、完了 | BadgeCheck、CheckCircle |
| 設定 | Settings |
| 検索 | Search |
| メニュー | Menu |
| 閉じる | X |

### アイコンを使いすぎない

すべての文字にアイコンを付けると、画面の情報量が増えすぎます。

重要な操作や、意味を補助したい場所に絞って使います。

| よい使い方 | 避けたい使い方 |
| ---- | ---- |
| ナビゲーションの主要リンクに付ける | すべての文章の前に付ける |
| カード見出しに付ける | 装飾目的だけで大量に並べる |
| ボタンの意味を補助する | テキストなしで意味がわからないアイコンだけにする |

---

## アクセシビリティの注意点

アイコンは見た目だけでなく、読み上げ環境にも配慮して使います。

### 装飾目的のアイコン

テキストと一緒に表示するアイコンは、多くの場合は装飾目的です。

たとえば、次のように「ホーム」という文字がある場合、`Home` アイコンは読み上げる必要がありません。

```jsx
<button type="button">
  <Home size={18} aria-hidden="true" />
  ホーム
</button>
```

この場合は `aria-hidden="true"` を指定します。

### アイコンだけのボタン

アイコンだけのボタンを作る場合は、ボタンの意味を `aria-label` で補足します。

```jsx
import { Search } from 'lucide-react'

function SearchButton() {
  return (
    <button type="button" aria-label="検索">
      <Search size={18} aria-hidden="true" />
    </button>
  )
}

export default SearchButton
```

| パターン | 対応 |
| ---- | ---- |
| アイコンとテキストがある | アイコンに aria-hidden を指定 |
| アイコンだけのボタン | ボタンに aria-label を指定 |
| 意味を持つアイコン | テキストや aria-label で意味を補足 |

---

## このサンプルでの利用箇所

このアプリでは、`lucide-react` を次の場所で使っています。

| ファイル | アイコン | 役割 |
| ---- | ---- | ---- |
| Layout.jsx | Sparkles | サイトタイトルの補助 |
| Layout.jsx | Home | ホームナビゲーション |
| Layout.jsx | UserRound | About ナビゲーション |
| Layout.jsx | BadgeCheck | フッターの補助 |
| Home.jsx | Code2 | 好きな技術の見出し |
| Home.jsx | Target | 目標の見出し |
| About.jsx | ListChecks | 確認ポイントの見出し |

### ファイル構成

```txt
src/
├── components/
│   ├── Layout.jsx
│   └── Layout.module.css
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Page.module.css
└── App.jsx
```

`lucide-react` は、各コンポーネントで必要なアイコンだけを `import` して使います。

```jsx
import { Home, UserRound } from 'lucide-react'
```

必要なアイコンだけを明示的に読み込むことで、コード上でもどのアイコンを使っているかがわかりやすくなります。

---

## まとめ

| 項目 | 内容 |
| ---- | ---- |
| lucide-react | React でアイコンをコンポーネントとして使えるパッケージ |
| インストール | npm install lucide-react |
| 使い方 | 必要なアイコンを import して JSX に書く |
| サイズ調整 | size props や CSS で指定 |
| 色の調整 | color props や CSS で指定 |
| ナビゲーション | アイコンとテキストを組み合わせると意味が伝わりやすい |
| CSS | flex と gap でアイコンと文字を整列 |
| アクセシビリティ | 装飾アイコンは aria-hidden、アイコンだけのボタンは aria-label |
