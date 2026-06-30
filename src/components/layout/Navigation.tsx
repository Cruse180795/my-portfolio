import AboutSectionIcon from "../icons/AboutSectionIcon";
import ProjectSectionIcon from "../icons/ProjectSectionIcon";
import ContactSectionIcon from "../icons/ContactSectionIcon";


function Navigation() {
  return (
    <nav className="bg-base-100 text-base-content border-b-base-300 border-b p-4 ">
      {/** container */}
      <div className="flex items-center justify-between">
        {/** Brand */}
        <h1 className="text-3xl underline underline-offset-8 decoration-0 decoration-primary">Ryan Cruse</h1>

        {/** Mobile Menu */}
        <ul className="flex items-center gap-x-2.5">
          <li>
            <a href="#about" className="p-2 border rounded-button flex items-center bg-primary/30 border-primary"><AboutSectionIcon className="size-5"/></a>
          </li>
          <li>
            <a href="#projects" className="p-2 border rounded-button flex items-center bg-neutral border-neutral"><ProjectSectionIcon className="size-5"/></a>
          </li>
          <li>
            <a href="#contact" className="p-2 border rounded-button flex items-center bg-neutral border-neutral"><ContactSectionIcon className="size-5"/></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
