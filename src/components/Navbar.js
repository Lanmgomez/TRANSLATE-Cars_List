import { Link } from 'react-router-dom'
import SearchForm from '../pages/Search_page/SearchForm'
import styles from './Navbar.module.sass'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const {t, i18n} = useTranslation()

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng)
  }

  return (
    <nav className={styles.navbar}>
        <ul>
          <SearchForm />
        </ul>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>{t("Sobre Nós")}</Link>
            <button onClick={() => handleChangeLanguage("en")}>{t("INGLÊS")}</button>
            <button onClick={() => handleChangeLanguage("pt")}>{t("PORTUGUÊS")}</button>
        </ul>
    </nav>
  )
}

export default Navbar