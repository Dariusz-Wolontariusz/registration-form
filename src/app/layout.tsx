import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Pet Escort',
	description: 'Rent a pet suited to your needs',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
