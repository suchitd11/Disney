/* eslint-disable @next/next/no-img-element */
import React from 'react' 
import Image from 'next/image'
import { 
    SearchIcon, 
    HomeIcon,
    PlusIcon,
    StarIcon
} from "@heroicons/react/solid"
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';

function Header() {
    const [session] = useSession();
    const router = useRouter();

  return (
    <header className='sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px] '>
    <Image className='cursor-pointer' src="/images/logo.svg" width={80} height={80} onClick={() => router.push('/')} alt="logo"/>

    {session && (

    <div className='hidden ml-10 md:flex items-center space-x-6'>
    <a className='header-link group'>
            <HomeIcon className='h-4'/>
            <span onClick={() => router.push('/')} className='span'>Home</span>
        </a>
        <a className='header-link group'>
            <SearchIcon className='h-4'/>
            <span onClick={() => router.push('/search')} className='span'>Search</span>
        </a>
        <a className='header-link group'>
            <PlusIcon className='h-4'/>
            <span className='span'>Watchlist</span>
        </a>
        <a className='header-link group'>
            <StarIcon className='h-4'/>
            <span className='span'>Originals</span>
        </a>
        <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
        </a>
        <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
        </a>
    </div>
    )}
    {!session ? (

    <button className='ml-auto uppercase border px-4 rounded py-1.5 tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={signIn}>
        Login
    </button>
    ):(
        <img className='ml-auto h-12 w-12 rounded-full object-cover  cursor-pointer' src={session.user.image} onClick={signOut} alt="profile"/>
    )}
    </header>
  )
}

export default Header;

