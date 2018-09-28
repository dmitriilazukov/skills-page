import React from 'react';
import cn from "classnames";
import StartMenuItem from './start_menu_item'

export default class StartMenu extends React.Component {
    render() {
        const startMenuOpened = this.props.startMenuOpened;
        const startMenuItems = this.props.startMenuItems.map((i) => <StartMenuItem key={i.text}
                                                                                   img={i.img}
                                                                                   line={i.line}
                                                                                   text={i.text}/>);
        return (
            <div className={cn('start-menu', {'start-menu_hidden': !startMenuOpened})}>
                <div className="start-menu__logo">
                    <div className="start-menu__logo-text"><b>Windows </b>98</div>
                </div>
                <div className="start-menu__itemlist">
                    {startMenuItems}
                </div>
            </div>
        )
    }
}