import {MESSAGE_BOARD_CLICKED} from '../actions/message';

const initialState = {
    boardExpanded: true,
};

function message(state = initialState, action) {
    switch (action.type) {
        case MESSAGE_BOARD_CLICKED:
            return Object.assign({}, state, {boardExpanded: !state.boardExpanded});
        default:
            return state
    }
}

export default message;