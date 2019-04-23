import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../reducers/user-reducer';
import modalReducer from '../reducers/modal-reducer';

const rootReducer = combineReducers({
	router: routerReducer,
	user: userReducer,
	modal: modalReducer,
});

export default rootReducer;