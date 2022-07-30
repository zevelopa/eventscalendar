import { useState } from 'react';
import { BsFillCalendar2EventFill } from "react-icons/bs";
import kebabCase from "../lib/utils/kebabCase";

function getAnchor(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-')
        .slice(13)
}

const Divider = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-800 w-full my-8" />
    );
};

const Month = ({ children }) => {
    const anchor = kebabCase(children)
    const link = `#${anchor}`
    console.log(typeof(kebabCase(children)))
    return (
        <h3 id={anchor} className="text-3xl font-bold my-4 text-gray-900 dark:text-gray-100 hover:underline hover:font-extrabold">
            <a href={link}>
                {children}
            </a>
        </h3>
    );
};

const Week = ({ children }) => {
    const anchor = kebabCase(children)
    const link = `#${anchor}`
    console.log(typeof(kebabCase(children)))
    return (
        <h3 id={anchor} className="text-2xl font-bold my-4 text-gray-900 dark:text-gray-100 hover:underline hover:font-extrabold">
            <a href={link}>
                {children}
            </a>
        </h3>
    );
};

const Event = ({ children, classStyle={}, title, anchor=title, week="", date="", startDate="", endDate="", startTime="", endTime="", facebookURL="", discordEvent="", URL="", URLName=""}) => {

    let eventAnchor = kebabCase(anchor)
    const link = `#${eventAnchor}`
    console.log("eventAnchor: " + {eventAnchor})



    return (
        <a href={link}>
            <div className='p-4'>
                <div className="bg-gray-800 rounded-md p-6">
                    <div>
                        <div className='flex gap-2 text-black dark:text-white font-medium'>
                            <BsFillCalendar2EventFill className='mr-2'/>
                            <h2 id={eventAnchor} className="font-bold hover:font-extrabold"> 
                                {title}
                            </h2>
                        </div>
                    </div>

                    {week != "" &&
                        <p className='ml-8 pb-2 pt-1'>Week: {week}</p>
                    }

                    {date != "" &&
                        <p className='ml-8 pb-2 pt-1'>Date: {date}</p>
                    }

                    {startDate != "" && endDate != "" && 
                        <p className='ml-8 pb-2 pt-1'>{startDate} to the {endDate}</p>
                    }

                    {startTime != "" &&
                        <p className='ml-8 pb-2 pt-1'>Start Time: {startTime}</p>
                    }
                    
                    {endTime != "" &&
                        <p className='ml-8 pb-2 pt-1'>Finish Time: {endTime}</p>
                    }

                    {facebookURL != "" &&
                        <p className='ml-8 pb-2 pt-1'>Facebook URL: {facebookURL}</p>
                    }

                    {discordEvent != "" &&
                        <p className='ml-8 pb-2 pt-1'>Discord Event: {discordEvent}</p>
                    }

                    {URL != "" && URLName != "" &&
                        <p className='ml-8 pb-2 pt-1'>{URLName} url: {URL}</p>
                    }

                    <p className="text-gray-700 dark:text-gray-300 ml-8 pt-4">{children}</p>
                </div>
            </div>
        </a>
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
        <div className='container mx-auto'>
            <h3 className="font-bold text-4xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white pb-5">
                Upcoming 2022 Events
            </h3>

            <Month>July</Month>
            <Week>Week 1</Week>
            <Event title="CSSA Hackathon" anchor="cssa-hackathon" startDate="30th" endDate="1st" startTime="9am" endTime="11:59pm">
                event description here
            
            </Event>

            <Week>Week 2</Week>
            <Event title="ESA Skykraft Manufacturing Facility Tour" anchor="skykraft-tour" startDate="30th" endDate="1st" startTime="9am" endTime="11:59pm">
                event description here
            
            </Event>


            <Month anchor={"august"}>August</Month>

            {/* {isShowingFullTimeline ? (
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
            )} */}
        </div>
    );
}
