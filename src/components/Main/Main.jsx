import { Crad } from '../Card/Card'
import s from './Main.module.css'

export const Main = ({ cards }) => {
    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.main__body}>
                    {cards.map((item, index) => (
                        <Crad {...item} />
                    ))}

                </div>
            </div>
        </div>
    )
}
