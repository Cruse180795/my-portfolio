import ProjectCard from "../ui/ProjectCard";


interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  status: string;
  imageBg: string;
  githubLink: string;
  liveLink: string;
}

interface ProjectCardProps  {
  projects: Project[];
};




function ProjectSection({projects}: ProjectCardProps) {
  return (
    <section className="bg-base-200 text-base-content scroll-mt-14 lg:scroll-mt-18" id="project">

      {/** container */}
      <div className="px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto">

        {/** grid container */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8">

          {/** Section Header */}
          <header className="text-center space-y-2">
            <h2 className="uppercase text-2xl lg:text-3xl">What <span className="text-primary">I've Built</span></h2>
            <p className="leading-relaxed text-pretty lg:text-lg ">A selection of full-stack applications built with React, Laravel and PostgreSQL.</p>
          </header>



          {/** Projects */}
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>

        </div>

      </div>

    </section>
  )
}


export default ProjectSection
