import styles from './AboutUs.module.sass'
import ImageFerrari from '../../img/Ferrari.jpg'
import ImageLamborguini from '../../img/Lamborghini.webp'
import { useTranslation } from 'react-i18next';

const AboutUs = () => {

  const {t} = useTranslation()

  return (
    <div className={styles.aboutusdiv}>
      <h1>{t("Sobre Nós")}</h1>
        <h3>{t("Quem somos e o que fazemos")}</h3>
          <p>{t("Seja bem vindo ao nosso WebSite de aluguéis de carros")}.</p>
          <p>{t("Aqui você pode fazer a locação de um incrível automóvel para realizar suas expecativas")}.</p>
          <p>{t("Temos diversos modelos amados por nossos clientes")}.</p>
          <p>{t("Venha fazer parte dessa magnífica experiência")}!</p>
            <div className={styles.divImg}>
              <img src={ImageFerrari} alt="FerrariCar" />
              <img src={ImageLamborguini} alt="LamborguiniCar" />
            </div>
    </div>
  )
}

export default AboutUs