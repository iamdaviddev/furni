'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
]

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className='flex items-center gap-10 text-[#7D9D90]'>
      {links.map((link, index) =>(
        <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#F8C11E] border-b-2 border-[#F8C11E]"} font-semibold hover:text-[#F8C11E] transition-all delay-100`}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

