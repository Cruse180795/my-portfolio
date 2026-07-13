interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    stack: string[];
    image: string;
    status: string;
    imageBg: string;
    githubLink: string;
    liveLink: string;
  };
}

import GithubIcon from "../icons/GithubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";


function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="border-base-100 shadow-md border-2 rounded-card p-4 space-y-4 bg-base-300">

      <div className="relative">
        {/** Project Image */}
        <img src={project.image} alt={`${project.name} Project Screenshot`} className="rounded-image border-neutral shadow-md" loading="lazy" decoding="async" width={600} height={400}/>
        <p className={`text-xs absolute bottom-2 right-2 rounded-badge p-2
          ${project.imageBg === 'Dark' ? 'bg-base-content/10 backdrop-blur-md' : 'bg-base-100/60'}
          ${project.status === 'Completed' ? 'text-emerald-400' : 'text-accent'}
          `}>{project.status}</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl underline underline-offset-4 decoration-secondary decoration-0">{ project.name }</h3>
          <p className="leading-relaxed font-light text-pretty">{ project.description }</p>

        </div>


        {/** Technologies */}
        <ul className="grid grid-cols-3 gap-4">
          {project.stack.map((tech) => (
            <li key={tech} className="text-xs p-1.5 border border-secondary/40 bg-secondary/20 text-center rounded-badge">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-t-0 border-accent border" />

      <div className="flex items-center gap-x-4 justify-center">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border border-neutral p-2 rounded-button shadow-md flex items-center gap-x-2 w-full justify-center">
          <GithubIcon className="size-5" />
          Code
        </a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="border border-neutral px-4 py-2 rounded-button shadow-md flex items-center gap-x-2 w-full justify-center">
          <ExternalLinkIcon className="size-5" />
          Live
        </a>
      </div>

    </li>
  )
}


export default ProjectCard;
