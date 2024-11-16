import 'normalize.css'
import './styles.css'

export const metadata = {
	title: 'Pet Escort',
	description: 'Rent a pet suited to your needs',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
