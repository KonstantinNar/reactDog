import s from './Connection.module.css'
import telegram from "../../image/icon/footer__telegram.svg"
import whatsapp from "../../image/icon/footer__whatsapp.svg"
import viber from "../../image/icon/footer__viber.svg"
import instagram from "../../image/icon/footer__instagram.svg"
import vk from "../../image/icon/footer__vk.svg"

export const Connection = () => {
    return (
        <div className={s.column}>
            <p className={s.column__title}>Мы на связи</p>
            <div className={s.column__contacts}>
                <a className={s.column__number} href="tel:+7999000000">8 (999) 00-00-00</a>
                <a className={s.column__email} href="mailto:dogfood.ru@gmail.com">dogfood.ru@gmail.com</a>
            </div>
            <div className={s.column__social}>
                <a className={s.column__link} href="#">
                    <img className={s.column__img} src={telegram} alt="telegram" />
                </a>
                <a className={s.column__link} href="#">
                    <img className={s.column__img} src={whatsapp} alt="whatsapp" />
                </a>
                <a className={s.column__link} href="#">
                    <img className={s.column__img} src={viber} alt="viber" />
                </a>
                <a className={s.column__link} href="#">
                    <img className={s.column__img} src={instagram} alt="instagram" />
                </a>
                <a className={s.column__link} href="#">
                    <img className={s.column__img} src={vk} alt="vk" />
                </a>
            </div>
        </div>
    )
}