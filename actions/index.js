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

export function updatePin(pin) {
	return {
		type: "UPDATE_PIN",
		payload: api.updatePin(pin),
	}
}

export function deletePin(pinId) {
	return {
		type: "DELETE_PIN",
		payload: {
			promise: api.deletePin(pinId),
			data: pinId,
		},
	}
}