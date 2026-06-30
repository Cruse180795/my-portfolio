import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/layout/Footer";




const githubLink = "";
const linkedinLink = "";
const mailtoLink = "ryancruse1807@hotmail.com";

function App() {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-1">
        <ContactMeSection mailto={mailtoLink}/>
      </main>

      <Footer githubLink={githubLink} linkedinLink={linkedinLink} />
    </div>



  )
}


export default App;
