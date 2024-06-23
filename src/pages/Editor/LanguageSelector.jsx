import { IoIosArrowDown } from "react-icons/io";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="dropdown  dropdown-bottom dropdown-end  border border-[#d2e4f5] px-[1em] py-[.2em] bg-[#e9f1fa] hover:bg-[#d2e4f5] text-sm md:text-base transition-all duration-150 cursor-pointer">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-1 sm:gap-2 md:gap-3 text-[#1e76cc]"
      >
        <p>
          {language[0].toUpperCase() + language.slice(1)}{" "}
          <span className="text-[#3584d1] ml-[.3em]">
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
              lang === language && "bg-[#e9f1fa] text-[#1E76CC] rounded-sm"
            } "hover:bg-gray-100 rounded-sm"`}
            onClick={() => onSelect(lang)}
          >
            <p className="rounded-sm">
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
