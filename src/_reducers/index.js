import {combineReducers} from 'redux';  // reducer을 하나로 합쳐준다.
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;