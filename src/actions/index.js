import { TOGGLE_SIDENAV } from '../constants/index';

export function toggleSideNav(toggle) {
	return {
		type: TOGGLE_SIDENAV,
		payload: toggle
	}
}
