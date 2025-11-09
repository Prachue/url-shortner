import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between items-center text-white'>
            <Link href="/" className='logo px-3 font-bold text-2xl'>
                BitLinks</Link>

            <ul className='flex gap-4 justify-center items-center'>
                <Link href="/" className='hover:underline hover:font-bold cursor-pointer'>Home</Link>
                <Link href="/about" className='hover:underline hover:font-bold cursor-pointer'>About</Link>
                <Link href="/shorten" className='hover:underline hover:font-bold cursor-pointer'>Shorten</Link>
                <Link href="/contact" className='hover:underline hover:font-bold cursor-pointer'>Contact Us</Link>

                <li className='flex gap-2 items-center'>
                    <Link href="/generate" className='bg-purple-500 shadow-lg rounded-xl p-2'><button className='cursor-pointer font-bold '>Trynow</button></Link>
                    <Link href="/github" className='bg-purple-500 shadow-lg rounded-xl p-2'><button className='cursor-pointer font-bold'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar