import React from 'react';
import VerticalLine from './vertical_line'

export default class Tray extends React.Component {
    render() {
        return (
            <div className="tray">
                <VerticalLine/>
                <div className="tray__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}