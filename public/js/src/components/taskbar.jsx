import React from 'react';
import {observer, inject} from 'mobx-react'
import cn from 'classnames';
import Tray from './tray'
import TrayClock from './tray_clock'
import VerticalLine from './vertical_line'
import TaskbarWindowIcon from './taskbar_window_icon'
import TrayLanguage from './tray_language'

@inject("appState")
@observer
export default class Taskbar extends React.Component {
    handleStartButtonClick = () => {
        this.props.appState.toggleStartMenu();
        this.props.appState.setDesktopSelected(null);
    };

    render() {
        const appState = this.props.appState;
        const openedWindows = appState.windows
            .filter((i) => i.hidden === false)
            .map((i) => <TaskbarWindowIcon title={i.title} windowId={i.windowId} img={i.img} collapsed={i.collapsed}/>);
        return (
            <div className="taskbar">
                <div className={cn({'start-button_clicked': appState.startMenuOpened}, 'start-button')}
                     onClick={this.handleStartButtonClick}>
                    <div className="start-button__logo">
                        <img src="../images/win98_start_logo.png" alt="Windows 98 Logo"/>
                    </div>
                    <div className="start-button__text">{window.initialState.startButtonText}</div>
                </div>
                <VerticalLine/>
                <div className="overflow-hidden">
                    <div className="taskbar__container">
                        {openedWindows}
                    </div>
                </div>
                <Tray>
                    <TrayLanguage/>
                    <TrayClock/>
                </Tray>
            </div>
        )
    }
}