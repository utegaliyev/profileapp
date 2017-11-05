import React from 'react';
import {Button} from 'react-mdl';
import avatar from '../some_avatar.png';

const UserDialog = ({user, dialogClicked}) => (
    <div className="messageDialogItem">
        <Button onClick={()=> {dialogClicked(user)}}>
            <img src={avatar} alt="This is test user"/>
            <br/>
            <div>{user.name}</div>
        </Button>
    </div>);

export default UserDialog;