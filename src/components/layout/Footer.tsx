import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

type FooterProps = {
  githubLink: string;
  linkedinLink: string;
}

function Footer({githubLink, linkedinLink}: FooterProps) {
  return (
    <footer className="bg-neutral text-neutral-content p-4 text-center space-y-2">
      {/** Primary action - email & availability */}
      <p className="text-pretty text-sm">Available for freelance work or hire · ryancruse1807@hotmail.com</p>

      {/** Credibility - what you built it with */}
      <p className="text-xs text-neutral-content/70">Built with React & TailwindCSS</p>

      {/** Secondary contact paths */}
      <div className="flex items-center justify-center gap-x-2">
        <a href={githubLink} className="p-1.5 rounded-lg bg-github text-white" target="_blank">
          <GithubIcon className="size-5"/>
        </a>
        <a href={linkedinLink} className="p-1.5 rounded-lg bg-linkedin text-white" target="_blank">
          <LinkedinIcon className="size-5"/>
        </a>
      </div>

      <hr className="border-accent lg:hidden" />

      {/** Legal boilerplate */}
      <small>© 2026 Ryan Cruse. All rights reserved.</small>
    </footer>
  )
}


export default Footer;
