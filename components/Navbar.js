import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" width={200} height={40} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/lists">Lists</Link>
        </nav>
    )
}

export default Navbar
