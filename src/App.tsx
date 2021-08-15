import React from 'react';
import { TopNavBar } from './components';
import { Intro, Experience, Skills, Projects, Contact, CodingSkills, Education } from './sections'

function App(): React.ReactElement {
  return (
    <div>
      <TopNavBar />
      <Intro id={"intro"} />
      <Experience id={"experience"} />
      {/* <Skills id={"skills"} /> */}
      <CodingSkills id={"skills"}/>
      <Projects id={"projects"} />
      <Education id={"education"} />
      <Contact id={"contact"} />
    </div>
  );
}

export default App;
