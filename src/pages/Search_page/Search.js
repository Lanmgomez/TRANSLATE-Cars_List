import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchForm.module.sass'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Search = () => {

    const {t} = useTranslation()

    const [searchParams] = useSearchParams()
    const url = `http://localhost:5000/cars?${searchParams}`
    const [cars, setCars] = useState([])

useEffect(() => {
    const fetchCars = async () => {
        await fetch(url)
            .then(resp => resp.json())
            .then(data => {setCars(data)})
            .catch(error => console.log(error))
    }
    fetchCars()
})

  return (
    <div className={styles.divFormInfos}>
        <h1>{t("Resultados disponíveis")}</h1>
        {cars.map((car) => (
            <ul key={car.id}>
              <li><span>{t("Nome")}:</span> {car.name}</li>
              <li><span>{t("Ano")}:</span> {car.year}</li>
              <li><span>{t("Automático")}:</span> {car.Automatic}</li>
              <div>
                  <Link to={`/carsInfos/${car.id}`}>
                    {t("Mais Informações")}
                  </Link>
                </div>
            </ul>
        ))}
    </div>
  )
}

export default Search