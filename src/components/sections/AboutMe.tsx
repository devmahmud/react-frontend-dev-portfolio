import { Icon } from "@iconify/react";

const AboutMe = () => {
  return (
    <section className="py-5 dark:bg-[#7f7f7f] md:py-10">
      <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
        About Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 px-10 pb-10 md:flex-row md:pb-0">
        <div className="text-center md:w-1/3">
          <div className="mb-[30px] mt-[55px] inline-block p-4 pb-10 shadow-card ">
            <img
              src="/images/myProfile.jpg"
              alt="Profile"
              height="250px"
              className="w-[200px]"
            />
            <div className="mt-3 flex justify-between">
              <Icon
                icon="devicon:angular"
                style={{
                  fontSize: 50,
                }}
              />
              <Icon
                icon="devicon:react"
                style={{
                  fontSize: 50,
                }}
              />
              <Icon
                icon="devicon:vuejs"
                style={{
                  fontSize: 50,
                }}
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-3 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="text-xl font-medium dark:text-white">
                Hi :){" "}
              </span>
              <br />
              <br />
              <p className="text-sm font-medium dark:text-white">
                👋 I'm Davina Griss. Fictional person for preview purposes :)
                I'm working with newest front-end frameworks like Angular, React
                and Vue. What you are seeing now is portfolio template from
                Dorota1997. If you like this portfolio template, make sure to ⭐
                the repository to make it more recognizable for other users.
                Thank you 💜
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
