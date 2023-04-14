import { useContext } from "react"
import { CardsContext } from "../../context/CardsContext"
import s from "./Sort.module.css"

export const Sort = () => {

    const { setSort } = useContext(CardsContext)

    const sortedItem = [{ id: "Популярные" }, { id: "Новинки" }, { id: "Сначала дешёвые" }, { id: "Сначала дорогие" }]
    return (
        <div className={s.sort}>
            <div className="container">
                <div className={s.body}>
                    {sortedItem.map((e) => {
                        return (
                            <span className={s.item} key={e.id} onClick={() => setSort(e.id)}>{e.id}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}