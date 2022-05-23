import styles from "../../styles/HomePage/Artworks.module.scss"
import Art from './Art'
import { nftdata } from "../../utils/nftdata"

const Artworks = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <h1>Featured Artworks</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.works}>
                <Art data={nftdata[0]} />
                <Art data={nftdata[1]} />
                <Art data={nftdata[2]} />
            </div>
        </div>
    )
}

export default Artworks