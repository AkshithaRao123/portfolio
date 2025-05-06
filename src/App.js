import React from 'react';

import { Header, Footer, About, Projects } from './containers';
import { Navbar, Techstack, ExpButton, Certifications } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Techstack />
        <ExpButton heading="Experience" description="I have experience in AI/ML and have also volunteered in conduction of events by technical clubs in college. Read about my experience here." id="experience" />
        <ExpButton heading="Education and Certifications" description="I am currently a final year CS student passionate about learning more and applying that knowledge. I've also done certifications. View more about my education and certifications here." id="education" />
      </div>
      {/* <About />
      <Projects />
      <Certifications /> */}
      <Footer />
    </div>
  )
}

export default App
