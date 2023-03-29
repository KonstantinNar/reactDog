import { Crad } from '../Card/Card'
import s from './Main.module.css'
import { getIssues } from '../../utils/utils'

export const Main = ({ cards, currentUser, hendleProductLike, search }) => {
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
                <div className={s.main__body}>
                    {cards.map((item) => (
                        <Crad {...item} key={item.id} product={item} currentUser={currentUser} hendleProductLike={hendleProductLike} />
                    ))}

                </div>
            </div>
        </div>
    )
}
