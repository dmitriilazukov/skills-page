import React from 'react';
import {observer, inject} from 'mobx-react';
import cn from 'classnames';
import {preventEventPropagation} from "../utils";

@inject('appState')
@observer
export default class TaskbarWindowIcon extends React.Component {
    setWindowCollapsed = (e) => {
        if (this.props.windowId !== this.props.appState.activeWindowId && !this.props.collapsed) {
            this.props.appState.setWindowActive(this.props.windowId);
        }
        else {
            if (this.props.collapsed) {
                this.props.appState.setWindowActive(this.props.windowId);
            }
            this.props.appState.setWindowCollapsed(this.props.windowId, !this.props.collapsed);
        }
        preventEventPropagation(e);
    };

    render() {
        const {title, img, windowId, collapsed} = this.props;
        return (
            <div className={cn({'taskbar__window': !collapsed, 'taskbar__window_collapsed': collapsed})}
                 onClick={this.setWindowCollapsed}>
                <img src={img} alt={title} className="taskbar__window-img"/>
                <div className="taskbar__window-text">{title}</div>
            </div>
        )
    }
}