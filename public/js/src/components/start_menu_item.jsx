import React from 'react'
import {inject} from 'mobx-react'
import HorizontalLine from './horizontal_line'
import {preventEventPropagation} from "../utils";

@inject('appState')
export default class StartMenuItem extends React.Component {
    onClick = (e) => {
        this.props.appState.showWindow(this.props.windowId);
        preventEventPropagation(e);
    };

    render() {
        const img = this.props.img;
        const text = this.props.text;
        const line = this.props.line;
        const topLine = line === 'top' ? <HorizontalLine/> : null;
        const bottomLine = line === 'bottom' ? <HorizontalLine/> : null;
        return (
            <div>
                {topLine}
                <div className="start-menu__item" onClick={this.onClick} onTouchEnd={this.onClick}>
                    <img className="start-menu__item-img" src={img} alt={text}/>
                    <div className="start-menu__item-text">{text}</div>
                </div>
                {bottomLine}
            </div>
        )
    }
}