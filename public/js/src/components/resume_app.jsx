import React from 'react';
import Window from './window';
import {renderResumeContent} from '../common'

export default class ResumeApp extends React.Component {
    renderResume = () => {
        return renderResumeContent();
    };

    render() {
        const p = this.props;
        return (
            <Window {...p}>
                {this.renderResume()}
            </Window>
        );
    }
}