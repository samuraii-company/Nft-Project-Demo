import styles from "../../styles/HomePage/Hero.module.scss"
import Image from "next/image"
import Head from "next/head"
import Tilt from "react-vanilla-tilt"

const Hero = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h1>Create, Sell & Collect Your Own NFT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                    <div className={styles.btn_wrapper}>
                        <button className={styles.explore}>Explore Now</button>
                        <button className={styles.sell}>Sell NFT</button>
                    </div>
                    <div className={styles.statistics}>
                        <div className={styles.stat}>
                            <h3>37k+</h3>
                            <p>Artworks</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>20k+</h3>
                            <p>Artists</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>99k+</h3>
                            <p>Auctions</p>
                        </div>
                    </div>
                </div>
                <Tilt
                    options={{ scale: 2 }}
                    style={{ width: 300 }}>
                    <img src="/images/nft.jpg" />
                </Tilt>
            </div>
        </>
    )
}

export default Hero