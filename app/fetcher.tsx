/*
import {useEffect, useState} from 'react';

// Define the fetcher function
const fetcher = async (url: RequestInfo | URL): Promise<any> => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		throw new Error('Error fetching data');
	}
};

export default function Fetcher() {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Call the fetcher function when the component mounts
		fetcher('https://blog.shikkhaweb.com/wp-json/wp/v2/media/')
			.then((jsonData) => {
				setData(jsonData);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				console.log(error);
			});
	}, []);
}
*/
