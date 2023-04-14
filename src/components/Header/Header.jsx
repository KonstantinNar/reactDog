import { useNavigate } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'
import { Search } from '../Search/Search'
import s from './Header.module.css'

export const Header = () => {

    const navigate = useNavigate()
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header__body}>
                    <span onClick={() => navigate("/")}>
                        <Logo />
                    </span>
                    <Search />
                    <Nav />
                </div>
            </div>
        </div>
    )
}