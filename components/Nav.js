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
        <div className="pt-10 flex flex-col max-w-2xl mx-auto pb-16">
            <h1 className="font-bold content-center text-3xl md:text-5xl mb-1 text-black dark:text-white">
            CSSA Events Calendar
            </h1>

            <h2 className="text-gray-700 dark:text-gray-200 mb-4 text-xl">
            Events calendar for upcoming CSSA events and details.
            </h2>

            <div className="flex mx-auto columns-3">
                <p className="p-4">test</p>
                <p className="p-4">test</p>
                <p className="p-4">test</p>
            </div>
        </div>
    )
}

export default Nav