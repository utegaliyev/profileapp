import React from 'react';
import {Icon, Button, Badge, IconButton} from 'react-mdl';
import image from '../images.jpg';

const UserCorner = ({notificationCount, onClickAvatar, onClickNotifications, onClickSettings, onClickExit})=>
{
    const userNotificationComponent = notificationCount>0 ?
            (<Badge text={notificationCount}><Icon name="notifications" /></Badge>)
            : <Icon name="notifications" />;
 return (<div className="leftNavTop">
     <Button onClick={onClickAvatar} className="profileTopAvatar">
         <img  src={image} alt="profile avatar" />
     </Button>
     <Button onClick={onClickNotifications}>
         {userNotificationComponent}
     </Button>
     <IconButton  name="settings" onClick={onClickSettings}/>
     <IconButton  name="exit_to_app" onClick={onClickExit}/>
 </div>);
};

export default UserCorner;