
import Navigation from "./components/layout/Navigation";
import AboutMeSection from "./components/sections/AboutMeSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/layout/Footer";

const githubLink = "https://github.com/Cruse180795";
const linkedinLink = "https://www.linkedin.com/in/ryancruse1807/";
const mailtoLink = "ryancruse1807@hotmail.com";


// Project Image imports
import NoteKeeperProjectImage from "./assets/images/NoteKeeper.webp"

const testProjects = [
  {
    id: 1,
    name: 'NoteKeeper — Full-Stack Note-Taking App',
    description: 'A responsive, full-stack note-taking application. Users can create, edit, delete, and archive notes, organize them with tags, and search across titles, tags, and content.',
    stack: ['React', 'Laravel', 'PostgreSQL', 'TailwindCSS'],
    image: NoteKeeperProjectImage,
    status: 'In Development',
    imageBg: 'Light',
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
