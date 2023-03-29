import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'
import { Search } from '../Search/Search'
import s from './Header.module.css'

export const Header = ({ setSearch, hendleUpdateUser }) => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header__body}>
                    <Logo />
                    <Search setSearch={setSearch} />
                    <Nav hendleUpdateUser={hendleUpdateUser} />
                </div>
            </div>
        </div>
    )
}