import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';
import {links} from '../utils/contants';

function Header() {
  return (
    <header className={styles.header}>

        <div className={styles.logo}>
            <img src={process.env.PUBLIC_URL+"omni.jpg"} alt="logo" />
        </div>
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <ul className={styles.lists}>
                    
                    {
                        links.map(item => {

                            const {id,text,url} = item;

                            return(
                                <li key={id} className={styles.items}>
                                    <Link to={url}>
                                        {text.toUpperCase()}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>

        <div className={styles.btn}>
           
          <a href="https://www.omniyat.ma/" target="_blank" rel="noreferrer" className={styles.button}>

              <span> {'visit us'.toUpperCase()} </span>
          </a>
        </div>
    </header>
  )
}

export default Header;