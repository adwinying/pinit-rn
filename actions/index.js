import { getAllPins, getProfile } from '../utils/api'

export function fetchPins() {
	return {
		type: "FETCH_PINS",
		payload: getAllPins(),
	}
}

export function fetchProfile() {
	return {
		type: "FETCH_PROFILE",
		payload: getProfile(),
	}
}