'use client';

import { Logo } from '@assets/svg/Logo';
import scss from './header.module.scss';
import FontDropdown from '@components/FontDropdown/FontDropdown';
import ThemeToggleSwitch from '@components/ThemeToggleSwitch/ThemeToggleSwitch';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={scss.header}>
			<Link href={'/'}>
				<Logo />
			</Link>
			<FontDropdown />
			<div className={scss.divider}></div>
			<ThemeToggleSwitch />
		</header>
	);
}
