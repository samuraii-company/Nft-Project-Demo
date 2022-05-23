import styles from "../styles/Header.module.scss"
import { useState } from "react"
import { AiFillGithub } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import Burger from "./Burger";
import Link from "next/link";
import navdata from "../utils/headerdata"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <Link href="/"><h1 className={styles.logo}>Alone<span>NFT</span></h1></Link>
                <div className={styles.menu} onClick={() => setBurgerMenu(true)}><GiHamburgerMenu /></div>
                <div className={styles.navbar}>
                    {navdata && navdata.map(({ id, title, path }) => (
                        <Link key={id} href={`/${path}`}>{title}</Link>
                    ))}
                </div>
                <div className={styles.icons}>
                    <a href="https://github.com/samuraii-company?tab=repositories"><AiFillGithub /></a>
                    <a href="https://t.me/Samuraiii143"><FaTelegram /></a>
                </div>
            </div>
            <Burger navdata={navdata} burgerstatus={burgerMenu} setBurgerstatus={setBurgerMenu} />
        </>
    )
}

export default Header