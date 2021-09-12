import * as React from 'react';
import profilePic from '../assets/profile_pic.jpg'
interface props {
    id: string
}

export const Intro = ({ id }: props): React.ReactElement => {
    return (
        <section className="text-gray-600 body-font -mt-16" id={id}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi! I am Jeremy!
                    </h1>
                    <p className="mb-8 leading-relaxed">My love for software started when I saw how it touches our lives everyday. 
                    <br/>Now, I want to write code to build great software products!</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        <a href = "mailto:jeremy.thngwk@outlook.com">
                            Email me!
                        </a>
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            <a href="https://www.github.com/thngkia" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={profilePic} />
                </div>
            </div>
        </section>
    )
}