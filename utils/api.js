export async function getAllPins() {
	const res = await fetch("http://pins.nodeapp.iadw.in/api/pin/all")
	const json = await res.json()

	return json
}

export async function getProfile() {
	const res = await fetch("http://pins.nodeapp.iadw.in/api/auth/profile")
	const json = await res.json()

	return json
}