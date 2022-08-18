import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from './CarsInfos.module.sass'
import { useTranslation } from 'react-i18next';

const CarsInfos = () => {

  const {t} = useTranslation()

  const {id} = useParams()  
  const [cars, setCars] = useState([])

useEffect(() => {
    const fetchCars = async () => {
        await fetch(`http://localhost:5000/cars/${id}`)
            .then(resp => resp.json())
            .then(data => {setCars(data)})
            .catch(error => console.log(error))
    }
    fetchCars()
}, [id])

  return (
    <div className={styles.CarsInfos}>
        <h1>{t("Informações")}:</h1>
          <div className={styles.FirstInfos}>
            <p><span>{t("Nome")}:</span> {cars.name}</p>
            <p><span>{t("Ano")}:</span> {cars.year}</p>
            <p><span>{t("Automático")}:</span> {cars.Automatic}</p>
          </div>
          <div className={styles.MoreInfos}>
            <h1>{t("Outras informações")}</h1>
              <p>{t("Este carro foi desenvolvido por XXX no ano de XXX")}.</p>
              <p>{t("Sua primeira aparição foi em XXX")}.</p>
              <p>{t("Aproveite a experiência")}.</p>
          </div>
    </div>
  )
}

export default CarsInfos