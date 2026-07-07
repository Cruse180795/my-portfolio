import ReactIcon from "../icons/ReactIcon";
import LaravelIcon from "../icons/LaravelIcon";
import TailwindIcon from "../icons/TailwindIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import GitIcon from "../icons/GitIcon";
import LocationIcon from "../icons/LocationIcon";

import AboutMeIllustration from "../../assets/images/About_me_illustration.webp";

function AboutMeSection() {
  return (
    <section className="bg-linear-to-b from-base-300 to-base-100 text-base-content">

      {/** container */}
      <div className="px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto">

        {/** grid container */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">

          {/** Image */}
          <div>
            <img src={AboutMeIllustration} alt="About Me Illustration" loading="lazy" decoding="async" width={600} height={400} className="rounded-image"/>
          </div>

          {/** Content */}
          <div className="space-y-4">
            {/** Header */}
            <header className="text-center space-y-2 lg:text-left lg:space-y-2.5">
              <div className="space-y-1.5">
                <h2 className="text-3xl uppercase lg:text-4xl">Welcome</h2>
                <h3 className="text-5xl ">I'm <span className="font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent underline underline-offset-8 decoration-1">Ryan Cruse</span></h3>
              </div>

              <p className="leading-relaxed text-balance lg:text-lg ">Full-stack developer building web applications with React, Laravel and Tailwindcss.</p>
            </header>


            {/** Location and work status wrapper */}
            <div className="text-center space-y-1.5 lg:space-y-2">

              {/** Location */}
              <div className="flex items-center justify-center gap-x-2.5 lg:justify-start">
                <p className="leading-relaxed lg:text-lg">Newcastle Upon Tyne, UK</p>
                <LocationIcon className="size-5"/>
              </div>

              <hr className="border-t-0 border-accent border lg:w-1/2" />


              {/** Work status */}
              <p className="leading-relaxed lg:text-lg lg:text-left">Open to work | Freelance</p>
            </div>


            {/** Techstack */}
              <div className="space-y-2">
                <h3 className="uppercase text-xs lg:text-sm">Core Stack</h3>

                <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                  <li className="p-1.5 flex items-center gap-2 border-2 border-secondary/40 bg-secondary/20 rounded-card transition-all ease-in-out duration-300 lg:hover:border-secondary/60 lg:hover:bg-secondary/30">
                    <ReactIcon className="size-5" />
                    <p>React</p>
                  </li>
                  <li className="p-1.5 flex items-center gap-2 border-2 border-secondary/40 bg-secondary/20 rounded-card transition-all ease-in-out duration-300 lg:hover:border-secondary/60 lg:hover:bg-secondary/30">
                    <LaravelIcon className="size-5" />
                    <p>Laravel</p>
                  </li>
                  <li className="p-1.5 flex items-center gap-2 border-2 border-secondary/40 bg-secondary/20 rounded-card transition-all ease-in-out duration-300 lg:hover:border-secondary/60 lg:hover:bg-secondary/30">
                    <TailwindIcon className="size-5" />
                    <p>Tailwind</p>
                  </li>
                  <li className="p-1.5 flex items-center gap-2 border-2 border-secondary/40 bg-secondary/20 rounded-card transition-all ease-in-out duration-300 lg:hover:border-secondary/60 lg:hover:bg-secondary/30">
                    <PostgresqlIcon className="size-5" />
                    <p>PostgreSQL</p>
                  </li>
                  <li className="p-1.5 flex items-center gap-2 border-2 border-secondary/40 bg-secondary/20 rounded-card transition-all ease-in-out duration-300 lg:hover:border-secondary/60 lg:hover:bg-secondary/30">
                    <GitIcon className="size-5" />
                    <p>Git</p>
                  </li>
                </ul>
              </div>
          </div>
        </div>


      </div>


    </section>
  )
}


export default AboutMeSection;
