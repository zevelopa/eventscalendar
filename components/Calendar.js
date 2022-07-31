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


const Event = ({ children, shortDescription="", classStyle={}, title, anchor=title, week="", date="", startDate="", endDate="", startTime="", endTime="", facebookURL="", discordEvent="", URL="", URLName="", location="", image="", imageAlt="", imageWidth="200", imageHeight="200"}) => {

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
                    <p className='pb-2 pt-1'><strong>Date:</strong> {date}</p>
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

                {location != "" &&
                    <p className='pb-2 pt-1'><strong>Location:</strong> {location}</p>
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

                            {/* {Image !="" &&
                                // <Image src={Image}/> 
                                <Image 
                                    src={Image}
                                    alt={ImageAlt}
                                    width={ImageWidth}
                                    height={ImageHeight}
                                    placeholder="blur"/> 
                            } */}

                            {/* <ShowImage src="/images/hackathon2-modifiedtext.png"></ShowImage> */}

                            <p className="text-gray-700 dark:text-gray-300 py-4">{children}</p>

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
                Current or Upcoming 2022 Events
            </h3>

            <Month>July</Month>
            <Week>Week 1</Week>
            <Event title="CSSA Hackathon" anchor="cssa-hackathon" startDate="30th July" endDate="1st August" startTime="9am" endTime="11:59pm" discordEvent='https://discord.gg/qFBWNtHNa6?event=1000033510557503578' shortDescription='CSSA Hackathon - Code and win prizes' location="CSSA Common Room (CSIT N102)">
                Come along to our <strong>Hackathon</strong> in our common room (CSIT N102) - See more details and the prize list at <strong><a href="https://cssa.club/hackathon" className='hover:font-extrabold' rel="noopener noreferrer" target="_blank">cssa.club/hackathon</a></strong>. You can also see more in our <strong><a href="https://cssa.club/discord" className='hover:font-extrabold' rel="noopener noreferrer" target="_blank">cssa.club/discord</a></strong>.
            
            </Event>

            <Month>August</Month>
            <Week>Week 2</Week>
            <Event title="ESA Skykraft Manufacturing Facility Tour" anchor="skykraft-tour" date="4th of August" startTime="10:30am" endTime="12:00pm" URL='https://forms.gle/tRTESDWJLpjohBbD6' URLName='EOI Form' shortDescription="Come along to see the ins and outs of the design & manufacturing process, and find out about their summer internship opportunities!" location="SkyKraft Constitution Avenue Office">
            Skykraft is an Australian Space Services start-up company that is set to launch Australia&apos;s largest spacecraft with SpaceX in October this year. It seems there may be an opportunity for Engineering and Computer Science students to tour the skyrkaft facility (located on Constitution Avenue - not too far from ANU). They are on the lookout for potential students over the summer willing to do mechanical, electrical or computing internships. Would you be interested in partnering for this
            </Event>

            <Week>Week 3</Week>
            <Event title="ANU Careers Speed Networking" anchor="speed-networking" startDate="9th of August" endDate="11th of August" startTime="1:30pm" endTime="4:00pm" URL='https://careerhub.anu.edu.au/students/events/Detail/282260' URLName='Registration Form' shortDescription="Are you looking for a paid internship, a part-time job, internship or project or would you like to know more about STEM related graduate programs?" location="Birch Building (#35), Innovation Space (Level 2)">
            Are you looking for a paid internship, a part-time job, internship or project or would you like to know more about STEM related graduate programs?
            <br/>
            <br/>
            Please join us for an afternoon of speed networking for jobs with some of the coolest startups, innovative companies and public sector agencies in Canberra.
            <br/>
            <br/>
            If you are a student studying a STEM related degree than this is the event for you! You&apos;re in demand! It doesn&apos;t matter what you are studying, businesses look for the students who are the right  &apos;cultural fit&apos; and have a passion and interest in the organisation.
            <br/>
            <br/>
            Click on the links below to visit the Facebook events
            <br/>
            <br/>
            <strong><a href="https://www.facebook.com/events/465237354941345" className='hover:font-extrabold' rel="noopener noreferrer" target="_blank">Consulting and Industry SPEED Networking Event - 9th of August</a></strong>
            <br/>
            <br/>
            <strong><a href="https://www.facebook.com/events/465237354941345" className='hover:font-extrabold' rel="noopener noreferrer" target="_blank">Government SPEED Networking Event - 10th of August</a></strong>
            <br/>
            <br/>
            <strong><a href="https://www.facebook.com/events/445612494096598" className='hover:font-extrabold' rel="noopener noreferrer" target="_blank">STEM Speed Networking Event - 11th of August</a></strong>

            
            </Event>

            <Week>Week 4</Week>
            <Event title="CSSA x AFEC x CAPSS - Tech in the Asia Pacific Panel Discussion" anchor="deloitte-digital-event" date="17th of August" startTime="5:00pm" endTime="7:00pm" shortDescription="How can different disciplines get into tech event without experience in tech? Come along and find out." location="Birch Building (#35), Innovation Space (Level 2)">
                With the tech industry going exponentially, there is more employment demand and salary in the field is increasing. However, not enough people to fill the demand. 
                <br/>
                <br/>
                There is a common misconception that to have a job in the tech industry, you must have technical skills or a computing degree. Well, this in fact is not true. AFEC, CSSA and CAPSS society present, “Emerging Tech in the Asia Pacific” hosted by Deloitte Digital and joined by Accenture and EY.
                <br/>
                <br/>
                This will be a panel-style event where each guest speaker will introduce their firms and talk about their experiences in the tech industry and how you can get a break into the industry even if you don&apos;t graduate with a STEM degree. This will then break into a Q&A session for the remainder of the hour before ending the panel session, allowing attendees to talk to the panel guests one on one if they are interested in enjoying some light refreshments.

            </Event>

            <Week>Week 5</Week>
            <Event title="CSSA Intro to CTFs" anchor="intro-ctfs" date="TBA" startTime="TBA" shortDescription="Come to a talk by the ASD about CTFs before giving some challenges a try over some food" location="Hanna Neumann Building, Level 5 (CoLab Foyer)">
                Come listen to a guest presentation by the ASD about starting with CTF (Capture the Flag) challenges. You will then have an opportunity to network, talk to others about challenges and try some yourself.
                <br/>
                <br/>
                There will be food and some provided infra (VMs) and other technical support to help you get started. This is also a good introduction to the ANU Cyber Security Major, especially COMP2700, COMP3703 and COMP3704.
            </Event>

            <Month>September</Month>
            <Week>Teaching Break Week 1</Week>
            <Event title="CSSA Intro to Algorithms" anchor="intro-algos" date="5th of September" startTime="5:00pm" endTime="7:00pm" shortDescription="Come along and get introduced to algorithms and get a head start or brush up on the types of questions asked in COMP3600" location="Hanna Neumann Building, Level 1, Seminar Room 1.33">
                Never done much with algorithms or competetive programming? Come and work on a worksheet with others and ask COMP3600 (Algorithms) convener, Hanna Kurniawati, questions about the worksheet or algorithms in general.
                <br/>
                <br/>
                Learn a bit more about time complexities, problem solving and how to approach algorithm style problems.
            </Event>

            <Month>October</Month>
            <Week>Week 10</Week>
            <Event title="Arcitecta Talk" anchor="arcitecta-talk" date="13th of October" startTime="5:00pm" endTime="7:00pm" shortDescription="Come along to a presentation on Arcitecta's vison of data management in preparation for and/or when we reach yottabyte, xenottabyte scales and beyond. Arcitecta also handles petabytes of data for the ANU" location="Birch Building (#35), Innovation Space (Level 2)">
                Come meet Jason Lohrey, our CTO and Founder, who would love to present to the CSSA and ESA cohorts. He will discuss Arcitecta&apos;s vision of data management in preparation for and/or when we reach yottabyte, xenottabyte scales and beyond. 
                <br/>
                <br/>
                Arcitecta works with the ANU to handle data in the petabyte scales which is growing rapidly. Andrew Howard from NCI/ANU would be there to give his insights. With the enthusiasm and big thinking between the two of them, attendees will be on the edge of their seats.
            </Event>
        </div>
    );
}
