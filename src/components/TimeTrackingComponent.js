import React from 'react';
import {Icon, Button} from 'react-mdl';

const TimeTrackingComponent = ({onStartClick, onLastTrackedClick}) => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="alarm" />Time Tracking</span>
        <ul>
            <li> <Button onClick={onStartClick}> <Icon name="play_arrow" style={{color: 'green'}}/> Start tracking </Button></li>
            <li><Button onClick={onLastTrackedClick}> <Icon name="replay" style={{color: 'pink'}}/> Last Tracked </Button></li>
        </ul>
    </div>
);

export default TimeTrackingComponent;