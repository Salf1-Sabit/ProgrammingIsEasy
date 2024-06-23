import React from "react";
import CppIcon from "../../assets/icons/programming_languages/CppIcon";
import PythonIcon from "../../assets/icons/programming_languages/PythonIcon";
import GoIcon from "../../assets/icons/programming_languages/GoIcon";
import HaskellIcon from "../../assets/icons/programming_languages/HaskellIcon";
import JavaIcon from "../../assets/icons/programming_languages/JavaIcon";
import JavascriptIcon from "../../assets/icons/programming_languages/JavascriptIcon";
import LanguageIconContainer from "./LanguageIconContainer";
import Button from "../../components/UI/Button";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-[95vh] relative">
      <LanguageIconContainer
        icon={<PythonIcon />}
        className="top-[22%] xs:top-[26%] sm:top-[28%] left-0 md:top-[25%] md:left-[5%]"
      />

      <LanguageIconContainer
        icon={<CppIcon />}
        className="top-[19%] xs:top-[23%] sm:top-[24%] left-48% md:top-[49%] md:left-0"
      />

      <LanguageIconContainer
        icon={<GoIcon />}
        className="top-[23%] xs:top-[27%] sm:top-[30%] right-0 md:top-[70%] md:left-[5%]"
      />

      <div className="text-center flex flex-col gap-4 md:gap-8 md:w-[76%]">
        <h1 className="font-semibold text-lg xs:text-2xl sm:text-3xl lg:text-5xl">
          Wasting Time in Tutorial Hell or Lost in the Ocean of Resources?
          Feeling Lost? Not Anymore!
        </h1>
        <p className="text-sm md:text-base">
          Master competitive programming with our curated resources and tools.
          Access high-quality materials, diverse practice problems, and the
          latest contest updates. Utilize our online editor supporting 60+
          languages, learn from blogs written by grandmasters, and follow a
          roadmap from beginner to Codeforces expert. Host contests for free and
          join our vibrant programming community.
        </p>
        <Button
          text="Get Started"
          className="px-3 sm:px-5 py-1 sm:py-2 w-fit mx-auto hover:bg-[#00bca0] transition-all duration-150"
        />
      </div>

      <LanguageIconContainer
        icon={<HaskellIcon />}
        className="bottom-[22%] xs:bottom-[26%] sm:bottom-[30%] max-md:left-0 md:top-[30%] md:right-[5%]"
      />

      <LanguageIconContainer
        icon={<JavascriptIcon />}
        className="bottom-[19%] xs:bottom-[23%] sm:bottom-[24%] right-48% md:top-[51%] md:right-0"
      />

      <LanguageIconContainer
        icon={<JavaIcon />}
        className="bottom-[23%] xs:bottom-[27%] sm:bottom-[30%] right-0 md:top-[73%] md:right-[5%]"
      />
    </div>
  );
};

export default HeroSection;
