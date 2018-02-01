import api from '../utils/api'

export function fetchPins() {
	return {
		type: "FETCH_PINS",
		payload: api.getAllPins(),
	}
}

export function fetchProfile() {
	return {
		type: "FETCH_PROFILE",
		payload: api.getProfile(),
	}
}