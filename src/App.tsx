
import Navigation from "./components/layout/Navigation";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/layout/Footer";




const githubLink = "https://github.com/Cruse180795";
const linkedinLink = "https://www.linkedin.com/in/ryancruse1807/";
const mailtoLink = "ryancruse1807@hotmail.com";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation githubLink={githubLink} linkedinLink={linkedinLink} />

      <main className="flex-1">
        <ContactMeSection mailto={mailtoLink}/>
      </main>

      <Footer githubLink={githubLink} linkedinLink={linkedinLink} />
    </div>



  )
}


export default App;
