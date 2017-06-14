import { combineReducers } from 'redux';

import SideNavReducer from './reducer_side-nav';

const rootReducer = combineReducers({
 sideNav: SideNavReducer
});

export default rootReducer;
