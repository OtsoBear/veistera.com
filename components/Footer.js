import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/construction-worker.svg" alt="Construction" className={styles.logo} />
      </footer>
    </>
  )
}
