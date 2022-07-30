import { useState } from 'react';
import { BsFillCalendar2EventFill } from "react-icons/bs";

const Divider = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-800 w-full my-8" />
    );
};

const Year = ({ children, anchor }) => {
    return (
        <h3 id={anchor} className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
        {children}
        </h3>
    );
};

const Month = ({ children, anchor }) => {
    return (
        <h3 id={anchor} className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
        {children}
        </h3>
    );
};

const Event = (props) => {
    return (
        <li className="mb-6 ml-2">
        <div className={props.classStyle}>
            <span className="sr-only">Check</span>
            <BsFillCalendar2EventFill className='mr-2'/>
            <div className='flex gap-2 text-black dark:text-white font-medium'>
                <h2 id={props.anchor}>
                    {props.title}
                </h2>
            </div>
        </div>
        <p className='ml-6 pb-2 pt-1'>{props.month}</p>
        <p className="text-gray-700 dark:text-gray-300 ml-6">{props.children}</p>
        </li>
    );
};

const FullTimeline = () => (
    <>
        <Divider />
        
    </>
);

export default function Timeline() {
    const [isShowingFullTimeline, showFullTimeline] = useState(false);

    return (
        <>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Upcoming Events
        </h3>
        <Year anchor={2022}>2022</Year>
        
        {isShowingFullTimeline ? (
            <FullTimeline />
        ) : (
            <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-bold text-gray-900 dark:text-gray-100"
            onClick={() => showFullTimeline(true)}
            >
            See More
            <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </button>
        )}
        </>
    );
}
