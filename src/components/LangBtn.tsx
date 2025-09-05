import i18n from "i18next";

import { MdLanguage } from "react-icons/md";

function LangBtn({ className }: { className?: string }) {
  const handleClick = () => {
    i18n.changeLanguage(i18n.language == "en" ? "ar" : "en");
  };

  return (
    <MdLanguage
      className={`mt-1 md:mr-1 text-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-130 ${className} `}
      onClick={handleClick}
    />
  );
}

export default LangBtn;
