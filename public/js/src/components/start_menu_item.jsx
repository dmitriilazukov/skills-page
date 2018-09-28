import React from 'react'
import HorizontalLine from './horizontal_line'

export default class StartMenuItem extends React.Component {
    render() {
        const img = this.props.img;
        const text = this.props.text;
        const line = this.props.line;
        const topLine = line === 'top' ? <HorizontalLine/> : null;
        const bottomLine = line === 'bottom' ? <HorizontalLine/> : null;
        return (
            <div>
                {topLine}
                <div className="start-menu__item">
                    <img className="start-menu__item-img" src={img} alt={text}/>
                    <div className="start-menu__item-text">{text}</div>
                </div>
                {bottomLine}
            </div>
        )
    }
}