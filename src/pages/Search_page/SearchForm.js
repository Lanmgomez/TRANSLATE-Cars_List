import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchForm.module.sass'
import { useTranslation } from 'react-i18next';

const SearchForm = () => {

    const {t} = useTranslation()

    const [query, setQuery] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        await e.preventDefault()
        await navigate(`/search?q=${query}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
               placeholder={t("Faça uma busca...")}
               onChange={(e) => setQuery(e.target.value)}
               className={styles.formSearch}
        />
        <i className="bi bi-search">
            <button type="submit" className={styles.btnSearch}>{t("Buscar")}</button>
        </i>
    </form>
  )
}

export default SearchForm