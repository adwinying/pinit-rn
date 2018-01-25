import { getAllPins } from '../utils/api'

export function fetchPins() {
	return {
		type: "FETCH_PINS",
		payload: getAllPins(),
	}
}