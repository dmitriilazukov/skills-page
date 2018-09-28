import React from 'react';
import {observer, inject} from 'mobx-react';
import Desktop from './components/desktop';
import Taskbar from './components/taskbar';

@inject("appState")
@observer
class Win98App extends React.Component {

    render() {
        return (
            <div className="win98">
                <Desktop/>
                <Taskbar/>
            </div>
        )
    }
}

export default Win98App;