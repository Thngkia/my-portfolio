import React from 'react';

export const TopNavBar = (): React.ReactElement => {
    return (
        <header className="sticky top-0 z-50 text-gray-600 body-font bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Jeremy Thng</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900" href="#about">About</a>
                    <a className="mr-5 hover:text-gray-900" href="#experience">Experience</a>
                    <a className="mr-5 hover:text-gray-900" href="#skills">Skills</a>
                    <a className="mr-5 hover:text-gray-900" href="#projects">Projects</a>
                    <a className="mr-5 hover:text-gray-900" href="#contact">Contact</a>
                </nav>
            </div>
        </header>

    );
}

export default TopNavBar;