import React from 'react';
import Window from './window';
import cn from 'classnames';

export default class ResumeApp extends React.Component {
    linkClick = (e) => {
        e.stopPropagation();
    }

    render() {
        const p = this.props;
        return (
            <Window {...p}>
                <div className='resume'>
                    <div className='resume__body'>
                        <hr/>
                        <h2 className='resume__title resume__title-padded'>Лазуков Дмитрий</h2>
                        <h4 className='resume__subtitle resume__subtitle-centerd'>Middle Fullstack Python developer</h4>
                        <div className='resume__subtitle resume__subtitle-centerd'>
                            <i>Email:</i> <a href="mailto:dmitriilazukov@gmail.com?subject=Просмотр резюме"
                                             target='_blank' onClick={this.linkClick}>dmitriilazukov@gmail.com</a>
                        </div>
                        <div className='resume__subtitle resume__subtitle-centerd'>
                            <i>Github:</i> <a href="https://github.com/dmitriilazukov" onClick={this.linkClick}
                                              target='_blank'>https://github.com/dmitriilazukov</a>
                        </div>
                        <div className='resume__subtitle resume__subtitle-centerd resume__contact'>
                            <i>Telegram:</i> <a href="tg://resolve?domain=dmitriilazukov" onClick={this.linkClick}>
                            @dmitriilazukov</a>
                        </div>
                        <div className='resume__subtitle resume__subtitle-centerd resume__contact'>
                            <i>Телефон:</i> <a href="callto:+79995493629" onClick={this.linkClick}>
                            +7 (999) 549 36-29</a>
                        </div>
                        <div className='resume__subtitle resume__subtitle-centerd resume__contact'>
                            <i>Skype:</i> <a href="Skype:live:704ca95fc030a59b?userinfo" onClick={this.linkClick}>
                            live:704ca95fc030a59b</a>
                        </div>
                        <hr/>
                        <h3 className='resume__subtitle resume__subtitle-underlined'>О себе:</h3>
                        <p className='resume__text'>
                            Привет, мне 23 и я являюсь Python разработчиком.
                        </p>
                        <h3 className='resume__subtitle resume__subtitle-underlined'>Образование:</h3>
                        <ul>
                            <li>
                                <b>2013 - 2018</b> ТюмГУ Информацонная безопасность автоматизированных систем -
                                Специалист по информационной безопасности
                            </li>
                        </ul>
                        <h3 className='resume__subtitle resume__subtitle-underlined'>Навыки:</h3>
                        <table style={{'marginLeft': '15px'}}>
                            <tr>
                                <td>Python, Django</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Html, CSS, JS, AJAX</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>
                            <tr>
                                <td>RESTful API</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>
                            <tr>
                                <td>ООП, MVC</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>
                            <tr>
                                <td>ReactJS, Jquery</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>

                            <tr>
                                <td>SQL (Postgresql, MSSQL)</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>

                            <tr>
                                <td>Celery, Redis</td>
                                <td>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star-o'/>
                                    <i className='fa fa-star-o'/>
                                    <i className='fa fa-star-o'/>
                                </td>
                            </tr>

                        </table>
                        <h3 className='resume__subtitle resume__subtitle-underlined'>Опыт работы:</h3>
                        <ul>
                            <li>
                                <b>Август 2017 - по наст. время</b> <br/>
                                <i>Ведущий программист в Oxiv.ru</i>
                                <h4>Достижения:</h4>
                                <p className='resume__text '>
                                    Полное сопровождение IT инфраструктуры компании, разработка схем интеграции со
                                    сторонними сервисами с помощоью REST API (Bitrix24, YClients, Vscale.io).
                                    Также был получен опыт в написании и внедрении Front-end скриптов на лендинги
                                    компаний
                                    от идентификации клиента до написания кастомной аналитики под нужны компании.
                                </p>
                            </li>
                            <li>
                                <b>Февраль 2017 - Май 2017</b> <br/>
                                <i>Программист в компании Строительный Двор</i>
                                <h4>Достижения:</h4>
                                <p className='resume__text '>
                                    Разработка учебного сайта компании. Был получен опыт работы с Python и Django.
                                    Также познакомился с технологиями: RabbitMQ, Redis, Celery, React, REST API, Gitlab
                                    CI.
                                </p>
                            </li>
                            <li>
                                <b>Август 2016 - Февраль 2017</b> <br/>
                                <i>Программист в ПАО Сбербанк</i>
                                <h4>Достижения:</h4>
                                <p className='resume__text '>
                                    Разработка портала для внутренних нужд банка на ASP.NET MVC (C#).
                                    Получил опыт разработки разноплановой бизнес логики и построения приложений в
                                    паттерне MVC.
                                </p>
                            </li>
                            <li>
                                <b>Август 2015 - Август 2016</b> <br/>
                                <i>Программист в ЗАО ВостокНефтеГазПроект</i>
                                <h4>Достижения:</h4>
                                <p className='resume__text '>
                                    Разработка десктоп приложения в сфере проектирования нефтегазовых месторождений.
                                    Был получен опыт коммерческой разработки, закреплены навыки ООП и работы в команде.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Window>
        );
    }
}