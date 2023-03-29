import s from './Nav.module.css'
import favorites from '../../image/icon/header__favorites.svg'
import cart from '../../image/icon/header__cart.svg'
import profile from '../../image/icon/header__profile.svg'

export const Nav = ({ hendleUpdateUser }) => {

    const hendleClickButtonEdit = (e) => {
        e.preventDefault();
        hendleUpdateUser({ name: "Константин", about: "Студент" })
    }

    return (
        <div className={s.nav}>
            <button>
                <img src={favorites} alt="favorites" className={s.nav__item} />
            </button>
            <button>
                <img src={cart} alt="cart" className={s.nav__item} />
            </button>

            <button onClick={hendleClickButtonEdit}>
                <img src={profile} alt="profile" className={s.nav__item} />
            </button>
        </div>
    )
}