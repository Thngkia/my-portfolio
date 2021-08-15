import React from 'react'
import { SectionHeader } from '../components'

const ProgressBar = ({ percentage, skill }) => (
  <div className="w-full pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
      <span className="font-medium title-font text-gray-900 text-xl">{skill}</span>
      </div>
      <div className="text-right">
        <span className="text-lg font-semibold inline-block text-green-600">
          {percentage} %
        </span>
      </div>
    </div>
    <div className="overflow-hidden h-5 mb-4 text-xs flex rounded bg-green-200">
      <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-1/2"></div>
    </div>
  </div>
)

const SkillCard = ({ skill, percentage, icon }) => (
  <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm"></div>
    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-2 rounded-full inline-flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        {/* <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{skill}</h2> */}
        <ProgressBar percentage={percentage} skill={skill} />
      </div>
    </div>
  </div>
)

export const CodingSkills = ({id}) => (
  <section className="text-gray-600 body-font" id={id}>
    <SectionHeader title={"Skills"}/>
    <div className="container px-5 mx-auto flex flex-wrap">
    <SkillCard skill={"HTML 5"} icon={<i className="fab fa-html5 fa-5x"></i>}  percentage={"90"}/>
    <SkillCard skill={"CSS"} icon={<i className="fab fa-css3-alt fa-5x"></i>}  percentage={"90"} />
    <SkillCard skill={"JavaScript"} icon={<i className="fab fa-js fa-5x"></i>}  percentage={"90"} />
    <SkillCard skill={"React"} icon={<i className="fab fa-react fa-5x"></i>}  percentage={"90"} />
    <SkillCard skill={"Node JS"} icon={<i className="fab fa-node fa-5x"></i>}  percentage={"90"} />
    {/* <SkillCard skill={"Tailwind"} icon={<i className="fab fa-tailwind fa-5x"></i>}  percentage={"90"}  />s */}
    </div>
  </section>

)