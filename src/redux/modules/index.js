import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';
import app from './app';
import detail from './detail';

// 合并成根reducer

const rootReducer = combineReducers({
    entities,
    home,
    detail,
    app
});
export default rootReducer;