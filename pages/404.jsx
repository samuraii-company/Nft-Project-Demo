import styles from "../styles/NotFoundPage.module.scss"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1>404</h1>
            <h2>ページが見つかりません</h2>
            <Link href="/"><button>Back to HomePage</button></Link>
        </div>
    )
}

export default NotFoundPage