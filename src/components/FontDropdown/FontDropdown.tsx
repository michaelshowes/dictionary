'use client';

import { useEffect, useState } from 'react';
import scss from './fontDropdown.module.scss';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useTheme } from 'next-themes';
import cx from 'classnames';
import { ArrowDownIcon } from '@assets/svg/ArrowDownIcon';

export default function FontDropdown() {
	const [mounted, setMounted] = useState(false);
	const [font, setFont] = useLocalStorage('font', {
		label: 'Sans Serif',
		value: 'sans'
	});
	const [isActive, setIsActive] = useState(false);
	const { systemTheme, theme } = useTheme();
	const darkMode =
		(systemTheme === 'dark' && theme === 'system') || theme === 'dark';

	const options = [
		{
			label: 'Sans Serif',
			value: 'sans'
		},
		{
			label: 'Serif',
			value: 'serif'
		},
		{
			label: 'Mono',
			value: 'mono'
		}
	];

	useEffect(() => {
		document.documentElement.setAttribute('data-font', font.value);
		setMounted(true);
	}, [font]);

	if (!mounted) return null;

	return (
		<div
			className={cx([scss.fontDropdown], {
				[scss.dark]: darkMode,
				[scss.active]: isActive
			})}
		>
			<div onClick={() => setIsActive(!isActive)}>
				<span>{font.label}</span>
				<ArrowDownIcon />
			</div>
			{isActive && (
				<ul>
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => {
								setFont(option);
								setIsActive(false);
							}}
							className={cx({
								[scss.sans]: option.value === 'sans',
								[scss.serif]: option.value === 'serif',
								[scss.mono]: option.value === 'mono'
							})}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
