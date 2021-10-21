import {MainLayout} from "../../layouts/MainLayout";


import s from './Unews.module.scss';

export default function Unews () {
    return (
        <MainLayout usnews={true} >
            <div className={s.content}>
                <h1 className={s.h1}>Хотите связаться с нами?</h1>
                <p>Вы можете прислать в редакцию Вести БНТУ новость или историю, предложить тему для публикации или описать проблему.</p>
                <p>Оставить сообщение можно прямо на этой странице. Можно написать нам на почту <a href="mailto:mail.bntu.by">mail.bntu.by</a> или в любой из соцсетей — мы получим ваше сообщение и прочитаем его.</p>
                <h2>Мы в социальных сетях</h2>
                <div className={s.social}>
                    <div>{/*<TelegramIcon />*/}Telegram</div>
                    <div>Instagram</div>
                    <div>Vkontakte</div>
                </div>
            </div>
        </MainLayout>
    )
}