import styles from "../../styles/HomePage/Art.module.scss"

const Art = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <img src={data.image} alt={data.title} />
            <div className={styles.info_wrapper}>
                <div className={styles.info}>
                    <div className={styles.left}>
                        <h3>{data.author}</h3>
                        <h2>{data.title}</h2>
                    </div>
                    <div className={styles.right}>
                        <h3>Current Bid</h3>
                        <h2>{data.price}</h2>
                    </div>
                </div>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default Art