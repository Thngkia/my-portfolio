import * as React from 'react';
interface props {
  id: string
}

const ProgressBar = ({ percentage }) => (
  <div className="w-full pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
          mastery
        </span>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold inline-block text-green-600">
          30%
        </span>
      </div>
    </div>
    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
      <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-1/2"></div>
    </div>
  </div>
)


const SkillCard = ({ skill, percentage, icon }) => {
  return (
    <div className="p-4 md:w-1/4 flex flex-col text-center items-center bg-white rounded-lg shadow mx-2">
      {/* <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0"> */}

        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg> */}
      {/* </div> */}
      {icon}
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{skill}</h2>
        {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p> */}
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  )
}

export function Skills({ id }: props): React.ReactElement {
  return (
    <section className="text-gray-600 body-font" id={id}>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Skills</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 sm:-m-4 -mx-4 -mb-10 -mt-4">
          <SkillCard skill={"HTML 5"} icon={<i className="fab fa-html5 fa-7x"></i>}  percentage={"90"}/>
          <SkillCard skill={"CSS"} icon={<i className="fab fa-css3-alt fa-7x"></i>}  percentage={"90"} />
          <SkillCard skill={"JavaScript"} icon={<i className="fab fa-js fa-7x"></i>}  percentage={"90"} />
          <SkillCard skill={"React"} icon={<i className="fab fa-react fa-7x"></i>}  percentage={"90"} />
          <SkillCard skill={"Node JS"} icon={<i className="fab fa-node fa-7x"></i>}  percentage={"90"} />
          <SkillCard skill={"Tailwind"} icon={<i className="fab fa-tailwind fa-7x"></i>}  percentage={"90"}  />
        </div>
      </div>


    </section>
  );
}