import { useState } from 'react';
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import kebabCase from "../lib/utils/kebabCase";
import Image from 'next/image';
import ShowImage from './ShowImage';

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


const Event = ({ children, shortDescription="", classStyle={}, title, anchor=title, week="", date="", startDate="", endDate="", startTime="", endTime="", facebookURL="", discordEvent="", URL="", URLName="", Image="", ImageAlt="", ImageWidth="200", ImageHeight="200"}) => {

    const [isShowingMore, showMore] = useState(false);

    let eventAnchor = kebabCase(anchor)
    const link = `#${eventAnchor}`

    return (
    
        <div className='p-4'>
            <div className="bg-gray-800 rounded-md p-6">
                <div>
                    <div className='flex gap-2 text-black dark:text-white pb-4'>
                        <h2 id={eventAnchor}>
                            <a href={link} >
                                <p className="hover:font-extrabold font-medium text-2xl">{title}</p>
                                
                            </a>
                        </h2>
                    </div>
                </div>

                {week != "" &&
                    <p className='pb-2 pt-1'><strong>Week:</strong> {week}</p>
                }

                {date != "" &&
                    <p className='pb-2 pt-1'><strong>Date:</strong>Date: {date}</p>
                }

                {startDate != "" && endDate != "" && 
                    <p className='pb-2 pt-1'><strong>Dates:</strong> {startDate} to the {endDate}</p>
                }

                {startTime != "" &&
                    <p className='pb-2 pt-1'><strong>Start Time:</strong> {startTime}</p>
                }
                
                {endTime != "" &&
                    <p className='pb-2 pt-1'><strong>Finish Time:</strong> {endTime}</p>
                }

                {shortDescription != "" && !isShowingMore &&
                    <p className="text-gray-700 dark:text-gray-300 py-4">{shortDescription}</p>
                }

                {isShowingMore ? (
                        <div>

                            {facebookURL != "" &&
                                <div className='flex'>
                                    <p className='pb-2 pt-1'><strong>Facebook URL:</strong></p> 
                                    <p className='pt-1 ml-2 hover:underline'>
                                        <a href={facebookURL} className="break-all">
                                            {facebookURL}
                                        </a>
                                    </p>
                                </div>
                            }

                            {discordEvent != "" &&
                                <div className='flex'>
                                    <p className='pb-2 pt-1'><strong>Discord Event:</strong></p> 
                                    <p className='pt-1 ml-2 hover:underline'>
                                        <a href={discordEvent} className="break-all">
                                            {discordEvent}
                                        </a>
                                    </p>
                                </div>
                            }

                            {URL != "" && URLName != "" &&
                                <div className='flex'>
                                    <p className='pb-2 pt-1'><strong>{URLName} url:</strong></p> 
                                    <p className='pt-1 ml-2 hover:underline'>
                                        <a href={URL} className="break-all">
                                        {URL}
                                        </a>
                                    </p>
                                </div>
                            }

                            {Image !="" &&
                                // <Image src={Image}/> 
                                <Image 
                                    src={Image}
                                    alt={ImageAlt}
                                    width={ImageWidth}
                                    height={ImageHeight}
                                    placeholder="blur"/> 
                            }

                            <ShowImage src="/images/hackathon2-modifiedtext.png"></ShowImage>

                            {/* <p className="text-gray-700 dark:text-gray-300 py-4">{children}</p> */}

                            <button
                            type="button"
                            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-bold text-gray-900 dark:text-gray-100"
                            onClick={() => showMore(false)}
                            >
                            Hide More
                            <IoMdArrowRoundUp/>
                            </button>
                        </div>
                    ) : (
                        <button
                        type="button"
                        className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-bold  text-gray-900 dark:text-gray-100"
                        onClick={() => showMore(true)}
                        >
                        See More
                        <IoMdArrowRoundDown/>
                        </button>
                    )
                }
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
    

    return (
        <div className='container mx-auto'>
            <h3 className="font-bold text-4xl md:text-4xl mb-4 mt-8 text-black dark:text-white pb-5">
                Upcoming 2022 Events
            </h3>

            <Month>July</Month>
            <Week>Week 1</Week>
            <Event title="CSSA Hackathon" anchor="cssa-hackathon" startDate="30th" endDate="1st" startTime="9am" endTime="11:59pm" discordEvent='https://discord.gg/qFBWNtHNa6?event=1000033510557503578' shortDescription='Tejkfsdj;fsj;fsdj;kfsdk;jst' image="/images/hackathon2-modifiedtext.png">
                event description here event description here event description here event description here event description here event description event description hereevent description herehere
            
            </Event>

            <Week>Week 2</Week>
            <Event title="ESA Skykraft Manufacturing Facility Tour" anchor="skykraft-tour" startDate="30th" endDate="1st" startTime="9am" endTime="11:59pm" facebookURL='https://www.facebook.com/208875825871192/posts/pfbid0dpGMQ5Tmctpyc4shxkc9vh1P51Xah8Tc6aL2PvMmFYoh1SfHkbU3JmY3DWYtfWyrl/'>
                event description here
            
            </Event>


            <Month anchor={"august"}>August</Month>


        </div>
    );
}
