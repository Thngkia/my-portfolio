import React from 'react'
import { SectionHeader } from '../components'
import educationData from '../data/education.json'
import GaLogo from '../GA_logo.png'
import NusLogo from '../NUS_logo.png'

interface Props {
  id: string
}

interface Education {
  school?: string,
  course?: string,
  duration?: string,
  qualification?: string,
  logo?: any
}

const EducationCard = ({school, course, duration, qualification, logo}: Education) => {
return (
  <div className="p-4 lg:w-1/2">
    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={logo}/>
      <div className="flex-grow sm:pl-8">
        <h2 className="title-font font-medium text-lg text-gray-900">{school}</h2>
        <h3 className="text-gray-500 mb-3">{course}</h3>
        <h3 className="text-gray-500 mb-3">{duration}</h3>
        <p className="mb-4">{qualification}</p>
      </div>
    </div>
  </div>
)}


export const Education = ({id}: Props): React.ReactElement => {
 return (
  <section className="text-gray-600 body-font" id={id}>
  <div className="container px-5 py-24 mx-auto">
    <SectionHeader title={"Education"}/>  
    <div className="flex flex-col text-center w-full mb-20"></div>
    <div className="flex flex-wrap -m-4">
      <EducationCard {...educationData[0] as any} logo={GaLogo}/>
      <EducationCard {...educationData[1] as any} logo={NusLogo}/>
    </div>
  </div>
</section>
 )
}