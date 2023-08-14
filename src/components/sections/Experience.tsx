import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";

const Experience = () => {
  return (
    <section className="bg-yellow px-3 py-10 pb-20 dark:bg-[#494949] md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        Experience
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
          icon={<Icon icon="eos-icons:hourglass" />}
        />
        <VerticalTimelineElement
          date={"2020 - 2021"}
          dateClassName="dark:text-white"
          iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
          icon={<Icon icon="mdi:react" />}
          className="dark:brightness-80 dark:filter"
          // contentStyle={{ filter: "brightness(80%)" }}
        >
          <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
            React
          </span>

          <h3 className="text-lg font-bold">work title</h3>
          <h4 className="text-md font-bold">company</h4>
          <div className="mt-2 flex gap-2">
            <span className="rounded-xl bg-[#f9f5e9] px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
              React
            </span>
            <span className="rounded-xl bg-[#f9f5e9] px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
              React
            </span>
            <span className="rounded-xl bg-[#f9f5e9] px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
              React
            </span>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
