import styles from "../styles/Footer.module.scss"
import { FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import Link from "next/link"


const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.column}>
                    <h1>Alone<span>NFT</span></h1>
                    <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
                </div>
                <div className={styles.column}>
                    <h1>About</h1>
                    <div className={styles.links}>
                        <Link href="/products">Products</Link>
                        <Link href="/resources">Resource</Link>
                        <Link href="/terms">Terms & Condition</Link>
                        <Link href="/faq">FAQ</Link>
                    </div>
                </div>
                <div className={styles.column}>
                    <h1>Company</h1>
                    <div className={styles.links}>
                        <Link href="/team">Our Team</Link>
                        <Link href="/partners">Partner With Us</Link>
                        <Link href="/privacy">Privacy & Policy</Link>
                        <Link href="/features">Features</Link>
                    </div>
                </div>
                <div className={styles.column}>
                    <h1>Contact</h1>
                    <div className={styles.social}>
                        <Link href="https://t.me/Samuraiii143"><li><FaTelegramPlane /></li></Link>
                        <Link href="https://discord.com"><li><FaDiscord /></li></Link>
                        <Link href="https://facebook.com"><li><AiOutlineFacebook /></li></Link>
                        <Link href="https://instagram.com"><li><AiOutlineInstagram /></li></Link>
                    </div>
                </div>
            </div>
            <div className={styles.powered}>
                <p>Powered by <span> Alone</span> | All Right Reserved!</p>
            </div>
        </div>
    )
}

export default Footer