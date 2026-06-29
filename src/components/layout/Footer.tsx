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

            {/** Secondary contact paths */}
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <a href={githubLink} className="p-1.5 rounded-lg bg-github text-white" target="_blank">
                <GithubIcon className="size-5"/>
              </a>
              <a href={linkedinLink} className="p-1.5 rounded-lg bg-linkedin text-white" target="_blank">
                <LinkedinIcon className="size-5"/>
              </a>
            </div>
          </div>



          <hr className="border-accent lg:hidden" />

          {/** Legal boilerplate */}
          <p className="text-xs text-base-content/70">© 2026 Ryan Cruse. All rights reserved.</p>
        </div>
        </div>


    </footer>
  )
}


export default Footer;
