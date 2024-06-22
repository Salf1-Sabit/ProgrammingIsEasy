import { IoIosArrowDown } from "react-icons/io";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="dropdown  dropdown-bottom dropdown-end dropdown-hover border px-[1em] py-[.2em] bg-white text-sm md:text-base hover:bg-gray-100 transition-all duration-150 cursor-pointer">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        <p>
          {language[0].toUpperCase() + language.slice(1)}{" "}
          <span className="text-gray-500 ml-[.3em]">
            ({LANGUAGE_VERSIONS[language]})
          </span>
        </p>
        <IoIosArrowDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white xs:w-[256px] sm:w-[512px] md:w-[256px] lg:w-[398px] xl:w-[512px] max-h-[200px] overflow-y-scroll"
      >
        {languages.map(([lang, version]) => (
          <li
            key={lang}
            className={`${
              lang === language && "bg-[#e9f1fa] text-[#1E76CC] rounded-none"
            } "hover:bg-gray-100 rounded-none"`}
            onClick={() => onSelect(lang)}
          >
            <p className="rounded-none">
              <span>{lang[0].toUpperCase() + lang.slice(1)} </span>
              <span
                className={`${
                  lang === language ? "text-[#3584d1]" : "text-gray-600"
                } text-[12px] md:text-sm`}
              >
                ({version})
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LanguageSelector;
