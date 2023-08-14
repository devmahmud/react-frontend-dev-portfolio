import { useContext } from "react";
import Switch from "react-switch";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  return (
    <>
      <header className="h-[650px] w-[100%] bg-yellow dark:bg-[#494949]">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-gray-dark"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-dark dark:text-white">
            Davina Griss
          </h1>

          <TypeAnimation
            sequence={[
              "FRONT-END DEVELOPER",
              1000,
              "MOBILE DEVELOPER",
              1000,
              "SENIOR DATA ENGINEER",
              1000,
              "DEV TEAM LEAD",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark dark:text-white"
            repeat={Infinity}
          />

          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="twemoji:owl"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
        </div>
      </header>

      <div className="flex justify-center gap-5 bg-yellow pb-2.5 pt-20 dark:bg-[#494949]">
        <Icon
          className="h-full cursor-pointer text-[50px] text-gray-dark brightness-50"
          icon="twemoji-flag-for-flag-united-kingdom"
        />
        <Icon
          className="h-full cursor-pointer text-[50px] text-gray-dark"
          icon="twemoji-flag-for-flag-poland"
        />
      </div>
    </>
  );
};

export default Header;
