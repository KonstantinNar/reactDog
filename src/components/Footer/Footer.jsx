import { Copyright } from "../Copyright/Copyright"
import { ColumnLeft, ColumnRight } from "../Column/Column"
import { Connection } from "../Connection/Connection"
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.footer__body}>
                    <div className={s.footer__row}>
                        <Copyright />
                        <ColumnLeft />
                        <ColumnRight />
                        <Connection />
                    </div>
                </div>
            </div>
        </div>
    )
}