'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
	key: string,
	initialValue?: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [state, setState] = useState<T>(() => {
		if (!initialValue) return;

		try {
			let value;
			if (typeof window !== 'undefined') {
				value = localStorage.getItem(key);
			}
			return value ? JSON.parse(value) : initialValue;
		} catch (err) {
			console.log(err);
			return initialValue;
		}
	});

	useEffect(() => {
		if (state) {
			try {
				if (typeof window !== 'undefined') {
					localStorage.setItem(key, JSON.stringify(state));
				}
			} catch (err) {
				console.log(err);
			}
		}
	}, [state, key]);

	return [state, setState];
}
