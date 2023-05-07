'use client';

import Header from '@components/Header/Header';
import Results from '@components/Results/Results';
import Search from '@components/Search/Search';
import fetch from '@lib/fetch';
import { useState } from 'react';

export default function Home() {
	const [results, setResults] = useState(false);
	const [data, setData] = useState([]);

	const searchWord = async (searchValue: string) => {
		const data = await fetch(searchValue);

		data
			? (setData(data), setResults(true), console.log(data))
			: setResults(false);
	};

	return (
		<div>
			<Header />
			<Search searchWord={searchWord} />
			{/* @ts-ignore */}
			{results && <Results data={data} />}
		</div>
	);
}
