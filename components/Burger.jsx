import styles from "../styles/Burger.module.scss"
import Link from "next/link"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

const Burger = ({ navdata, burgerstatus, setBurgerstatus }) => {

    return (
        <div className={burgerstatus === true ? styles.wrapper_active : styles.wrapper}>
            <div className={styles.closebtn} onClick={() => setBurgerstatus(false)}>
                <AiOutlineCloseCircle />
            </div>
            {navdata && navdata.map(({ id, path, title }) => (
                <li key={id}>
                    <Link href={`/${path}`}><a>{title}</a></Link>
                </li>
            ))}
            <div className={styles.icons}>
                <a href="https://github.com/samuraii-company?tab=repositories"><AiFillGithub /></a>
                <a href="https://t.me/Samuraiii143"><FaTelegram /></a>
            </div>
        </div>
    )
}

export default Burger