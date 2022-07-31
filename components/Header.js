import Nav from "../components/Nav"

const Header = () => {
    return (
        <div className="mx-auto">
            <div className="pt-10 flex flex-col max-w-2xl mx-auto">
                <h1 className="font-bold content-center text-3xl md:text-5xl mb-1 text-black dark:text-white">
                CSSA Events Calendar
                </h1>

                <h2 className="text-gray-700 dark:text-gray-200 mb-4 text-xl">
                Events calendar for upcoming CSSA events and details.
                </h2>

            </div>
            <Nav/>
        </div>
    )
}

export default Header