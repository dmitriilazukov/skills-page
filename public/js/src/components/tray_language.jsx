import React from 'react';
import cookie from 'react-cookies';

export default class TrayLanguage extends React.Component {
    changeLanguage = (e) => {
        const thisAppLocation = '/';
        const langs = ['ru', 'en'];
        const currentLang = cookie.load('lang') || 'ru';
        const nextLang = langs[(langs.findIndex((l) => l === currentLang) + 1) % langs.length];
        cookie.save('lang', nextLang);
        window.location = thisAppLocation;
    };

    render() {
        const currentLang = cookie.load('lang') || 'ru';
        return (
            <div className="tray__icon tray-lang" onClick={this.changeLanguage}>
                {currentLang}
            </div>
        )
    }
}