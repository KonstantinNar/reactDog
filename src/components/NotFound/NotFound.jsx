import s from "./NotFound.module.css"
import { ReactComponent as Bad } from "./icon/bad.svg"
import { useNavigate } from "react-router-dom"


export const NotFound = () => {

    const nav = useNavigate()
    return (
        <div className={s.notFound}>
            <div className="container">
                <div className={s.notFound__body}>
                    <Bad className={s.notFound__icon} />
                    <p className={s.notFound__text}>Здесь ничего нет</p>
                    <p className={s.notFound__text}>Попробуйте найти на <span className={s.notFound__text_link} onClick={() => nav('/')}>главной странице</span></p>
                </div>
            </div>
        </div>
    )
}
