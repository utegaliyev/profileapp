import React from 'react';
import {Button, IconButton, Icon} from 'react-mdl';
import MessageBoardComponent from  './MessageBoardComponent';

import './Profile.css';
import image from '../images.jpg';

const ProfileComponent = ({profile, onClickReset, onClickMainEdit, onClickInfoEdit,
                              messageBoardExpanded, messageBoardClick, dialogClicked}) => {
    return (
        <div className="profileComponent">
            <div className="pull-right">
                <MessageBoardComponent expanded={messageBoardExpanded}
                                        onClick={messageBoardClick}
                                       dialogClicked={dialogClicked}/>
            </div>
            <div className="profileWrapper">
                <div className="profileCard">
                    <div>
                        <img src={image} className="profileImage" alt="profile avatar"/>
                        <IconButton name="edit" className="pull-right" onClick={onClickMainEdit}/>
                    </div>
                    <h3>{profile.login}</h3>
                    <p>{profile.name}</p>
                </div>
                <div  className="profileInfo">
                    <IconButton name="edit" className="pull-right" onClick={onClickInfoEdit}/>
                    <dl>
                        <dt>Company name</dt>
                        <dd>{profile.company}</dd>
                        <dt>Timezone</dt>
                        <dd>{profile.timezone}</dd>
                        <dt>Email addresses</dt>
                        <dd>
                            <ul>
                                {profile.emails.map((item, ind) =>
                                    <li key={'email' + ind}>
                                        {item.value}
                                        {item.verified ? <Icon name="check"/> : ''}
                                    </li>)}
                            </ul>
                        </dd>
                    </dl>
                    <Button primary className="pull-right" onClick={onClickReset}>RESET PASSWORD</Button>
                    <div className="clear"/>
                </div>
            </div>

        </div>);
};

ProfileComponent.defaultProps = {
    profile: {
        login: 'Leeto',
        name: 'Alexander Litvin',
        company: 'Bachoo UX && UI desing',
        timezone: 'UTC+02:00',
        emails: [
            {value: 'test1@mail.ru', verified: true},
            {value: 'test2@mail.ru', verified: false},
        ]
    },
};
export default ProfileComponent;