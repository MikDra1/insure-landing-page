import styles from './NavigationDesktop.module.css'

function NavigationDesktop() {
  return     <nav className={styles.nav}>
  <img src='/images/logo.svg' alt='' />
  <div className={styles.navRight}>
  <ul>
    <li>how we work</li>
    <li>blog</li>
    <li>account</li>
  </ul>
  <button className='btn'>view plans</button>
  </div>
</nav>;
}

export default NavigationDesktop;
