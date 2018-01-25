const initialState = {
	pins: [],
	isFetching: false,
	hasError: false,
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
			return {
				...state,
				isFetching: false,
				hasError: true,
				errMessage: "Please try again later",
			}

		default:
			return state
	}
}