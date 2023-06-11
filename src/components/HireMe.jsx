import Link from 'next/link'
import { CircularText } from './Icons'

const HireMe = () => {
 	return (
 		<div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-0 md:left-auto md:top-0 md:bottom-auto'>
			<div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
				<CircularText className='fill-dark animate-spin-slow dark:fill-light' />
				<Link href='mailto:kotlaevdanil@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark text-light shadow-md border-4 border-solid border-dark w-[100px] h-[100px] rounded-full text-xl font-semibold hover:bg-light hover:text-dark transition-colors ease dark:fill-light dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light md:w-[50px] md:h-[50px] md:text-[10px]'>Hire Me</Link>
			</div>
		</div>
 	)
}

export default HireMe