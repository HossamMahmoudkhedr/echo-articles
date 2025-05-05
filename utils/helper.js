import axios from 'axios';
import Cookies from 'js-cookie';

export async function fetchData(endpoint, method = 'get', data = undefined) {
	const response = await axios[method](
		`http://localhost:3000/api${endpoint}`,
		data
	);
	return response;
}

export async function useAuth(endpoint, method = 'get', data = undefined) {
	const config = {
		headers: {
			authorization: `Bearer ${Cookies.get('token')}`,
		},
	};

	const url = `http://localhost:3000/api${endpoint}`;

	if (['get', 'delete'].includes(method.toLowerCase())) {
		return axios[method](url, config);
	} else {
		return axios[method](url, data, config);
	}
}
export function formatDate(date) {
	let arr = date?.split(' ');
	let newDate = '';
	if (arr) {
		newDate = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`;
	}
	return newDate;
}
