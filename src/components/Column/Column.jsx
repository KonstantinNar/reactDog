import s from "./Column.module.css"

export const ColumnLeft = () => {
    return (
        <div className={s.column}>
            <a className={s.column__link} href="#">Каталог</a>
            <a className={s.column__link} href="#">Акции</a>
            <a className={s.column__link} href="#">Новости</a>
            <a className={s.column__link} href="#">Отзывы</a>
        </div>
    )
}

export const ColumnRight = () => {
    return (
        <div className={s.column}>
            <a className={s.column__link} href="#">Оплата и доставка</a>
            <a className={s.column__link} href="#">Часто спрашивают</a>
            <a className={s.column__link} href="#">Обратная связь</a>
            <a className={s.column__link} href="#">Контакты</a>
        </div>
    )
}