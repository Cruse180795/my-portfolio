import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/layout/Footer";




const githubLink = "";
const linkedinLink = "";

function App() {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-1">
        <ContactMeSection />
      </main>

      <Footer githubLink={githubLink} linkedinLink={linkedinLink} />
    </div>



  )
}


export default App;
