# チェックリスト

## レイアウト作成

* [ ] `<header>` を追加した
* [ ] `<main>` を追加した
* [ ] `<footer>` を追加した

---

## CSS Modules設定

* [ ] `src/App.css` を `src/App.module.css` にリネームした
* [ ] `App.jsx` の `import` を修正した

```jsx
import styles from './App.module.css'
```

* [ ] `.app` クラスを作成した
```jsx
<div className={styles.app}>
```
* [ ] `.main` クラスを作成した
* [ ] `.sectionTitle` クラスを作成した

---

## CSS適用

* [ ] `<div>` に `className={styles.app}` を追加した
* [ ] `<main>` に `className={styles.main}` を追加した
* [ ] `<h2>` に `className={styles.sectionTitle}` を追加した

---

## グローバルCSS

* [ ] `src/index.css` を編集した
* [ ] リセットCSS（margin/padding削除）を記述した
* [ ] `box-sizing: border-box` を設定した

---

## 画像追加

* [ ] `src/assets/` フォルダを確認または作成した
* [ ] `logo.svg` を配置した

---

## 画像表示

* [ ] `App.jsx` に画像を `import` した

```jsx
import logo from './assets/logo.svg'
```

* [ ] `<img>` タグを追加した
* [ ] `src={logo}` を指定した
* [ ] `alt` 属性を設定した

---

## 表示確認

* [ ] 画面にヘッダーが表示される
* [ ] 画面にメインコンテンツが表示される
* [ ] 画面にフッターが表示される
* [ ] CSSスタイルが適用されている
* [ ] ロゴ画像が表示されている

---

## 最終チェック

* [ ] エラーなく表示される
* [ ] 保存時に画面が自動更新される（Vite）