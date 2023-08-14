import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] py-5 pt-10  text-center text-white">
      <div className="flex justify-center gap-5">
        <a href="#!">
          <Icon icon="mdi:github" width="22px" />
        </a>
        <a href="#!">
          <Icon icon="mdi:instagram" width="22px" />
        </a>
      </div>
      <p className="py-2 text-xs">Copyright &copy; Davina Griss</p>
    </footer>
  );
};

export default Footer;
