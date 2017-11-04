import React from 'react';
import {IconButton, Icon} from 'react-mdl';

const TimeTrackingComponent = () => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="message" />Messages</span>
        <ul>
            <li> <IconButton name="subdirectory_arrow_right" style={{color: 'green'}}/> Direct</li>
            <li><IconButton name="group" style={{color: 'pink'}}/> Groups</li>
            <li><IconButton name="apps" style={{color: 'blue'}}/> Channels</li>

        </ul>
    </div>
);

export default TimeTrackingComponent;