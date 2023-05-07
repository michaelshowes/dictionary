'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import scss from './themeToggleSwitch.module.scss';
import cx from 'classnames';
import { MoonIcon } from '@assets/svg/MoonIcon';

export default function ThemeToggleSwitch() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const darkMode =
		(systemTheme === 'dark' && theme === 'system') || theme === 'dark';

	const handleChange = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div
			className={cx([scss.themeToggleSwitch], {
				[scss.dark]: darkMode
			})}
		>
			<label>
				<input
					type='checkbox'
					checked={darkMode}
					onChange={handleChange}
				/>
				<span></span>
			</label>
			<MoonIcon />
		</div>
	);
}
