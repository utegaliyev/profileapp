import React from 'react';
import {Button, IconButton} from 'react-mdl';
import './Profile.css';
import image from '../images.jpg';

const ProfileComponent = ({profile}) => {
    return (<div className="profileWrapper">
        <div className="profileCard">
            <div>
                <img src={image} className="profileImage" alt="profile avatar"/>
                <IconButton name="edit" className="pull-right"/>
            </div>
            <h3>{profile.login}</h3>
            <p>{profile.name}</p>
        </div>
        <div  className="profileInfo">
            <IconButton name="edit" className="pull-right"/>
            <dl>
                <dt>Company name</dt>
                <dd>{profile.company}</dd>
                <dt>Timezone</dt>
                <dd>{profile.timezone}</dd>
                <dt>Email addresses</dt>
                <dd>
                    <ul>
                        {profile.emails.map((item, ind) => <li key={'email' + ind}>{item}</li>)}
                    </ul>
                </dd>

            </dl>
            <Button primary className="pull-right">RESET PASSWORD</Button>
            <div className="clear"/>
        </div>
    </div>);
};

ProfileComponent.defaultProps = {
    profile: {
        login: 'Leeto',
        name: 'Alexander Litvin',
        company: 'Bachoo UX && UI desing',
        timezone: 'UTC+02:00',
        emails: ['test1@mail.ru', 'test2@mail.ru']
    },
};
export default ProfileComponent;