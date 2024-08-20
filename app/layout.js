import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Best College to Study From',
	description: 'College filters app',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={inter.className}>
			<body>{children}</body>
		</html>
	);
}
