import axios from 'axios';

export async function fetchData(endpoint, method = 'get', data = undefined) {
	const response = await axios[method](
		`http://localhost:3000${endpoint}`,
		data
	);
	return response;
}

export function formatDate(date) {
	let arr = date?.split(' ');
	let newDate = '';
	if (arr) {
		newDate = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`;
	}
	return newDate;
}
