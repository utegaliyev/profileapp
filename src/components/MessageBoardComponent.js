import React from 'react';
import {Button, Icon} from 'react-mdl';
import './MessageBoard.css';
import UserDialogComponent from './UserDialogComponent';

const users = [
    {name: 'Elnora'},
    {name: 'Damian'},
    {name: 'Lora'}
];

const MessageBoardComponent = ({ expanded, onClick, dialogClicked}) =>
    {
        const userDialogs = expanded ? users.map((userItem, userIndex)=>
                <UserDialogComponent user={userItem} key={"user" + userIndex} dialogClicked={dialogClicked}/>) : '';
        return (
            <div className="messageBoard">
                <div className="messageDialogItem mainBtn">
                    <Button onClick={onClick}>
                        <Icon name="message" />
                    </Button>
                </div>
                {userDialogs}
            </div>
        )
    };

export default MessageBoardComponent;