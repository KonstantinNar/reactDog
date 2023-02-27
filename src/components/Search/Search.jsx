import xmark from '../../image/icon/form__xmark.svg'
import s from './Search.module.css'

export const Search = ({ setSearch }) => {
    return (
        <form className={s.form}>
            <input
                type="text"
                className={s.form__search}
                placeholder="Поиск"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>
                <img
                    src={xmark}
                    alt="close"
                    className={s.form__icon}
                />
            </button>
        </form>
    )
}