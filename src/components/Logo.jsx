import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
 return <div className='flex items-center justify-center mt-2 lg:mt-0'>
		<MotionLink href='/' className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:bg-light dark:text-dark' whileHover={{scale: 1.1}}>Dk</MotionLink>
	</div>
}

export default Logo