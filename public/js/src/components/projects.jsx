import React from 'react';
import Directory from './directory'

export default class Projects extends React.Component {
    onLinkClick = (e) => {
        e.stopPropagation();
    }

    render() {
        const p = this.props;
        return (
            <Directory {...p}>
                <div className="projects">
                    <div className="projects__item">
                        <h3>Этот сайт</h3>
                        <a href="https://github.com/dmitriilazukov/skills-page" onClick={this.onLinkClick}
                           target='_blank'>
                            https://github.com/dmitriilazukov/skills-page
                        </a>
                        <p>
                            Сайт написан на NodeJs на бэке и ReactJs + SCSS на фронтенде. Ознакомиться с исходным кодом
                            можете в репозитории. Сборка осуществляется с помощью Webpack. Хостится через nginx + proxy
                            до NodeJs. Дизайн заимстован со стилистики Windows98.
                        </p>
                        <hr/>
                    </div>
                    <div className="projects__item">
                        <h3>BX24-ORM</h3>
                        <a href="https://github.com/dmitriilazukov/bx24_orm" onClick={this.onLinkClick}
                           target='_blank'>
                            https://github.com/dmitriilazukov/bx24_orm
                        </a>
                        <p>
                            ORM-стилизованная API обертка для CRM-сервиса &nbsp;
                            <a href="https://www.bitrix24.ru" onClick={this.onLinkClick} target='_blank'>
                                Bitrix24
                            </a>
                            &nbsp;написанная для Python 2.7 и Python 3+. Используется в проекте Oxiv.ru и находится в
                            alpha стадии тестирования.
                        </p>
                        <hr/>
                    </div>
                </div>
            </Directory>
        )
    }
}