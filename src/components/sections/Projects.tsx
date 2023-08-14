import { useBoolean } from "@/hooks";
import ProjectDialog from "../dialog/ProjectDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ProjectType } from "@/i18n/config";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();

  const handleProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen.on();
  };

  return (
    <section className="bg-yellow px-3 py-5 dark:bg-[#494949] md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {t("projects.projects", { returnObjects: true }).map((item) => (
          <div
            className="mb-[30px] inline-block cursor-pointer bg-white p-3 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-[#6d6d6d]"
            onClick={() => handleProjectDetails(item)}
            key={item.title}
          >
            <img
              className="relative max-h-[230px]"
              src={item.images[0]}
              alt="Profile"
            />
            <span className="mt-3 rounded-b-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-lg text-white">
              {item.startDate}
            </span>
            <p className="font-xl mt-2 font-bold uppercase tracking-wide dark:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <ProjectDialog
        open={isOpen}
        onClose={setIsOpen.off}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
