import React from 'react';
import {renderResumeContent} from '../common'

export default class ResumeAppPrinter extends React.Component {
    renderResume = () => {
        return renderResumeContent();
    };

    render() {
        return this.renderResume();
    }
}