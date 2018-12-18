import React from "react";

export function renderResumeContent() {
    function printPage(){
        window.print();
        return false;
    }
    return (
        <div className='resume'>
            <div className='resume__body'>
                <div className="resume__print resume__print-hidden" onClick={printPage}>
                    <img className="resume__print_icon" src='/images/icons/print.png'/>
                    <span className='resume__print_text'>Распечатать</span>
                </div>
                <div className="resume__print_clearfix"/>
                <hr/>
                <h2 className='resume__title resume__title-padded'>Лазуков Дмитрий</h2>
                <h4 className='resume__subtitle resume__subtitle-centered'>Middle Fullstack Python developer</h4>
                <div className='resume__subtitle resume__subtitle-centered resume__contact'>
                    <i>Email:</i> <a href="mailto:dmitriilazukov@gmail.com?subject=Просмотр резюме"
                                     target='_blank'>dmitriilazukov@gmail.com</a>
                </div>
                <div className='resume__subtitle resume__subtitle-centered resume__contact'>
                    <i>Github:</i> <a href="https://github.com/dmitriilazukov"
                                      target='_blank'>https://github.com/dmitriilazukov</a>
                </div>
                <div
                    className='resume__subtitle resume__subtitle-centered resume__contact '>
                    <i>Telegram:</i> <a href="tg://resolve?domain=dmitriilazukov">
                    @dmitriilazukov</a>
                </div>
                <div
                    className='resume__subtitle resume__subtitle-centered resume__contact '>
                    <i>Телефон:</i> <a href="callto:+79995493629">
                    +7 (999) 549 36-29</a>
                </div>
                <div
                    className='resume__subtitle resume__subtitle-centered resume__contact '>
                    <i>Skype:</i> <a href="Skype:live:704ca95fc030a59b?userinfo">
                    live:704ca95fc030a59b</a>
                </div>
                <div className='resume__subtitle resume__subtitle-centered '>
                    <i>Готовность к переезду:</i> <b>Не готов</b>
                </div>
                <div className='resume__subtitle resume__subtitle-centered '>
                    <i>Уровень английского:</i> <b>Разговорный, читаю проффесиональную литературу</b>
                </div>
                <hr/>
                <h3 className='resume__subtitle resume__subtitle-underlined'>О себе:</h3>
                <p className='resume__text'>
                    Привет, мне 23 и я являюсь Python разработчиком. Я увлекаюсь программированием с 16 лет
                    и перед выпуском из школы, я решил, что хочу связать свою жизнь с профессией прогарммиста.
                    Идеальное место работы в моем представлении - это позиция Web-разработчика
                    в дружном коллективе в IT компании (или компании, которая понимает что из себя представляет
                    эта позиция, и в чем заключаются ее компетенции), с возможностью карьерного роста, обучения
                    новым навыкам и
                    профессионального развития.
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
                <ul className='resume__list'>
                    <li>
                        <b>Август 2017 - по наст. время</b> <br/>
                        <i>Ведущий программист в Oxiv.ru</i>
                        <h4>Обязанности:</h4>
                        <ul>
                            <li>Полное сопровождение IT инфраструктуры</li>
                            <li>Разработка схем интеграции со сторонними сервисами с помощью REST API (Bitrix24,
                                YClients, Vscale.io)
                            </li>
                            <li>Написание и внедрение Front-end скриптов на лендинги
                                компаний от идентификации клиента до написания кастомной аналитики под нужны
                                компании.
                            </li>
                            <li>Подключение систем оплаты (Tinkoff Merchant, Я.Деньги)</li>
                        </ul>
                    </li>
                    <li>
                        <b>Февраль 2017 - Май 2017</b> <br/>
                        <i>Программист в компании Строительный Двор</i>
                        <h4>Обязанности:</h4>
                        <ul>
                            <li>Разработка учебного сайта компании на Django.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Август 2016 - Февраль 2017</b> <br/>
                        <i>Программист в ПАО Сбербанк</i>
                        <h4>Обязанности:</h4>
                        <ul>
                            <li>Разработка портала для внутренних нужд банка на ASP.NET MVC (C#).</li>
                            <li>Разработка разноплановой бизнес логики
                                (от задач для HR отдела до организации процессов отдела обучения персонала)
                            </li>
                            <li>Сбор и анализ данных более 16 000 профилей сотрудников</li>
                        </ul>
                    </li>
                    <li>
                        <b>Август 2015 - Август 2016</b> <br/>
                        <i>Программист в ЗАО ВостокНефтеГазПроект</i>
                        <h4>Обязанности:</h4>
                        <ul>
                            <li>Разработка десктоп приложения в сфере проектирования нефтегазовых
                                месторождений
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}