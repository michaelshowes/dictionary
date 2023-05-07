'use client';

import scss from './search.module.scss';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { Searchicon } from '@assets/svg/Searchicon';

type SearchProps = {
	searchWord: (searchValue: string) => void;
};

export default function Search({ searchWord }: SearchProps) {
	const [searchValue, setSearchValue] = useState('');
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme } = useTheme();
	const [isRequired, setIsRequired] = useState(false);
	const darkMode =
		(systemTheme === 'dark' && theme === 'system') || theme === 'dark';

	const handleChange = (value: string) => {
		setSearchValue(value);
		setIsRequired(true);
	};

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchWord(searchValue);
			}}
			className={cx([scss.search], {
				[scss.dark]: darkMode
			})}
		>
			<div>
				<input
					type='search'
					placeholder='Search for any word...'
					required={isRequired}
					onChange={(e) => handleChange(e.target.value)}
				/>
				<button>
					<Searchicon />
				</button>
			</div>
			<span>Please enter a search term...</span>
		</form>
	);
}
