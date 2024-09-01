/* eslint-disable react/prop-types */
import styles from './HeroSection.module.css'

function HeroSection({isMobile}) {
    return (
        <div className={styles.hero}>
            {isMobile ? <img src="/images/image-intro-mobile.jpg" alt="" className={styles.featuredImage} /> : <img src="/images/image-intro-desktop.jpg" alt="" className={styles.featuredImage} />}
            <div className={styles.content}>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
            <button className='btn'>VIEW PLANS</button>
            
            </div>
            <img className={styles.imageAbs} src='/images/bg-pattern-intro-right-mobile.svg' alt='' />
            <img className={styles.imageAbs2} src='/images/bg-pattern-intro-right-desktop.svg' alt='' />
            <img className={styles.imageAbs3} src='/images/bg-pattern-intro-left-desktop.svg' alt='' />
        </div>
    )
}

export default HeroSection
