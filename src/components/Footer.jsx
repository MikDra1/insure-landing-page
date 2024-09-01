import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerTop}>
      <img src="/images/logo.svg" alt="" />
      <div className={styles.socials}>
        <div>
          <img src="/images/icon-facebook.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-twitter.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-pinterest.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-instagram.svg" alt="" />
        </div>
      </div>
      </div>

<div className={styles.footerData}>
      <div className={styles.links}>
        <h4>our company</h4>
        <h5>how we work</h5>
        <h5>why insure?</h5>
        <h5>check price</h5>
        <h5>reviews</h5>
      </div>
      <div className={styles.links}>
        <h4>help me</h4>
        <h5>faq</h5>
        <h5>terms of use</h5>
        <h5>privacy policy</h5>
        <h5>cookies</h5>
      </div>
      <div className={styles.links}>
        <h4>contact</h4>
        <h5>sales</h5>
        <h5>support</h5>
        <h5>live chat</h5>
      </div>
      <div className={styles.links}>
        <h4>others</h4>
        <h5>careers</h5>
        <h5>press</h5>
        <h5>licenses</h5>
      </div></div>
    </footer>
  );
}

export default Footer;
