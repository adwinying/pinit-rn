const initialState = {
	pins: [],
	isFetching: false,
	hasError: false,
	profile: undefined,
}

export default function reducers(state = initialState, action) {
	switch(action.type) {
		case "FETCH_PINS_PENDING": 
			return {
				...state,
				isFetching: true,
			}

		case "FETCH_PINS_FULFILLED":
			if (action.payload.success) {
				return {
					...state,
					isFetching: false,
					pins: action.payload.pins,
				}
			} else {
				return {
					...state,
					isFetching: false,
					hasError: true,
					errMessage: action.payload.message,
				}
			}

		case "FETCH_PINS_REJECTED":
		case "FETCH_PROFILE_REJECTED":
		case "UPDATE_PIN_REJECTED":
		case "DELETE_PIN_REJECTED":
			return {
				...state,
				isFetching: false,
				hasError: true,
				errMessage: "Please try again later",
			}

		case "FETCH_PROFILE_FULFILLED":
			if (action.payload.success) {
				return {
					...state,
					profile: action.payload.user,
				}
			} else {
				return state
			}

		case "UPDATE_PIN_FULFILLED":
			if (action.payload.success) {
				return {
					...state,
					pins: state.pins.map(pin => 
						pin._id === action.payload.pin._id ? 
						action.payload.pin : pin )
				}
			} else {
				return {
					...state,
					hasError: true,
					errMessage: action.payload.message
				}
			}

		case "DELETE_PIN_PENDING":
			return {
				...state,
				pins: state.pins.filter(pin => 
					pin._id !== action.payload)
			}
			return state

		case "DELETE_PIN_FULFILLED":
			if (!action.payload.success) {
				return {
					...state,
					hasError: true,
					errMessage: action.payload.message
				}
			} else {
				return state
			}

		default:
			return state
	}
}