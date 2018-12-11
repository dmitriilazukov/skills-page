import React from 'react';
import Window from './window';

export default class Directory extends React.Component {
    render() {
        const p = this.props;
        return (
            <Window {...p}>
                <div className="directory">
                    <div className="directory__body">
                        {this.props.children}
                    </div>
                </div>
            </Window>
        );
    }
}