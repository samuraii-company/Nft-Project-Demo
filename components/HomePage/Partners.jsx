import styles from "../../styles/HomePage/Partners.module.scss"
const Partners = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/binance_logo.svg" alt="binancelogo" />
            <img src="/images/eth_logo.svg" alt="ethlogo" />
            <img src="/images/blockchain_logo.svg" alt="blockchainlogo" />
        </div>
    )
}

export default Partners