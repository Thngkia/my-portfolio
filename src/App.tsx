import React from 'react';
import { TopNavBar } from './components';
import { Intro, Experience, Skills, Projects, Contact } from './sections'

function App(): React.ReactElement {
  return (
    <div>
      <TopNavBar />
      <Intro id={"intro"} />
      <Experience id={"experience"} />
      <Skills id={"skills"} />
      <Projects id={"projects"} />
      <Contact id={"contact"} />
    </div>
  );
}

export default App;
