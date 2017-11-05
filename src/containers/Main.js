import {connect} from 'react-redux';
import {projectClick} from '../actions/project';
import {issueClick} from '../actions/issue';
import {messageBoardClick} from '../actions/message';

import Main from '../components/Main';




const mapDispatchToProps = (dispatch) => {
    return {
        onProjectClick: () => {dispatch(projectClick())},
        onIssueClick: () => {dispatch(issueClick())},
        onStartClick: () => {
            alert('start clicked');
        },onLastTrackedClick: () => {
            alert('Last tracked clicked');
        },onClickDirect: () => {
            alert('Direct clicked');
        },onClickGroups: () => {
            alert('Groups clicked');
        }, onClickChannels: ()=>{
            alert('Channels clicked');
        }, onClickAvatar: ()=>{
            alert('avatar clicked');
        }, onClickNotifications: ()=>{
            alert('Notifications clicked');
        }, onClickSettings: ()=>{
            alert('Settings clicked');
        }, onClickExit: ()=>{
            alert('Exit clicked');
        },
        dialogClicked: (user) => {
            alert('Dialog with '+user.name +' clicked');
        },
        messageBoardClick: () => {
            dispatch(messageBoardClick());
        }
    };
};

const mapStateToProps = (state) => {
    return {
        pathname: state.router.location.pathname,
        projects: state.project.items,
        issues: state.issue.items,
        notificationCount: 1,
        messageBoardExpanded: state.message.boardExpanded,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);