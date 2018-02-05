const baseURL = "http://pins.nodeapp.iadw.in/api"

async function getProfile() {
	const res = await fetch(`${baseURL}/auth/profile`)
	const json = await res.json()

	return json
}

async function logout() {
	const res = await fetch(`${baseURL}/auth/logout`)
	const json = await res.json

	return json
}

async function getAllPins() {
	const res = await fetch(`${baseURL}/pin/all`)
	const json = await res.json()

	return json
}

async function getUserPins(userId) {
	const res = await fetch(`${baseURL}/pin/user/${userId}`)
	const json = await res.json()

	return json
}

async function addPin(pin) {
	const init = {
		method: 'POST',
		body: JSON.stringify(pin),
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
	}

	const res = await fetch(`${baseURL}/pin/new`)
	const json = await res.json()

	return json
}

async function updatePin(pin) {
	const init = {
		method: 'PUT',
		body: JSON.stringify(pin),
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
	}

	const res = await fetch(`${baseURL}/pin/update`, init)
	const json = await res.json()

	return json
}

async function deletePin(pinId) {
	const init = {
		method: 'DELETE',
	}

	const res = await fetch(`${baseURL}/pin/${pinId}`)
	const json = await res.json()

	return json
}

const apis = {
	getProfile,
	logout,
	getAllPins,
	getUserPins,
	addPin,
	updatePin,
	deletePin,
}

export default apis
