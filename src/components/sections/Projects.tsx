import { useBoolean } from "@/hooks";
import ProjectDialog from "../dialog/ProjectDialog";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();

  return (
    <section className="bg-yellow px-3 py-5 dark:bg-[#494949] md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        <div
          className="mb-[30px] inline-block bg-white p-3 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-[#6d6d6d]"
          onClick={setIsOpen.on}
        >
          <img
            className="relative max-h-[230px]"
            src="/images/portfolio/animal-shelter/p1.jpg"
            alt="Profile"
          />
          <span className="mt-3 rounded-b-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-lg text-white">
            2020
          </span>
          <p className="font-xl mt-2 font-bold uppercase tracking-wide dark:text-white">
            Animal Shelter
          </p>
        </div>
        <div className="mb-[30px] inline-block  bg-white p-4 pb-10 shadow-card">
          <img
            className="max-h-[230px]"
            src="/images/portfolio/photography/p1.jpg"
            alt="Profile"
          />
          <div className="mt-3 flex justify-between"></div>
        </div>
        <div className="mb-[30px] inline-block bg-white p-4 pb-10 shadow-card ">
          <img
            className="max-h-[230px]"
            src="/images/portfolio/adventure/p1.jpg"
            alt="Profile"
          />
          <div className="mt-3 flex justify-between"></div>
        </div>
      </div>
      <ProjectDialog open={isOpen} onClose={setIsOpen.off} />
    </section>
  );
};

export default Projects;
