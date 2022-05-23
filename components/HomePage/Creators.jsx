import styles from "../../styles/HomePage/Creators.module.scss"
import { creatordata } from "../../utils/nftdata"
import Creator from "./Creator"

const Creators = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <h1>Top Creator</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.creators_wrapper}>
                <Creator data={creatordata[0]} />
                <Creator data={creatordata[1]} />
                <Creator data={creatordata[2]} />
            </div>
        </div>
    )
}

export default Creators