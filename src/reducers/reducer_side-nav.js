import { TOGGLE_SIDENAV } from '../constants/index';

export default function(state = {}, action) {
	switch(action.type) {
		case TOGGLE_SIDENAV:
			return action.payload;
	}
	return state;
}