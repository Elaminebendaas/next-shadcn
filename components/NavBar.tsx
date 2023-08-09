import { ModeToggle } from '@/components/ModeToggle'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function NavBar() {
    return(
        <nav className="background border-b p-4">
            <div className='flex flex-wrap items-center justify-between'>
                <Link href="/" className="flex items-center">
                    <Image src="https://flowbite.com/docs/images/logo.svg" width={'30'} height={'30'} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl whitespace-nowrap ">OutputRepo</span>
                </Link>
                <div className='flex flex-wrap items-center gap-4'>
                    <Link href={'/signup'}>
                        <Button>Sign up</Button>
                    </Link>
                    <Link href={'/signin'}>
                        <Button variant={"secondary"}>Sign in</Button>
                    </Link>

                    <ModeToggle/>
                </div>
            </div>
        </nav>
    )
} 