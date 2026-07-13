import AboutSectionIcon from "../icons/AboutSectionIcon";
import ProjectSectionIcon from "../icons/ProjectSectionIcon";
import ContactSectionIcon from "../icons/ContactSectionIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";



import MobileNavLink from "../ui/MobileNavLink";
import DesktopNavLink from "../ui/DesktopNavLink";



type NavigationProps = {
  githubLink: string;
  linkedinLink: string;
}


function Navigation({ githubLink, linkedinLink }: NavigationProps) {



  return (
    <nav className="bg-base-300 text-base-content border-b-base-100 border-b fixed w-full z-10">
      {/** container */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/** Brand */}
        <h1 className="text-3xl underline underline-offset-8 decoration-0 decoration-primary lg:text-4xl">Ryan Cruse</h1>

        {/** Mobile Menu */}
        <ul className="flex items-center gap-x-2.5 lg:hidden">
          <MobileNavLink href="#about" >
            <AboutSectionIcon className="size-5"/>
          </MobileNavLink>
          <MobileNavLink href="#project" >
            <ProjectSectionIcon className="size-5"/>
          </MobileNavLink>
          <MobileNavLink href="#contact" >
            <ContactSectionIcon className="size-5"/>
          </MobileNavLink>
        </ul>


        {/** Desktop Menu and socials */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <ul className=" lg:flex lg:items-center lg:gap-x-2.5">
            <DesktopNavLink href="#about" >
              <AboutSectionIcon className="size-5" />
              <h2 className="border-l pl-2">About</h2>
            </DesktopNavLink>
            <DesktopNavLink href="#project" >
              <ProjectSectionIcon className="size-5" />
              <h2 className="border-l pl-2">Projects</h2>
            </DesktopNavLink>
            <DesktopNavLink href="#contact" >
              <ContactSectionIcon className="size-5" />
              <h2 className="border-l pl-2">Contact</h2>
            </DesktopNavLink>
          </ul>

          {/** Divider */}
          <div className="lg:w-0.5 lg:h-8 lg:bg-accent"></div>


          <div className="lg:flex lg:items-center lg:gap-x-2.5">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-button bg-github border-2 border-github transition-all ease-in-out duration-300 hover:-translate-y-0.5">
              <GithubIcon className="size-5" />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-button bg-linkedin border-2 border-linkedin transition-all ease-in-out duration-300 hover:-translate-y-0.5">
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;
