import React from 'react';
import {Icon, Button} from 'react-mdl';

const MessagesComponent = ({onClickDirect, onClickGroups, onClickChannels}) => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="message" />Messages</span>
        <ul>
            <li>
                <Button onClick={onClickDirect}>
                    <Icon name="subdirectory_arrow_right" style={{color: 'green'}}/> Direct
                </Button>
            </li>
            <li>
                <Button onClick={onClickGroups}>
                    <Icon name="group" style={{color: 'pink'}}/> Groups
                </Button>
            </li>
            <li>
                <Button onClick={onClickChannels}>
                    <Icon name="apps" style={{color: 'blue'}}/> Channels
                </Button>
            </li>
        </ul>
    </div>
);

export default MessagesComponent;