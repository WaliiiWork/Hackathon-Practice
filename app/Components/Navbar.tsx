import Image from 'next/image'
import Link from 'next/link'
import { Search, User, ShoppingBag } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex justify-center items-center flex-col w-full'>
            <div className='flex w-[90%] justify-between items-center'>
                <Image alt='Our logo' height={33} width={133} className='mx-auto' src="/Images/Logo.png" />
                <div className='flex items-center my-5 gap-6'>
                    <Link href="/"><Search strokeWidth={1} size={25} /></Link>
                    <Link href="/"><User strokeWidth={1} size={25} /></Link>
                    <Link href="/"><ShoppingBag strokeWidth={1} size={25} /></Link>
                </div>
            </div>
            <div className='w-[90%] flex justify-center items-center gap-7 font-medium text-xs py-4'>
                <Link
                    className='hover:bg-black hover:text-white transition-all py-2 px-4 rounded-full bg-beige' href="/">Holiday</Link>

                <Link className='hover:underline transition-all' href="/">Sale</Link>
                <Link className='hover:underline transition-all' href="/">New Arrivals</Link>
                <Link className='hover:underline transition-all' href="/">Wall Art</Link>
                <Link className='hover:underline transition-all' href="/">Home & Living</Link>
                <Link className='hover:underline transition-all' href="/">Clothing & Accessories</Link>
                <Link className='hover:underline transition-all' href="/">Shop By Artist</Link>
                <Link className='hover:underline transition-all' href="/">Inspiration</Link>
            </div>
        </nav>
    )
}










export default Navbar