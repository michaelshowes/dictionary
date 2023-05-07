import Providers from '@/components/Providers/Providers';
import { Inter, Inconsolata, Lora } from 'next/font/google';
import '@styles/main.scss';
import Container from '@layout/Container/Container';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--inter-font'
});
const inconsolata = Inconsolata({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--inconsolata-font'
});
const lora = Lora({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--lora-font'
});

export const metadata = {
	title: 'Dictionary',
	description: 'Dictionary created in Next.js 13.4'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`}
			>
				<Container>
					<Providers>{children}</Providers>
				</Container>
			</body>
		</html>
	);
}
