import React from 'react';
import moment from 'moment'
import cookie from 'react-cookies';

export default class TrayClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: this.getDate(true), dots: true};
        window.setInterval(function () {
            this.tick(true);
        }.bind(this), 1 * 1000);
    }

    getDate = (dots) => {
        const lang = cookie.load('lang');
        if(lang === 'ru') {
            return dots ? moment().format('H:mm') : moment().format('H mm');
        }
        else if(lang === 'en'){
            return dots ? moment().format('h:mm A') : moment().format('h mm A');
        }
    };

    tick = () => {
        this.setState({currentDate: this.getDate(this.state.dots)});
        this.setState({dots: !this.state.dots});
    };

    render() {
        return (
            <span className="tray__icon">{this.state.currentDate}</span>
        )
    }
}