import s from './Card.module.css'
import { ReactComponent as Like } from '../../image/icon/like.svg'

export const Crad = ({ price, wight, name, picture, discount }) => {
    return (
        <div className={s.card}>
            <div className={s.card__discount_body}>
                <span className={s.card__discount}>{discount}%</span>
            </div>
            <div className={s.card__favorite}>
                <button className={s.card__favorite_btn}>
                    <Like className={s.card__like} />
                </button>
            </div>
            <a className={s.card__link} href="#">
                <img className={s.card__img} src={picture} alt="image" />
                <div className={s.card__desc}>
                    <p className={s.card__price}>{price} P</p>
                    <p className={s.card__sum}>{wight}</p>
                    <p className={s.card__text}>{name}</p>
                </div>
            </a>
            <button className={s.card__btn}>В корзину</button>
        </div>
    )
}
