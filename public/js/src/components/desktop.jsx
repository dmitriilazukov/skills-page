import React from 'react';
import {observer, inject} from 'mobx-react';
import StartMenu from './start_menu';
import DesktopIcon from './desktop_icon';
import ReactDOM from 'react-dom';
import {preventEventPropagation, getClientCoords} from "../utils";
import {HEADER_BUTTON_OPTION} from "../store";

@inject("appState")
@observer
export default class Desktop extends React.Component {
    _selectionClientX = null;
    _selectionClientY = null;

    constructor(props) {
        super(props);
        this.state = {
            desktopMousePressed: false,
            selectionTop: -10,
            selectionLeft: -10,
            selectionWidth: 0,
            selectionHeight: 0
        }
    }

    hasButtonOption = (window, option) => {
        const hasOptions = window.headerIcons && window.headerIcons.length > 0;
        if (hasOptions) {
            return window.headerIcons.filter((el) => el === option).length > 0;
        }
        else {
            return false;
        }
    };

    onDesktopClick = () => {
        const appState = this.props.appState;
        if (appState.startMenuOpened) {
            appState.hideStartMenu();
        }
        appState.setWindowActive(null);
        appState.setDesktopSelected(null);
    };

    onDesktopResize = (e) => {
        const boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.props.appState.setDesktopSize(boundingRect.width, boundingRect.height);
    };

    componentDidUpdate = (props, state) => {
        if (this.state.desktopMousePressed && !state.desktopMousePressed) {
            window.addEventListener('mousemove', this.onDesktopMouseMove);
            window.addEventListener('mouseup', this.onDesktopMouseUp);
            // window.addEventListener('touchmove', this.onDesktopMouseMove);
            // window.addEventListener('touchend', this.onDesktopMouseUp);
        }
        else if (!this.state.desktopMousePressed && state.desktopMousePressed) {
            window.removeEventListener('mousemove', this.onDesktopMouseMove);
            window.removeEventListener('mouseup', this.onDesktopMouseUp);
            // window.removeEventListener('touchmove', this.onDesktopMouseMove);
            // window.removeEventListener('touchend', this.onDesktopMouseUp);
        }

    };

    onDesktopMouseMove = (e) => {
        // disabling selection due its killing usability
        return;
        const {clientX, clientY} = getClientCoords(e);
        if (!this._selectionClientX || !this._selectionClientY) {
            this._selectionClientX = clientX;
            this._selectionClientY = clientY;
        }
        else {
            const offsetX = clientX - this._selectionClientX;
            const offsetY = clientY - this._selectionClientY;
            this.setState({
                selectionTop: offsetY > 0 ? this._selectionClientY : this._selectionClientY + offsetY,
                selectionLeft: offsetX > 0 ? this._selectionClientX : this._selectionClientX + offsetX,
                selectionWidth: offsetX > 0 ? offsetX : -offsetX,
                selectionHeight: offsetY > 0 ? offsetY : -offsetY
            });
        }
        preventEventPropagation(e);
    };

    onDesktopMouseDown = (e) => {
        this.setState({desktopMousePressed: true});
        preventEventPropagation(e);
    };

    onDesktopMouseUp = (e) => {
        this.setState({desktopMousePressed: false});
        this._selectionClientX = null;
        this._selectionClientY = null;
        this.setState({
            selectionTop: -10,
            selectionLeft: -10,
            selectionWidth: 0,
            selectionHeight: 0
        });
        preventEventPropagation(e);
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.onDesktopResize);
        this.onDesktopResize();
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.onDesktopResize);
    };

    hideWindow = (windowId) => {
        this.props.appState.hideWindow(windowId);
    };

    spawnWindow = (windowParams) => {
        windowParams.store = this.props.appState;
        windowParams.active = this.props.appState.activeWindowId === windowParams.windowId;
        windowParams.closeShown = this.hasButtonOption(windowParams, HEADER_BUTTON_OPTION.CLOSE);
        windowParams.collapseShown = this.hasButtonOption(windowParams, HEADER_BUTTON_OPTION.COLLAPSE);
        windowParams.fullscreenShown = this.hasButtonOption(windowParams, HEADER_BUTTON_OPTION.FULLSCREEN);
        return React.createElement(windowParams.element, windowParams);
    };

    render() {
        const appState = this.props.appState;
        const that = this;
        const desktopItems = appState.windows.map((i) => i.desktopHidden ? null : <DesktopIcon targetWindow={i.windowId}
                                                                      selected={appState.desktopSelectedItems.filter((el) => el === i.windowId).length !== 0}
                                                                      img={i.img} text={i.title}/>);
        const windows = this.props.appState.windows.map((i) => that.spawnWindow(i));
        const {selectionLeft, selectionTop, selectionWidth, selectionHeight} = this.state;
        return (
            <div className="desktop"
                 onMouseDown={this.onDesktopMouseDown}
                // onTouchStart={this.onDesktopMouseDown}
                 onClick={this.onDesktopClick}
                 onTouchEnd={this.onDesktopClick}>
                <div className="desktop__selection"
                     style={{top: selectionTop, left: selectionLeft, width: selectionWidth, height: selectionHeight}}>
                </div>
                {windows}
                {desktopItems}
                <StartMenu startMenuOpened={this.props.appState.startMenuOpened}
                           startMenuItems={this.props.appState.startMenuItems}/>
            </div>
        );
    }
}