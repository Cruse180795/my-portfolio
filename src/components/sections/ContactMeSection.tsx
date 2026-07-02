import RightArrowIcon from "../icons/RightArrowIcon"
import ContactSectionIcon from "../icons/ContactSectionIcon"
import TimerIcon from "../icons/TimerIcon"

type ContactMeProps = {
  mailto: string;
}


function ContactMeSection({ mailto }: ContactMeProps) {
  return (
    <section className="bg-base-200 text-base-content px-4 py-8">

      {/** container */}
      <div className="lg:container lg:mx-auto">


        {/** Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/** Section Header */}
          <header className="text-center space-y-2 lg:text-left">
            <h2 className="uppercase text-2xl lg:text-3xl">Let's <span className="text-primary">work together</span></h2>
            <p className="leading-relaxed text-pretty lg:text-lg ">I'm available for freelance projects or hire. Get in touch and let's create something great.</p>
          </header>

          {/** Email and Response Time Wrapper */}
          <div className="space-y-2.5">
            {/** Email */}
            <a
              href={`mailto:${mailto}`}
              className="group border-2 border-l-4 border-l-primary border-primary/30 bg-base-100 rounded-card flex items-center justify-between p-2 transition-all ease-in-out duration-500 hover:border-accent">

              <div className="flex items-center gap-x-4">
                <div className="rounded-badge p-2 bg-primary/20 text-primary transition-all ease-in-out duration-500 group-hover:text-accent group-hover:bg-accent/20">
                  <ContactSectionIcon className="size-5 lg:size-6 " />
                </div>

                <div>
                  <p className="text-sm lg:text-base">Send an email</p>
                  <small className="text-neutral-content lg:text-sm">
                    ryancruse1807@hotmail.com
                  </small>
                </div>
              </div>


              <div className="text-primary transition-all ease-in-out duration-500 group-hover:text-accent">
                <RightArrowIcon className="size-4 lg:size-5" />
              </div>
            </a>

            <hr className="border-t-0 border-accent border"/>

            {/** Response time */}
            <div className="border-2 border-l-4 border-l-secondary border-secondary/30 bg-base-100 rounded-card flex items-center gap-x-4 p-2">
              <div className="rounded-badge p-2 bg-primary/5 text-secondary">
                <TimerIcon className="size-5 lg:size-6" />
              </div>

              <div className="">
                <p className="text-sm lg:text-base">Response time</p>
                <small className="text-neutral-content lg:text-sm">
                  I typically reply within 24 hours
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


export default ContactMeSection
