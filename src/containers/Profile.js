import {connect} from 'react-redux';
import Profile  from '../components/Profile';

const mapStateToProps = (state) => {
    return {
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

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

