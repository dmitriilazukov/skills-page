import React from 'react';
import cookie from 'react-cookies';
import Window from './window';

export default class WarningWindow extends React.Component {
    closeWindow = (e) => {
        if(this.props.cookieFlag){
            cookie.save(this.props.cookieFlag, true);
        }
        this.props.store.hideWindow(this.props.windowId);
    };

    render() {
        return (
            <Window {...this.props}>
                <div className="warning">
                    <img className="warning__icon" src={this.props.img}/>
                    <div className="warning__text">
                        {this.props.warningText}
                    </div>
                    <div className="warning__button" onClick={this.closeWindow} onTouchEnd={this.closeWindow}>
                        OK
                    </div>
                </div>
            </Window>
        )
    }
}