import React from 'react'
import './Resume.css'

export default function Services() {
    return (
        <> 
        <div>
        <h1 class="leading-tight text-4xl md:text-5xl my-8 font-bold text-black dark:text-white" id="experience">Experience</h1>
        <div class="flex justify-center"><a href="https://drive.google.com/file/d/1NcqwXuQOf8x4Jwj6xCTItU1b6ZT0Fwis/view?usp=sharing">Download full resume here</a></div>
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <h1 class="mx-3 text-4xl font-bold">Work</h1>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
            
        </div>

        <div class="flex justify-center items-center my-10 px-8">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">HoFBets</h2>
                <div class="mt-2 text-xl font-bold">Software Engineer · Boston, Massachusetts (Remote)</div>
                <div class="pt-3">
                    <ul class="list-inside list-disc">
                        <li class="nested-list">Implemented custom features in React making data pipelines with Python and MongoDB</li>
                        <li class="nested-list">Developed custom table library across entire platform</li>
                        <li class="nested-list">Implemented flexible game filtration feature requested by users</li>
                    </ul>
                </div>
            </div>
            <div className="img-container"><img src="images/HoF.png" width="64" height="auto"/></div>
        </div>

        <div class="flex justify-center items-center my-10 px-8">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">ImageTrend</h2>
                <div class="mt-2 text-xl font-bold">Software Engineer · Minneapolis, Minnesota</div>
                <div class="pt-3">
                    <ul class="list-inside list-disc">
                        <li class="nested-list">Developed Slate, a proprietary standalone operations management solution targeted for EMS, Firefighters, and
                            Police emergency services using TypeScript (React), C# (.NET), and SQL.</li>
                        <li class="nested-list">Implemented custom notification system for supervisors and users that allows for real-time and specific SMS,
                            Email, and Mobile notifications related to shift scheduling, shift bids, and and other related announcements.</li>
                    </ul>
                </div>
            </div>
            <div className="img-container"><img src="images/ImageTrend.png" width="64" height="auto" /></div>
        </div>

        <div class="flex justify-center items-center my-10 px-10">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">Meta</h2>
                <div class="mt-2 text-xl font-bold">Software Engineer Intern · Menlo Park, California</div>
                <div class="pt-3">
                    <ul class="list-inside list-disc">
                        <li class="nested-list">Worked on WhatsApp Message Storage and Delivery Team.</li>
                        <li class="nested-list">Added witness replica functionality to existing RAFT implementation using Erlang/OTP.</li>
                        <li class="nested-list">Gave a company-wide Tech Talk that presented project and key metrics to senior leadership.</li>
                    </ul>
                </div>
            </div>
            <div className="img-container"><img src="images/Meta.png" width="64" height="auto" /></div>
        </div>

        <div class="flex justify-center items-center my-10 px-8">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">Minnesota Elevator Inc</h2>
                <div class="mt-2 text-xl font-bold">Software Engineer Intern · Mankato, MN</div>
                <div class="pt-3">
                    <ul class="list-inside list-disc">
                        <li class="nested-list">Developed fully custom elevator monitoring system using LAMP stack</li>
                        <li class="nested-list">Migrated 3 MS Access Databases of customer information and developed a frontend application to query SQL database</li>
                        <li class="nested-list">Developed elevator controller board testing software in C#</li>
                    </ul>
                </div>
            </div>
            <div className="img-container"><img src="images/MEI.png" width="64" height="auto" /></div>
        </div>

        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <h1 class="mx-3 text-4xl font-bold">Projects</h1>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-10 px-10">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">GPT-3 Explain It Like I'm 5</h2>
                <div class="pt-3">
                    Search engine using GPT-3 API that allows users to receive instant tailor specified explanations
                    on any subject imaginable.  Can vary the complexity of the explanation (Explain it like I'm 5) up 
                    to expert level in the field.  Can also output responses in 6 different languages.  
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-10 px-10">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">Velocity! Athlete Cognitive Training Mobile App</h2>
                <div class="pt-3">
                    Implemented cross-platform mobile app’s custom game library
                    using NodeJS, Vue, TypeScript, and React Native.
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-10 px-10">
            <div className="work-div">
                <h2 class="text-3xl text-primary-500 font-bold">Semi Autonomous Duck Decoy</h2>
                <div class="pt-3">
                    Developed a client-facing web application that allows for fully customizable remote control of a duck decoy’s path. 
                    Designed and implemented real time navigation and tracking algorithm.
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <h1 class="mx-3 text-4xl font-bold">Awards</h1>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center px-10 my-10">
            <div>
                <h3 class="mt-2 text-xl font-bold">Meta Legendary Presenter Award</h3>
            </div>
        </div>
        <div class="flex justify-center items-center px-10 my-10">
            <div>
                <h3 class="mt-2 text-xl font-bold">2nd place - Minnesota State Senior Design Competition</h3>
            </div>
        </div>
        <div class="flex justify-center items-center px-10 my-10">
            <div>
                <h3 class="mt-2 text-xl font-bold">1st place - Minnesota State Junior Design Competition</h3>
            </div>
        </div>
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-grow" role="separator">
                <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                    </div>
                    </div>
                    <div class="flex flex-grow" role="separator">
                    <div class="dark:gray-200 my-auto h-0.5 flex-grow bg-gray-500">
                </div>
            </div>
        </div>
            <div class="flex justify-center mb-20"><a href="https://drive.google.com/file/d/1NcqwXuQOf8x4Jwj6xCTItU1b6ZT0Fwis/view?usp=sharing">Download full resume here</a></div>
        </div>
        </>
    )
}