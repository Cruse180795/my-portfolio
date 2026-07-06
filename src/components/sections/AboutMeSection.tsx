import ReactIcon from "../icons/ReactIcon";
import LaravelIcon from "../icons/LaravelIcon";
import TailwindIcon from "../icons/TailwindIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import CSS3Icon from "../icons/CSS3Icon";
import GitIcon from "../icons/GitIcon";
import HTML5Icon from "../icons/HTML5Icon";
import LocationIcon from "../icons/LocationIcon";



function AboutMeSection() {
  return (
    <section className="bg-linear-to-b from-base-300 to-base-100 text-base-content">

      {/** container */}
      <div className="px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto">

        {/** grid container */}
        <div className="grid grid-cols-1 gap-8">

          {/** Image */}
          <div>
            {/** TODO: Replace with actual image */}
            <img src="https://placehold.co/600x400" alt="About Me Illustration" loading="lazy" className="rounded-image"/>
          </div>

          {/** Content */}
          <div className="space-y-4">
            {/** Header */}
            <header className="text-center space-y-2">
              <h2 className="text-4xl text-pretty">Welcome I'm <span className="text-primary text-3xl">Ryan Cruse</span></h2>
              <p className="leading-relaxed">Full-stack developer building web applications with React, Laravel and Tailwindcss.</p>
            </header>


            {/** Location and work status wrapper */}
            <div className="text-center space-y-2.5">

              {/** Location */}
              <div className="flex items-center justify-center gap-x-2.5">
                <p className="leading-relaxed">Newastle Upon Tyne, UK</p>
                <LocationIcon className="size-5"/>
              </div>

              <hr className="border-t-0 border-accent border"/>

              {/** Work status */}
              <p className="leading-relaxed">Open to work | Freelance</p>
            </div>


            {/** Techstack */}
            <div className="space-y-4">

              <div className="space-y-2">
                <h2 className="uppercase text-xs">Core Stack</h2>

                <ul className="grid grid-cols-2 gap-2.5">
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <ReactIcon className="size-5" />
                    <h2>React</h2>
                  </li>
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <LaravelIcon className="size-5" />
                    <h2>Laravel</h2>
                  </li>
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <TailwindIcon className="size-5" />
                    <h2>Tailwind</h2>
                  </li>
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <PostgresqlIcon className="size-5" />
                    <h2>PostgreSQL</h2>
                  </li>
                </ul>
              </div>


              <div className="space-y-2">
                <h2 className="uppercase text-xs">Other tools and languages</h2>
                <ul className="grid grid-cols-3 gap-2.5">
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <GitIcon className="size-5" />
                    <h2>Git</h2>
                  </li>
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <HTML5Icon className="size-5" />
                    <h2>HTML5</h2>
                  </li>
                  <li className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral">
                    <CSS3Icon className="size-5" />
                    <h2>CSS3</h2>
                  </li>
                </ul>
              </div>

            </div>


          </div>
        </div>


      </div>


    </section>
  )
}


export default AboutMeSection;
