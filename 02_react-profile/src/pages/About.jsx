import { ListChecks } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './Page.module.css'

const Motion = motion

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

function About() {
  return (
    <section
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className={styles.kicker} variants={itemVariants}>
        About
      </p>
      <h2 variants={itemVariants}>このサイトについて</h2>
      <p variants={itemVariants}>
        このサンプルは Layout コンポーネントの使い方を確認するための
        プロフィールサイトです。Header、ナビゲーション、Footer は Layout が担当し、
        Home と About はページごとのコンテンツだけを返しています。
      </p>

      <div
        className={styles.note}
        variants={itemVariants}
        whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15, 23, 42, 0.12)' }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <h3 className={styles.iconTitle}>
          <ListChecks size={20} aria-hidden="true" />
          確認ポイント
        </h3>
        <ul>
          <li>ページを切り替えても Header と Footer は共通のままです。</li>
          <li>ページ内容は Layout の children に差し込まれます。</li>
          <li>ナビゲーションは onNavigate props で App.jsx の state を更新します。</li>
        </ul>
      </div>
    </section>
  )
}

export default About
