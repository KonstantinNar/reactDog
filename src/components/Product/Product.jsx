import s from "./Product.module.css"
import truck from './img/truck.svg';
import quality from './img/quality.svg';
import cn from 'classnames';
import { ReactComponent as Like } from './img/save.svg';
import { Image } from 'antd';
import { Rate } from 'antd';
import { useContext, useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";




export const Product = () => {

    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(0)
    const location = useLocation()
    const id = useParams();
    const navigate = useNavigate()
    const { currentUser, hendleProductLike } = useContext(UserContext)

    function hendleLikeClick() {
        hendleProductLike(product)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        api.getProductById(id.productId).then((data) => setProduct(data));
    }, [id]);

    useEffect(() => {
        if (amount > 9) {
            setAmount(9)
        } else if (amount < 0) {
            setAmount(0)
        }

    }, [amount])

    const isLiked = product?.likes?.some((el) => el === currentUser._id);

    return (
        <div className={s.product}>
            <div className="container">
                <div className={s.product__body}>
                    <div className={s.product__header}>
                        <span className={s.product__back} onClick={() => navigate("/")}>Назад</span>
                        <p className={s.product__title}>{product.name}</p>
                        <div className={s.profuct__info}>
                            <p className={s.product__art}>Артикул: <span className={s.product__art_num}>123456</span></p>
                            <div className={s.product__star}><Rate disabled defaultValue={2} /></div>
                            <button className={s.product__comment_num}>21 отзыв</button>
                        </div>
                    </div>
                    <div className={s.product__main}>
                        <div className={s.product__show}>
                            <div className={s.product__img}>
                                <Image width={488} src={product.pictures} />
                                {!!product.discount && (<p className={s.product__img_discount}>{product.discount}&nbsp;%</p>)}
                            </div>
                            <div className={s.product__price}>
                                <p className={s.product__price_num}>{product.price}&nbsp;₽</p>
                                <div className={s.product__amount}>
                                    <div className={s.product__amount_counter}>
                                        <button className={s.product__amount_minus} onClick={() => (setAmount(amount - 1))}>-</button>
                                        <p className={s.product__amount_num}>{amount}</p>
                                        <button className={s.product__amount_plus} onClick={() => (setAmount(amount + 1))}>+</button>
                                    </div>
                                    <button className={s.product__add}>В корзину</button>

                                </div>
                                <button
                                    className={cn([s.product__like], `${isLiked ? s.product__like_active : ""}`)}
                                    onClick={hendleLikeClick}
                                >
                                    <Like alt="like" />
                                    {isLiked ? "В избранном" : "В избранное"}
                                </button>
                                <div className={s.product__delivery}>
                                    <img className={s.product__truck} src={truck} alt="truck" />
                                    <div className={s.product__delivery_right}>
                                        <p className={s.product__delivery_title}>Доставка по всему Миру!</p>
                                        <p className={s.product__delivery_home}>Доставка курьером — <span className={s.product__delivery_home_num}>от 399 ₽</span></p>
                                        <p className={s.product__delivery_post}>Доставка в пункт выдачи — <span className={s.product__delivery_post_num}>от 199 ₽</span></p>
                                    </div>
                                </div>
                                <div className={s.product__guarantee}>
                                    <img className={s.product__quality} src={quality} alt="quality" />
                                    <div className={s.product__guarantee_right}>
                                        <p className={s.product__guarantee_title}>Гарантия качества</p>
                                        <p className={s.product__guarantee_text}>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.product__about}>
                            <p className={s.product__about_title}>Описание</p>
                            <p className={s.product__about_text}>{product.description}</p>
                        </div>
                        {/* <div className={s.product__characteristics}>
                            <p className={s.product__characteristics_title}>Характеристики</p>
                            <div className={s.product__weight}>
                                <p className={s.product__weight_title}>Вес</p>
                                <p className={s.product__weight_text}>1 шт 120-200 грамм</p>
                            </div>
                            <div className={s.product__sell}>
                                <p className={s.product__sell_title}>Цена</p>
                                <p className={s.product__sell_text}>490 ₽ за 100 грамм</p>
                            </div>
                        </div> */}
                        <div className={s.product__reviews}>
                            <p className={s.product__reviews_title}>Отзывы</p>
                            <button className={s.product__reviews_add}>Написать отзыв</button>
                            <p className={s.product__reviews_img_title}>Фотографии наших покупателей</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

