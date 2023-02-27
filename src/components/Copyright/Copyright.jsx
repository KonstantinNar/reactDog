import { Logo } from '../Logo/Logo'
import s from './Copyright.module.css'

export const Copyright = () => {
    return (
        <div className={s.column}>
            <Logo />
            <p className="p"></p>
            <p className={s.column__copyright}>© «Интернет-магазин DogFood.ru»</p>
        </div>
    )
}