import React from 'react';
import Window from './window';

export default class Directory extends React.Component {
    render() {
        const p = this.props;
        return(
          <Window {...p}>
              <div>DIRECTORY</div>
          </Window>
        );
    }
}