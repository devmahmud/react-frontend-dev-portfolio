import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
    {text}
  </span>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-yellow px-3 py-10 pb-20 dark:bg-[#494949] md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("experience.title")}
      </h2>

      <VerticalTimeline>
        {t("experience.experiences", { returnObjects: true }).map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.years}
            dateClassName="dark:text-white"
            iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
            icon={<Icon icon={exp.mainTechIcon} />}
            className="dark:brightness-80 dark:filter"

            // contentStyle={{ filter: "brightness(80%)" }}
          >
            <Badge text={exp.mainTech} />

            <h3 className="text-lg font-bold">{exp.title}</h3>
            <h4 className="text-md font-bold">{exp.company}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
          icon={<Icon icon="eos-icons:hourglass" />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
