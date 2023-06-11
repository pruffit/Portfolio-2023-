import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import Navigation from '@/components/Navigation'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={`${inter.variable} font-inter bg-light dark:bg-dark w-full h-screen`}>
				<Navigation />
				<Component {...pageProps} />
				{/* <Footer /> */}
			</main>
		</>
	)
}
