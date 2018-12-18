import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import {getClientCoords, preventEventPropagation} from "../utils";
// import Win98Store from '../store';
// import { HEADER_BUTTON_OPTION} from "../store";

const BORDER = {
    TOP: 0b0001,
    LEFT: 0b0010,
    RIGHT: 0b0100,
    BOTTOM: 0b1000
};

const BASE_Z_INDEX = 20;
const ACTIVE_Z_INDEX = 30;

class Window extends React.Component {
    _clientX;
    _clientY;
    _resizeClientX;
    _resizeClientY;
    _boundingRect;
    _targetBorder;

    constructor(props) {
        super(props);
        this._clientX = null;
        this._clientY = null;
        this._resizeClientX = null;
        this._resizeClientY = null;
        this._boundingRect = null;
        this.state = {
            headerMouseDown: false,
            borderResizing: false,
            top: props.top,
            left: props.left,
            title: props.title,
            width: props.width,
            height: props.height
        }
    }

    componentDidUpdate(props, state) {
        if (this.state.headerMouseDown && !state.headerMouseDown) {
            window.addEventListener('mousemove', this.onHeaderMouseMove);
            window.addEventListener('mouseup', this.onHeaderMouseUp);
            window.addEventListener('touchmove', this.onHeaderMouseMove);
            window.addEventListener('touchend', this.onHeaderMouseUp);
        }
        else if (!this.state.headerMouseDown && state.headerMouseDown) {
            window.removeEventListener('mousemove', this.onHeaderMouseMove);
            window.removeEventListener('mouseup', this.onHeaderMouseUp);
            window.removeEventListener('touchmove', this.onHeaderMouseMove);
            window.removeEventListener('touchend', this.onHeaderMouseUp);
        }
        if (this.state.borderResizing && !state.borderResizing && this.props.resizable) {
            window.addEventListener('mousemove', this.onBorderResize);
            window.addEventListener('touchmove', this.onBorderResize);
            window.addEventListener('mouseup', this.onBorderRelease);
            window.addEventListener('touchend', this.onBorderRelease);
        }
        else if (!this.state.borderResizing && state.borderResizing && this.props.resizable) {
            window.removeEventListener('mousemove', this.onBorderResize);
            window.removeEventListener('touchmove', this.onBorderResize);
            window.removeEventListener('mouseup', this.onBorderRelease);
            window.removeEventListener('touchend', this.onBorderRelease);
        }
    };

    getBoundingRect = () => {
        this._boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    };

    onHeaderMouseDown = (e) => {
        let {x, y} = getClientCoords(e);
        this._clientX = x;
        this._clientY = y;
        this.setState({headerMouseDown: true});
        this.setWindowActive();
        preventEventPropagation(e);
    };

    onHeaderMouseMove = (e) => {
        this.getBoundingRect();
        const br = this._boundingRect;
        const {clientX, clientY} = getClientCoords(e);
        if (!this._clientX || !this._clientY) {
            this._clientX = clientX;
            this._clientY = clientY;
        }
        const offsetX = this._clientX - clientX;
        const offsetY = this._clientY - clientY;
        this._clientX = clientX;
        this._clientY = clientY;
        this.setState({left: br.left - offsetX, top: br.top - offsetY});
        preventEventPropagation(e);
    };

    onHeaderMouseUp = (e) => {
        this.setState({headerMouseDown: false});
        preventEventPropagation(e);
    };

    setFullscreen = () => {
        this.props.store.setWindowFullscreen(this.props.windowId);
        // this.props.appState.setWindowFullscreen(this.props.windowId);
    };

    resizeBorder = (e) => {
        const MIN_WIDTH = 250;
        const MIN_HEIGHT = 250;
        const {clientX, clientY} = getClientCoords(e);
        let {width, height} = this.state;
        if (/%/.test(width) || /%/.test(height)) {
            const br = ReactDOM.findDOMNode(this).getBoundingClientRect();
            width = br.width;
            height = br.height;
        }
        this.setState({width: width, height: height});
        if (this._resizeClientX && this._resizeClientY) {
            let {top, left, width, height} = this.state;
            let offsetX = -this._resizeClientX + clientX;
            let offsetY = -this._resizeClientY + clientY;
            this._resizeClientX = clientX;
            this._resizeClientY = clientY;
            switch (this._targetBorder) {
                case BORDER.LEFT:
                    left += offsetX;
                    width -= offsetX;
                    break;
                case BORDER.RIGHT:
                    width += offsetX;
                    break;
                case  BORDER.BOTTOM:
                    height += offsetY;
                    break;
                case BORDER.TOP:
                    top += offsetY;
                    height -= offsetY;
                    break;
                case BORDER.TOP | BORDER.LEFT:
                    left += offsetX;
                    top += offsetY;
                    width -= offsetX;
                    height -= offsetY;
                    break;
                case BORDER.TOP | BORDER.RIGHT:
                    width += offsetX;
                    height -= offsetY;
                    top += offsetY;
                    break;
                case BORDER.BOTTOM | BORDER.LEFT:
                    height += offsetY;
                    left += offsetX;
                    width -= offsetX;
                    break;
                case BORDER.BOTTOM | BORDER.RIGHT:
                    height += offsetY;
                    width += offsetX;
                    break;
            }
            this.setState({top: top, left: left, width: width, height: height});
        }
        else {
            this._resizeClientX = clientX;
            this._resizeClientY = clientY;
        }
    };

    onBorderClick = (e) => {
        if (!this.props.fullscreen) {
            const {clientX, clientY} = getClientCoords(e);
            this._resizeClientY = clientY;
            this._resizeClientX = clientX;
            const border = e.target.getAttribute('data-border');
            this._targetBorder = parseInt(border);
            this.setState({borderResizing: true});
            this.setWindowActive();
        }
        preventEventPropagation(e);
    };
    onBorderResize = (e) => {
        this.resizeBorder(e);
        preventEventPropagation(e);
    };
    onBorderRelease = (e) => {
        this.setState({borderResizing: false});
        this._targetBorder = null;
        this._resizeClientY = null;
        this._resizeClientX = null;
        preventEventPropagation(e);
    };

    setWindowActive = () => {
        this.props.store.setWindowActive(this.props.windowId);
    };

    onWindowClick = (e) => {
        this.setWindowActive();
        preventEventPropagation(e);
    };

    hideWindow = (e) => {
        this.props.store.hideWindow(this.props.windowId);
        preventEventPropagation(e);
    };

    setWindowDefault = (e) => {
        this.props.store.setWindowDefault(this.props.windowId);
        preventEventPropagation(e);
    };

    setWindowCollapsed = (e) => {
        this.props.store.setWindowCollapsed(this.props.windowId, !this.props.collapsed);
        preventEventPropagation(e);
    };


    render() {
        const windowId = 'window-' + this.props.windowId;
        const isActive = this.props.active;
        const style = {
            width: this.props.fullscreen ? '100%' : this.state.width,
            height: this.props.fullscreen ? '100%' : this.state.height,
            top: this.props.fullscreen ? 0 : this.state.top,
            left: this.props.fullscreen ? 0 : this.state.left,
            zIndex: isActive ? ACTIVE_Z_INDEX : BASE_Z_INDEX
        };
        const closeShown = this.props.closeShown;
        const collapseShown = this.props.collapseShown;
        const fullscreenShown = this.props.fullscreenShown;
        const {img, title} = this.props;
        return (
            <div
                className={cn({
                    'window_hidden': this.props.hidden || this.props.collapsed,
                    'window_windowed': !this.props.fullscreen
                }, "window")}
                key={windowId} style={style}
                onTouchEnd={this.onWindowClick}
                onClick={this.onWindowClick}>
                {/*<div className="window__border">*/}
                    <div className="window__border-left"
                         data-border={BORDER.LEFT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-top"
                         data-border={BORDER.TOP}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-bottom"
                         data-border={BORDER.BOTTOM}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-right"
                         data-border={BORDER.RIGHT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-bottomleft"
                         data-border={BORDER.BOTTOM | BORDER.LEFT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-bottomright"
                         data-border={BORDER.BOTTOM | BORDER.RIGHT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-topleft"
                         data-border={BORDER.TOP | BORDER.LEFT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className="window__border-topright"
                         data-border={BORDER.TOP | BORDER.RIGHT}
                         onTouchStart={this.onBorderClick}
                         onMouseDown={this.onBorderClick}/>
                    <div className={cn({'window__header_active': isActive}, "window__header")}
                         onTouchStart={this.onHeaderMouseDown}
                         onMouseDown={this.onHeaderMouseDown}>
                        <img src={img} alt={title} className="window__header-img"/>
                        <div className="window__header-title">{this.props.title}</div>
                        {closeShown ?
                            <div className="window__header-button" onClick={this.hideWindow}>
                                <i className="fa fa-times"/>
                            </div>
                            : null}
                        {fullscreenShown ?
                            !this.props.fullscreen ?
                                <div className="window__header-button"
                                     onClick={this.setFullscreen}>
                                    <i className="fa fa-window-maximize"/>
                                </div> :
                                <div className="window__header-button"
                                     onClick={this.setWindowDefault}>
                                    <i className="fa fa-window-restore"/>
                                </div>
                            : null}
                        {collapseShown ?
                            <div className="window__header-button"
                                 onClick={this.setWindowCollapsed}>
                                <i className="fa fa-window-minimize"/>
                            </div>
                            : null}
                    </div>
                    <div className="window__body">
                        {this.props.children}
                    </div>
                </div>
            // </div>
        )
    }
}

export default Window;