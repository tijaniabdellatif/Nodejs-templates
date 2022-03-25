import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (

    <footer className={styles.footer}>
        
        <div className={styles.container}>
            <h2 className={styles.title}>
                Pourquoi nous choisir
            </h2>

            <p className={styles.description}>
            La force de OMNIYAT réside dans l’association de techniques modernes et fiables appliquées à des solutions modulaires et utilisables tout de suite.
            </p>

            <div className={styles.btn}>
           
           <a href="https://www.omniyat.ma/" target="_blank" rel="noreferrer" className={styles.button}>
 
               <span> {'visit us'.toUpperCase()} </span>
           </a>
         </div>
        </div>
    </footer>
  )
}

export default Footer;