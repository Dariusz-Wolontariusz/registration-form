import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Registration Form',
	description: 'Modern multistep registration form.',
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
