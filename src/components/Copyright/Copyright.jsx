import { useNavigate } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import s from './Copyright.module.css'

export const Copyright = () => {

    const navigate = useNavigate()
    return (
        <div className={s.column}>
            <span onClick={() => navigate("/")}>
                <Logo />
            </span>
            <p className="p"></p>
            <p className={s.column__copyright}>© «Интернет-магазин DogFood.ru»</p>
        </div>
    )
}