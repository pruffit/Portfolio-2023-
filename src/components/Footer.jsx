import Layout from '@/Layout'
import Link from 'next/link'
import { Copyright } from './Icons'

const Footer = () => {
 return (
	<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
		<Layout className='py-2 flex items-center justify-between lg:flex-col'>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<div className='flex items-center justify-center'>
				<Copyright className='fill-dark w-4 h-4 dark:fill-light' />
				<span className='whitespace-nowrap'>&nbsp;by Danil Kotlaev</span>
			</div>
			<Link href='https://t.me/userpruffit' target='_blank'>Say hello</Link>
		</Layout>
	</footer>
 )
}

export default Footer