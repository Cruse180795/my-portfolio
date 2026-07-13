
import Navigation from "./components/layout/Navigation";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/layout/Footer";

const githubLink = "https://github.com/Cruse180795";
const linkedinLink = "https://www.linkedin.com/in/ryancruse1807/";
const mailtoLink = "ryancruse1807@hotmail.com";

const testProjects = [
  {
    id: 1,
    name: 'Test Project 1',
    description: 'Test Project 1 description.',
    stack: ['React', 'Laravel', 'PostgreSQL', 'TailwindCSS'],
    image: 'https://placehold.co/600x400/000000/FFF',
    status: 'Completed',
    githubLink: '',
    liveLink: ''
  },

]

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation githubLink={githubLink} linkedinLink={linkedinLink} />

      <main className="flex-1">
        <AboutMeSection />
        <ProjectSection projects={testProjects} />
        <ContactMeSection mailto={mailtoLink}/>
      </main>

      <Footer githubLink={githubLink} linkedinLink={linkedinLink} />
    </div>



  )
}


export default App;
