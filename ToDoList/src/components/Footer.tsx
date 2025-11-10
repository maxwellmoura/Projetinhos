import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p>
      <h4>React + TS To-Do-List por <span>Maxwell Moura</span> <p className={styles.ano}>@2025</p></h4>
    </p>
  </footer>
  )
}

export default Footer