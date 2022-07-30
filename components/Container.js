import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {useTheme } from 'next-themes';

const Container = (props) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
  
    useEffect(() => setMounted(true), []);
  
    const { children, ...customMeta } = props;
    const router = useRouter();

    return (
        <div className='bg-white dark:bg-black h-screen bottom-100 clear-both text-black dark:text-white'>
            <main
                id="skip"
                className='flex flex-col justify-center px-8 bg-white dark:bg-black'
            >
                {children}
            </main>
        </div>
    )

}

export default Container