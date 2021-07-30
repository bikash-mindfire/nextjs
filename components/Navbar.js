import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                Next Learning
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/lists">Lists</Link>
        </nav>
    )
}

export default Navbar
