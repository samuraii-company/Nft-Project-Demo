import styles from "../../styles/HomePage/Creator.module.scss"


const Creator = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <img src={data.image} alt={data.name} />
            <div className={styles.photo}>
                <img src={data.photo} alt={styles.name} />
            </div>
            <div className={styles.info}>
                <h3>{data.name}</h3>
                <p>{data.about}</p>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default Creator