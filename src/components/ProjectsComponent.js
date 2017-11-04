import React from 'react';
import {Icon, Button} from 'react-mdl';

const colors = ['blue', 'orange', 'green', 'red'];

const getProjectColor = (index) => {
    return colors[index%colors.length];
}

const DashboardPanelComponent = ({projects, onProjectClick}) => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="view_compact" />Project Dashboard</span>
        <ul>
            {
                projects.map((item, index) =>
                    <li key={'project' + index}>
                        <Button onClick={onProjectClick}>
                            <Icon name="brightness_1" style={{color: getProjectColor(index)}}/> {item.name}
                        </Button>
                    </li>
                )
            }
        </ul>
    </div>
);



export default DashboardPanelComponent;