import React from 'react';
import {Icon, Button} from 'react-mdl';

const MyIssuesComponent = ({issues, onIssueClick}) => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="date_range" />My Issues</span>
        <ul>
            {
                issues.map((item, ind) =>
                        <li key={'issue' + ind}>
                            <Button onClick={onIssueClick}>
                                <Icon name="brightness_1" />{item.name}
                            </Button>
                        </li>
                )
            }
        </ul>
    </div>
);

export default MyIssuesComponent;