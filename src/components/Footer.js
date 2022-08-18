import styles from './Footer.module.sass'
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const {t} = useTranslation()

  return (
    <footer className={styles.footer}>
        <ul>
            <li>
                <i className="bi bi-github"></i>
                <i className="bi bi-linkedin"></i>
            </li>
        </ul>
            <p>{t("Feito por")} - Islan Gomes, 2022 &copy;</p>
    </footer>
  )
}

export default Footer