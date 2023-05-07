import axios from 'axios';

export default async function fetch(query: string) {
	const res = await axios.get(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
	);
	const data = await res.data[0];

	return data;
}
