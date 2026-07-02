import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

type FooterProps = {
  githubLink: string;
  linkedinLink: string;
}

function Footer({githubLink, linkedinLink}: FooterProps) {
  return (
    <footer className="bg-base-300 text-base-content text-center p-4">

      {/** container */}
      <div className=" lg:container lg:mx-auto">

        {/** flex */}
        <div className="space-y-2.5 lg:flex items-center justify-between lg:space-y-0">

          <div className="space-y-2">
            <div className="space-y-2 lg:text-left">
              {/** Primary action - email & availability */}
              <p className="text-pretty text-sm">Available for freelance work or hire · ryancruse1807@hotmail.com</p>
              {/** Credibility - what you built it with */}
              <p className="text-xs text-base-content/70">Built with React & TailwindCSS</p>
            </div>


          </div>



          <hr className="border-accent lg:hidden" />

          <div className="flex flex-col items-center gap-y-2.5 lg:flex-row lg:gap-y-0 lg:gap-x-2">
            {/** Legal boilerplate */}
            <p className="text-xs text-base-content/70">© 2026 Ryan Cruse. All rights reserved.</p>
            {/** Secondary contact paths */}
            <div className="flex items-center gap-x-2">
              <a href={githubLink} className="p-1.5 rounded-button bg-github text-white border-2 border-github transition-all ease-in-out duration-500 hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-5"/>
              </a>
              <a href={linkedinLink} className="p-1.5 rounded-button bg-linkedin text-white border-2 border-linkedin transition-all ease-in-out duration-500 hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="size-5"/>
              </a>
            </div>
          </div>

        </div>
        </div>


    </footer>
  )
}


export default Footer;
