import {MainLayout} from "../../layouts/MainLayout";
import s from './Contacts.module.scss';

export default function Contacts () {
    return (
        <MainLayout usnews={true} >
            <div className={s.content}>
                <h1 className={s.h1}>Контакты</h1>
                <div className={s.name}>"<i>Беларусский национальный технический университет</i>"</div>
                <div className={s.adress}><b>Юридический адрес:</b></div>
                <div className={s.ardressAns} >Беларусь, город Минск, проспект независимости 63</div>
                <div className={s.phone}><b>Телефон:</b></div>
                <div className={s.phoneAns}><a href="tel:+375292951755">+37529 306 1150</a></div>
                <div className={s.mail}><b>Электронная почта:</b></div>
                <div className={s.mailAns}><a href="mailto:mail.bntu.by" >mail.bntu.by</a> (общие вопросы)</div>
                <div className={s.mailAns}><a href="mailto:mail.bntu.by" >mail.bntu.by</a> (редакция)</div>
                <div className={s.mailAns}><a href="mailto:mail.bntu.by" >mail.bntu.by</a> (реклама)</div>
                <h5>Добавить карту!</h5>
            </div>
        </MainLayout>
    )
}