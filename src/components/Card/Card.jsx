import s from './Card.module.css'
import { ReactComponent as Like } from '../../image/icon/like.svg'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Crad = ({ price, wight, name, pictures, discount, product }) => {

    const { currentUser, hendleProductLike } = useContext(UserContext)

    const isLiked = product.likes.some(i => i === currentUser._id)
    function hendleLikeClick() {
        hendleProductLike(product)
    }

    return (
        <div className={s.card}>
            <div className={s.card__discount_body}>
                <span className={s.card__discount}>{discount}%</span>
            </div>
            <div className={s.card__favorite}>
                <button
                    className={cn(s.card__favorite_btn, `${isLiked ? s.card__favorite_btn_active : ""}`)}
                    onClick={hendleLikeClick}>
                    <Like className={s.card__like} />
                </button>
            </div>
            <Link to={`/product/${product._id}`} className='card__link'>
                <img className={s.card__img} src={pictures} alt="image" />
                <div className={s.card__desc}>
                    <p className={s.card__price}>{price} P</p>
                    <p className={s.card__sum}>{wight}</p>
                    <p className={s.card__text}>{name}</p>
                </div>
            </Link>
            <button className={s.card__btn}>В корзину</button>
        </div>
    )
}
