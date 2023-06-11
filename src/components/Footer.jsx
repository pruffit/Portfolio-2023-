import Layout from '@/Layout'
import Link from 'next/link'

const Footer = () => {
 return (
	<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
		<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<span>by Danil Kotlaev</span>
			<Link href='https://t.me/userpruffit' target='_blank'>Say hello</Link>
		</Layout>
	</footer>
 )
}

export default Footer