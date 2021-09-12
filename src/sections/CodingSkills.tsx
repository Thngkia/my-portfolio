import React from 'react'
import { SectionHeader } from '../components'

interface Props {
  percentage: number,
  skill: string,
  icon?: any,
  logoSvg?: any
}


const ProgressBar = ({ percentage, skill }: Props) => {
const barLength = percentage === 100 ? 'full' : `${Math.round((percentage/100) * 12)}/12`
  return (
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
      <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-${barLength}`}></div>
    </div>
  </div>
  )
}
 


const SkillCard = ({ skill, percentage, icon, logoSvg }: Props) => (
  <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm"></div>
    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-2 rounded-full inline-flex items-center justify-center">
        {icon && icon}
        {logoSvg && logoSvg()}
      </div>
      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <ProgressBar percentage={percentage} skill={skill} />
      </div>
    </div>
  </div>
)

const tailwindLogo = () => (
  <svg fill="none" viewBox="0 0 54 33"><g clipPath="url(#prefix__clip0)">
    <path fill="#4b5663" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g>
  <defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
)

export const CodingSkills = ({id}) => (
  <section className="text-gray-600 body-font" id={id}>
    <SectionHeader title={"Skills"}/>
    <div className="container px-5 mx-auto flex flex-wrap">
    <SkillCard skill={"HTML 5"} icon={<i className="fab fa-html5 fa-5x"></i>}  percentage={100}/>
    <SkillCard skill={"CSS"} icon={<i className="fab fa-css3-alt fa-5x"></i>}  percentage={100} />
    <SkillCard skill={"JavaScript"} icon={<i className="fab fa-js fa-5x"></i>}  percentage={100} />
    <SkillCard skill={"React"} icon={<i className="fab fa-react fa-5x"></i>}  percentage={90} />
    <SkillCard skill={"Node JS"} icon={<i className="fab fa-node fa-5x"></i>}  percentage={85} />
    <SkillCard skill={"Tailwind"} logoSvg={tailwindLogo}  percentage={75}  />
    </div>
  </section>

)