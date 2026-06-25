## Motion とは

`Motion` は、`React` でアニメーションを簡単に追加できる `npm` パッケージです。

パッケージ名は `motion` で、`React` 向けのモジュールは `motion/react` から `import` します。

**フェードイン、スライド、ホバー時の動き、ページ切り替えのアニメーションなどを、JSX の props として書けます。**

### アニメーションを使う目的

画面の変化に動きを付けると、ユーザーが何が起きたかを理解しやすくなります。

| 使う場所 | 例 | 効果 |
| ---- | ---- | ---- |
| ページ表示時 | フェードインしながらスライド | コンテンツの登場が自然に見える |
| ページ切り替え | フェードアウト → フェードイン | 画面の切り替わりがわかりやすい |
| ホバー | 浮き上がり、拡大 | 操作できる要素だとわかりやすい |
| タップ | 縮小 | ボタンを押した感触が出る |
| ループ | ゆれ、点滅 | 注目させたい要素を目立たせる |

> アニメーションは便利ですが、多用すると画面が落ち着かない印象になります。意味のある動きに絞って使うことが大切です。

---

## パッケージのインストール

`motion` は `npm install` で追加できます。

```bash
npm install motion
```

インストールすると、`package.json` の `dependencies` に `motion` が追加されます。

```json
{
  "dependencies": {
    "motion": "^12.0.0"
  }
}
```

> バージョン番号はインストールした時期によって変わります。教材と完全に同じ番号でなくても問題ありません。

---

## 基本的な使い方

`motion/react` から `motion` を `import` します。

```jsx
import { motion } from 'motion/react'
```

`motion.div` のように書くと、アニメーションが付いた `div` として使えます。

```jsx
import { motion } from 'motion/react'

function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      フェードインします
    </motion.div>
  )
}

export default Example
```

`motion.div`、`motion.p`、`motion.header` のように、HTML タグの前に `motion.` を付けるだけで、そのタグにアニメーションを指定できます。

---

## Motion エイリアスの使い方

このサンプルでは、`motion` を `Motion` という名前で使っています。

```jsx
import { motion } from 'motion/react'

const Motion = motion
```

`motion` をそのまま使うことも、`Motion` と別名を付けて使うこともできます。

`Motion.div` や `Motion.header` のように書けるため、コンポーネント名と同じ大文字始まりに統一されて読みやすくなります。

---

## よく使う props

アニメーションの開始・終了・動き方などを `props` で指定します。

| props | 内容 |
| ---- | ---- |
| initial | アニメーション開始前の状態 |
| animate | アニメーション後の状態 |
| exit | 要素が画面から消えるときの状態 |
| transition | アニメーションの速さや種類 |
| variants | 複数の状態をまとめて名前で管理する |
| whileHover | マウスが乗っているときの状態 |
| whileTap | クリック・タップ中の状態 |

---

## initial と animate

`initial` はアニメーション開始前の状態、`animate` はアニメーション後の状態を指定します。

```jsx
<Motion.header
  initial={{ opacity: 0, y: -16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
>
  ヘッダー
</Motion.header>
```

| プロパティ | 内容 |
| ---- | ---- |
| opacity | 透明度（0 が完全透明、1 が不透明） |
| y | 縦方向のずれ（px 単位） |
| x | 横方向のずれ（px 単位） |
| scale | 拡大縮小（1 が元のサイズ） |
| rotate | 回転（度数） |

---

## transition

`transition` でアニメーションの速さや動き方を指定します。

```jsx
transition={{ duration: 0.35, ease: 'easeOut' }}
```

| プロパティ | 内容 |
| ---- | ---- |
| duration | アニメーションの長さ（秒） |
| ease | 動き方の種類（easeOut、easeIn など） |
| delay | アニメーション開始までの遅延（秒） |
| type | アニメーションの種類（'spring' など） |
| stiffness | バネの硬さ（spring 使用時） |
| damping | バネの減衰（spring 使用時） |
| repeat | 繰り返し回数（Infinity で無限ループ） |
| repeatDelay | 繰り返しの間隔（秒） |

### spring アニメーション

`type: 'spring'` にすると、バネのような自然な動きになります。

```jsx
<Motion.div
  whileHover={{ rotate: 4, scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 280, damping: 16 }}
>
  ホバーするとバネのように動きます
</Motion.div>
```

`stiffness` を大きくするとバネが硬くなり素早く動きます。`damping` を大きくすると揺れが少なくなります。

---

## whileHover と whileTap

マウスが乗ったとき、クリック・タップしたときの状態を指定できます。

```jsx
<Motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.96 }}
>
  ボタン
</Motion.button>
```

`whileHover` と `whileTap` は `transition` と組み合わせて動き方も指定できます。

---

## ループアニメーション

`repeat: Infinity` を指定すると、アニメーションが繰り返されます。

```jsx
<Motion.div
  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}
>
  <Sparkles />
</Motion.div>
```

`animate` に配列を渡すと、配列の順番通りに値が変化します。

`repeatDelay` でアニメーションの間隔を指定することで、ずっと動き続けるのではなく一定間隔で繰り返せます。

---

## variants

複数の状態をあらかじめオブジェクトとして定義し、名前で呼び出す仕組みです。

アニメーションの内容をコンポーネントの外に書き出せるため、JSX がすっきりします。

```jsx
const pageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}
```

`variants` を定義したあと、`initial`・`animate`・`exit` に状態名を文字列で渡します。

```jsx
<Motion.section
  variants={pageVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  ...
</Motion.section>
```

### staggerChildren

親要素の `variants` に `staggerChildren` を指定すると、子要素のアニメーションが順番にずれて開始されます。

```jsx
const pageVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
    },
  },
}
```

子要素に `variants={itemVariants}` を渡すだけで、親の `staggerChildren` が自動的に適用されます。

```jsx
<Motion.section variants={pageVariants} initial="hidden" animate="visible">
  <Motion.div variants={itemVariants}>1番目に表示</Motion.div>
  <Motion.div variants={itemVariants}>2番目に表示</Motion.div>
  <Motion.div variants={itemVariants}>3番目に表示</Motion.div>
</Motion.section>
```

---

## AnimatePresence

`AnimatePresence` は、要素が画面から消えるときにもアニメーションを実行するためのコンポーネントです。

通常、`React` では要素が消えるときにアニメーションは実行されません。`AnimatePresence` で囲むと `exit` のアニメーションが有効になります。

```jsx
import { AnimatePresence } from 'motion/react'

<AnimatePresence mode="wait" initial={false}>
  {page === 'home' && <Home key="home" />}
  {page === 'about' && <About key="about" />}
</AnimatePresence>
```

| props | 内容 |
| ---- | ---- |
| mode="wait" | 古いコンポーネントの exit が終わってから新しいコンポーネントを表示する |
| initial={false} | 最初のページ読み込み時には animate を実行しない |

### key が必要な理由

`AnimatePresence` の子要素には `key` を指定する必要があります。

`React` は `key` が変わったときに要素の追加・削除を検知します。`key` がないと、ページが変わったことを `AnimatePresence` が認識できません。

```jsx
{page === 'home' && <Home key="home" />}
{page === 'about' && <About key="about" />}
```

---

## このサンプルでの利用箇所

このアプリでは、`Motion` を次の場所で使っています。

| ファイル | 要素 | アニメーションの種類 |
| ---- | ---- | ---- |
| Layout.jsx | Motion.header | フェードイン＋上からスライド |
| Layout.jsx | Motion.div（Sparkles） | ループ回転・拡大 |
| Layout.jsx | Motion.button（ナビ） | whileHover で上に浮く、whileTap で縮小 |
| Layout.jsx | Motion.footer | フェードイン（遅延あり） |
| Home.jsx | Motion.section | variants で staggerChildren |
| Home.jsx | Motion.div（アバター） | whileHover でバネ回転 |
| Home.jsx | Motion.article（カード） | whileHover で浮き上がり |
| About.jsx | Motion.section | variants で staggerChildren |
| About.jsx | Motion.div（note） | whileHover で浮き上がり |
| App.jsx | AnimatePresence | ページ切り替え時の exit アニメーション |

### ファイル構成

```txt
src/
├── components/
│   └── Layout.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
└── App.jsx
```

---

## まとめ

| 項目 | 内容 |
| ---- | ---- |
| motion | React でアニメーションを書けるパッケージ |
| import | `import { motion } from 'motion/react'` |
| 基本の書き方 | `motion.div` のように HTML タグの前に `motion.` を付ける |
| initial / animate | アニメーション前後の状態を指定 |
| transition | 速さ・動き方・遅延などを指定 |
| spring | `type: 'spring'` でバネのような自然な動き |
| whileHover / whileTap | マウス操作に応じた状態を指定 |
| repeat: Infinity | ループアニメーション |
| variants | 複数の状態を名前で管理し、staggerChildren で子要素を順番に表示 |
| AnimatePresence | 要素が消えるときにも exit アニメーションを実行する |
