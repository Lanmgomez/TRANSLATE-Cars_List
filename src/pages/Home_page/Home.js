import styles from './Home.module.sass'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const urlLuxuriousCars = 'http://localhost:5000/cars/'

const Home = () => {

  const {t} = useTranslation()

  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      await fetch(urlLuxuriousCars)
        .then(resp => resp.json())
        .then(data => {setCars(data)})
        .catch(error => console.log(error))
    }
    fetchCars()
  }, [])

  return (
    <div>
      <h1>{t("Bem vindo")}!</h1>
        <h3>{t("Alugue um automóvel ainda hoje")}!</h3>
          <h1>{t("Carros de Luxo")}:</h1>
          <div className={styles.luxurious_Cars}>
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
    </div>
  )
}

export default Home