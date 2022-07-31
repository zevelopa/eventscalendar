import { useState } from 'react';
import { BsFillCalendar2EventFill } from "react-icons/bs";
import kebabCase from "../lib/utils/kebabCase";

const Divider = () => {
    return (
        <div className="border border-gray-200 dark:border-gray-800 w-full my-8" />
    );
};

const Month = ({ children }) => {
    const anchor = kebabCase(children)
    const link = `#${anchor}`
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
    
        <div className='p-4'>
            <div className="bg-gray-800 rounded-md p-6">
                <div>
                    <div className='flex gap-2 text-black dark:text-white font-medium'>
                        <BsFillCalendar2EventFill className='mr-2'/>
                        <h2 id={eventAnchor} className="font-bold hover:font-extrabold">
                            <a href={link}>
                                {title}
                            </a>
                        </h2>
                    </div>
                </div>

                {week != "" &&
                    <p className='ml-8 pb-2 pt-1'><strong>Week:</strong> {week}</p>
                }

                {date != "" &&
                    <p className='ml-8 pb-2 pt-1'><strong>Date:</strong>Date: {date}</p>
                }

                {startDate != "" && endDate != "" && 
                    <p className='ml-8 pb-2 pt-1'><strong>Dates:</strong> {startDate} to the {endDate}</p>
                }

                {startTime != "" &&
                    <p className='ml-8 pb-2 pt-1'><strong>Start Time:</strong> {startTime}</p>
                }
                
                {endTime != "" &&
                    <p className='ml-8 pb-2 pt-1'><strong>Finish Time:</strong> {endTime}</p>
                }

                {facebookURL != "" &&
                    <div className='flex'>
                        <p className='ml-8 pb-2 pt-1'><strong>Facebook URL:</strong></p> 
                        <p className='pt-1 ml-2 hover:underline'>
                            <a href={facebookURL}>
                                {facebookURL}
                            </a>
                        </p>
                    </div>
                }

                {discordEvent != "" &&
                    <div className='flex'>
                        <p className='ml-8 pb-2 pt-1'><strong>Discord Event:</strong></p> 
                        <p className='pt-1 ml-2 hover:underline'>
                            <a href={discordEvent}>
                                {discordEvent}
                            </a>
                        </p>
                    </div>
                }

                {URL != "" && URLName != "" &&
                    <div className='flex'>
                        <p className='ml-8 pb-2 pt-1'><strong>{URLName} url:</strong></p> 
                        <p className='pt-1 ml-2 hover:underline'>
                            <a href={URL}>
                            {URL}
                            </a>
                        </p>
                    </div>
                }

                <p className="text-gray-700 dark:text-gray-300 ml-8 pt-4">{children}</p>
            </div>
        </div>
    
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
            <Event title="CSSA Hackathon" anchor="cssa-hackathon" startDate="30th" endDate="1st" startTime="9am" endTime="11:59pm" discordEvent='https://discord.gg/qFBWNtHNa6?event=1000033510557503578'>
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
