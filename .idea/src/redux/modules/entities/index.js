import { combineReducers } from 'redux';

import products from './products';
import comments from './comments';
import orders from './orders';
import shops from './shops';

const rootReducer = combineReducers({
    products,
    shops,
    orders,
    comments
});

export default rootReducer;