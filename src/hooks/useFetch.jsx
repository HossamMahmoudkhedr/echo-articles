import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setData(null);
		setLoading(true);
		setError(null);

		axios
			.get(url, {
				headers: {
					authorization: `Bearer ${Cookies.get('token')}`,
				},
			})
			.then((res) => {
				setLoading(false);
				res.data && setData(res.data);
			})
			.catch((error) => {
				setLoading(false);
				setError(error);
			});
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
