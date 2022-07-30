import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { RiHome4Fill } from "react-icons/ri";

function NavItem({ href, text, icon }) {
    const router = useRouter();
    const isActive = router.asPath === href;
    
    return (
        <NextLink href={href}>
            <a
            className={cn(
                isActive
                ? 'font-semibold hover:font-extrabold text-gray-800 dark:text-gray-200'
                : 'font-normal hover:font-extrabold text-gray-800 dark:text-gray-200',
                'hidden md:inline-block sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
            )}
            >
            <div className='flex'>
                <span className="capsize flex justify-center">{text}</span>
                <div className='flex pl-2 pt-1'>
                {icon}
                </div>
            </div>
            
            </a>
        </NextLink>
    );
}

const Nav = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-auto pb-6">
            <div className="flex mx-auto columns-3">
                <NavItem href="/" text="Home" icon={<RiHome4Fill/> } ></NavItem>
                <NavItem href="/" text="List View" icon={<RiHome4Fill/> } />
                <NavItem href="/" text="Calendar View" icon={<RiHome4Fill/> } />
            </div>
        </div>
    )
}

export default Nav