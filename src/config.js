const BASE_URL = process.env.REACT_APP_BASE_URL;

const GET_LIST_API = `${BASE_URL}/rooms`;
const GET_OPTION_API = `${BASE_URL}/rooms/options`;
const GET_DETAIL_API = `${BASE_URL}/rooms/detail`;
const GET_LOGIN_API = `${BASE_URL}/users/kakaologin`;
const GET_RESERVATION_API = `${BASE_URL}/reservation`;
const GET_WISHLIST_API = `${BASE_URL}/wishlist`;
const GET_REVIEW_API = `${BASE_URL}/reviews`;

const POST_RESERVATION_API = `${BASE_URL}/reservation`;

const PUT_WISHLIST_API = `${BASE_URL}/wishlist`;
const PUT_RESERVATION_API = `${BASE_URL}/reservation`;

const DELETE_WISHLIST_API = `${BASE_URL}/wishlist`;
const DELETE_RESERVATION_API = `${BASE_URL}/reservation`;

export {
	BASE_URL,
	GET_LIST_API,
	GET_OPTION_API,
	GET_DETAIL_API,
	GET_LOGIN_API,
	GET_RESERVATION_API,
	GET_WISHLIST_API,
	GET_REVIEW_API,
	POST_RESERVATION_API,
	PUT_WISHLIST_API,
	PUT_RESERVATION_API,
	DELETE_WISHLIST_API,
	DELETE_RESERVATION_API,
};
