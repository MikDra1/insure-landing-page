import styles from './Benefits.module.css'
import Benefit from './Benefit'

function Benefits() {
    return (
        <div className={styles.benefits}>
            <h2>We&apos;re different</h2>
            <div className={styles.benefitsData}>
            <Benefit image='/images/icon-snappy-process.svg' title='Snappy Process'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</Benefit>

            <Benefit image='/images/icon-affordable-prices.svg' title='Affordable Prices'>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</Benefit>

            <Benefit image='/images/icon-people-first.svg' title='People First'>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</Benefit>
            </div>
            
        </div>
    )
}

export default Benefits
