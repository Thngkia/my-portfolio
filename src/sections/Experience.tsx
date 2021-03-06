import * as React from 'react';
import experience from '../data/experience.json'
import {SectionHeader} from '../components'

interface Props {
    id: string
}

interface Entry {
    company: string;
    country: string;
    duration: string;
    jobTitle: string;
    summary: string;
}

const ExperienceEntry = ({company, country, duration, jobTitle, summary} :Entry) => (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">{company}</span>
            <span className="font-semibold title-font text-gray-700">{country}</span>
            <span className="mt-1 text-gray-500 text-sm">{duration}</span>
        </div>
        <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{jobTitle}</h2>
            <p className="leading-relaxed">{summary}</p>
        </div>
    </div>
)

export const Experience = ({ id }: Props): React.ReactElement => {
    return (
        <section className="text-gray-600 body-font overflow-hidden" id={id}>
            <div className="container px-5 py-24 mx-auto">
                <SectionHeader title={"Experience"} />
                {experience.map((item) => <ExperienceEntry {...item} />)}
            </div>
        </section>
    );
}