//actions/index.js
const STORE_SEARCH = "STORE_SEARCH";
const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const storeSearch = (search) => ({
	type: STORE_SEARCH,
	payload: search,
});
export const storeFavourite = (data) => ({
	type: ADD_TO_FAVOURITE,
	payload: data,
});
export const removePreferite = (data) => ({
	type: REMOVE_FROM_FAVOURITE,
	payload: data,
});
