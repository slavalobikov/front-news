import React from 'react';

import s from './MainPosts.module.scss';
import ImageWithTime from "../ImageWithTime";
import AsideNews from "../AsideNews";
import MainSubNews from "../MainSubNews";

const initialState = [
    {
        id: 0,
        title: '«Зачем же вы издеваетесь над людьми?» Помните про обязательный масочный режим и возможные штрафы? Их не будет',
        date: '11:48',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle:'Александр Лукашенко 19 октября проводит совещание по эпидемиологический ситуации и принимаемым мерам по противодействию распространению коронавирусной инфекции. Если судить по сообщениям его пресс-службы, то «коронафейками» из-за границы «хотят всколыхнуть страну», он не против вакцинации, но «зачем над людьми издеваетесь»?',
    },
    {
        id:1,
        title:'Стало известно, где будет работать бывший министр юстиции Олег Слижевский ',
        date:'12:00',
        subtitle: 'Олег Слижевский оставил министерское кресло 18 октября. Согласно указу Александра Лукашенко, «в связи с переходом на другую работу»',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
    },
    {
        id:2,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
    {
        id:3,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
    {
        id:4,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
    {
        id:5,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
    {
        id:6,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
    {
        id:7,
        title: 'Каким будет курс доллара в этом и 2022 годах. Прогноз чиновников и экспертов',
        date:'11:39',
        img: 'https://vesti.bntu.by/sites/default/files/styles/teaser_related/public/default_images/bntu.jpg?itok=u0DiPrl-',
        subtitle: 'В проект бюджета на 2022 год чиновники заложили инерционный сценарий условий экономического развития. По всей видимости, ставка на развитие экономики за счет достижений нынешнего года',
    },
]

interface MainPostsProps {

}



const MainPosts: React.FC<MainPostsProps> = () => {
    return (
        <div className={s.posts}>
            <div className={s.mainNews}>
                <ImageWithTime href={initialState[0].img} time={initialState[0].date} width={400} height={300} />
                <h1>{initialState[0].title}</h1>
                <p>{initialState[0].subtitle}</p>
            </div>
            <div className={s.secondBlock}>
                <div className={s.secondBlockFirst}>
                    <div className={s.secondBlockFirstContent}>
                        <ImageWithTime href={initialState[1].img} time={initialState[1].date} width={240} height={160} />
                        <h2 className={s.h2}>{initialState[1].title}</h2>
                    </div>
                    <div className={s.secondBlockFirstContent}>
                        <ImageWithTime href={initialState[2].img} time={initialState[2].date} width={240} height={160} />
                        <h2 className={s.h2}>{initialState[2].title}</h2>
                    </div>
                </div>
                <div className={s.tr}></div>

                <MainSubNews title={initialState[3].title} time={initialState[3].date} />
                <MainSubNews title={initialState[4].title} time={initialState[4].date} />
                <MainSubNews title={initialState[5].title} time={initialState[5].date} />
                <MainSubNews title={initialState[6].title} time={initialState[6].date} />
                <MainSubNews title={initialState[7].title} time={initialState[7].date} />

            </div>
        </div>
    )
}

export default MainPosts;