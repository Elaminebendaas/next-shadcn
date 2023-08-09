
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import svgDashboard from '../Images/dashboard-mockup-dark.svg'
import arrow from '../Images/arrow.svg'

export default function Home() {
  return (
   <>
      <section className="background">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span className="text-xs bg-primary-600 rounded-full px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Check out our paid plans!</span> 
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Invest in tracking your output</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Track your productivity to maximize your output with.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button size={'lg'}  >
                Pricing
              </Button>
              <Button size={'lg'} variant={'secondary'} className='inline-flex items-center justify-center gap-1 pr-5'>
                Get Started
                <svg className="w-5 h-5 ml-2 -mr-1" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Button>  
          </div>
          <div className=' flex justify-center'>
          <Image src={svgDashboard} alt='Dashboard' width={undefined} height={undefined}/>
          </div>
        </div>
      </section>
      <section>
        {/* Do pricing here :) */}
      </section>

    </>
  )
}
