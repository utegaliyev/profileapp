import {connect} from 'react-redux';
import Profile  from '../components/Profile';
import {messageBoardClick} from '../actions/message';

const mapStateToProps = (state) => {
    return {
        messageBoardExpanded: state.message.boardExpanded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickReset: ()=>{
            alert('Reset clicked');
        },
        onClickMainEdit: ()=>{
            alert('Main edit clicked');
        },
        onClickInfoEdit: ()=>{
            alert('Additional edit clicked');
        },
        dialogClicked: (user) => {
            alert('Dialog with '+user.name +' clicked');
        },
        messageBoardClick: () => {
            dispatch(messageBoardClick());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

