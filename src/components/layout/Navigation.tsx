import AboutSectionIcon from "../icons/AboutSectionIcon";
import ProjectSectionIcon from "../icons/ProjectSectionIcon";
import ContactSectionIcon from "../icons/ContactSectionIcon";


import MobileNavLink from "../ui/MobileNavLink";


function Navigation() {
  return (
    <nav className="bg-base-100 text-base-content border-b-base-300 border-b p-4 ">
      {/** container */}
      <div className="flex items-center justify-between">
        {/** Brand */}
        <h1 className="text-3xl underline underline-offset-8 decoration-0 decoration-primary">Ryan Cruse</h1>

        {/** Mobile Menu */}
        <ul className="flex items-center gap-x-2.5">
          <MobileNavLink href="#about">
            <AboutSectionIcon className="size-5"/>
          </MobileNavLink>
          <MobileNavLink href="#about">
            <ProjectSectionIcon className="size-5"/>
          </MobileNavLink>
          <MobileNavLink href="#about">
            <ContactSectionIcon className="size-5"/>
          </MobileNavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
