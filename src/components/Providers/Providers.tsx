'use client';

import { ThemeProvider } from 'next-themes';
// import { createContext } from 'react';

// export const FontContext = createContext({});

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			themes={['light', 'dark']}
			defaultTheme='system'
		>
			{children}
		</ThemeProvider>
	);
}
