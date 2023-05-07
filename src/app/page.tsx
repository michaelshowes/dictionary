'use client';

import Header from '@components/Header/Header';
import Results from '@components/Results/Results';
import Search from '@components/Search/Search';
import { useState } from 'react';
import axios from 'axios';
import NotFound from '@components/NotFound/NotFound';

export default function Home() {
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState(null);

	const searchWord = async (searchValue: string) => {
		try {
			const res = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
			);
			const data = await res.data[0];
			setData(data);
			setError(null);
		} catch (err) {
			if (err) {
				setError(err);
				setData(null);
			}
		}
	};

	const errMsg = error?.response.data;

	return (
		<div>
			<Header />
			<Search searchWord={searchWord} />
			{data ? (
				<Results data={data} />
			) : error ? (
				<NotFound error={errMsg} />
			) : null}
		</div>
	);
}
