import React from 'react';
import cn from 'classnames';
import {inject} from 'mobx-react';
import {preventEventPropagation} from "../utils";

@inject('appState')
export default class DesktopIcon extends React.Component {
    onIconClick = (e) => {
        this.props.appState.setDesktopSelected(this.props.targetWindow);
        preventEventPropagation(e);
    };
    onIconDoubleClick = (e) => {
        const appState = this.props.appState;
        appState.showWindow(this.props.targetWindow);
        appState.setDesktopSelected(null);
    };

    render() {
        const {img, text} = this.props;
        return (
            <div className={cn('desktop__icon', {'desktop__icon_selected': this.props.selected})}
                 onDoubleClick={this.onIconDoubleClick}
                 onClick={this.onIconClick}
                 onTouchEnd={this.onIconDoubleClick}>
                <img className="desktop__icon-image" src={img} alt=""/>
                <div className="desktop__icon-text">
                    {text}
                </div>
            </div>
        )
    }
}