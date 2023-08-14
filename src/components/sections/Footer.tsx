import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1f1f1f] py-5 pt-10  text-center text-white">
      <div className="flex justify-center gap-5">
        {t("basic_info.socials", { returnObjects: true }).map((social) => (
          <a key={social.icon} href={social.url}>
            <Icon icon={social.icon} width="22px" />
          </a>
        ))}
      </div>
      <p className="py-2 text-xs">{t("copyright")} &copy; Mahmudul Alam</p>
    </footer>
  );
};

export default Footer;
