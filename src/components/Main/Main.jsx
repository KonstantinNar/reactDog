import { Crad } from '../Card/Card'
import s from './Main.module.css'
import { getIssues } from '../../utils/utils'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { CardsContext } from '../../context/CardsContext'
import { Sort } from '../Sort/Sort'

export const Main = () => {

    const { currentUser } = useContext(UserContext)
    const { cards, search } = useContext(CardsContext)

    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.text}>
                    <div className={s.search__text}>
                        {search && (
                            <p>
                                По запросу {search} найдено {cards.length}
                                {getIssues(cards.length)}
                            </p>
                        )}
                    </div>
                    <div className={s.profile}>
                        {currentUser.email && <span>{currentUser.email}</span>}
                        {currentUser.name && <span>{currentUser.name}: {currentUser.about}</span>}
                    </div>
                </div>
                <Sort />
                <div className={s.main__body}>
                    {cards.map((item) => (
                        <Crad {...item} key={item._id} product={item} />
                    ))}

                </div>
            </div>
        </div>
    )
}
