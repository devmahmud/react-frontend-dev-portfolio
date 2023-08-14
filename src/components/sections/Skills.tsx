import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        Skills
      </h2>

      <ul className="flex flex-wrap justify-center  gap-4">
        {skills.icons.map((skill) => (
          <li
            key={skill.name}
            className="flex h-[84px] w-[100px] flex-col items-center justify-center rounded-[8px] bg-[#2A2929] p-[5x] text-white"
          >
            <Icon
              icon={skill.class}
              className="mx-auto"
              width="39.6px"
              height="39.5px"
            />
            <p className="mt-3 text-center text-xs">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

const skills = {
  icons: [
    {
      name: "HTML 5",
      class: "ri:html5-fill",
      level: "95",
    },
    {
      name: "CSS 3",
      class: "teenyicons:css3-solid",
      level: "95",
    },
    {
      name: "Angular",
      class: "mdi:angular",
      level: "80",
    },
    {
      name: "TypeScript",
      class: "teenyicons:typescript-solid",
      level: "90",
    },
    {
      name: "JavaScript",
      class: "teenyicons:javascript-solid",
      level: "70",
    },
    {
      name: "Sass",
      class: "la:sass",
      level: "75",
    },
    {
      name: "Bootstrap",
      class: "ri:bootstrap-fill",
      level: "85",
    },
    {
      name: "C#",
      class: "devicon-plain:csharp",
      level: "65",
    },
    {
      name: "MySql",
      class: "fontisto:mysql",
      level: "60",
    },
  ],
};
