import React from "react";

const ProblemsRatings = ({ changeCurRating, curRating }) => {
  return (
    <ul className="mt-[1.5em] w-fit text-sm sm:text-base md:text-lg lg:text-xl flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 justify-center mx-auto">
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 800
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          800
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 900
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          900
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 1000
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          1000
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 1100
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          1100
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 1200
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          1200
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 1300
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          1300
        </button>
      </li>
      <li>
        <button
          onClick={changeCurRating}
          style={{
            border:
              curRating === 1400
                ? "4px solid var(--blue-border)"
                : "0px solid transparent",
          }}
          className="bg-gray-200 rounded-lg px-[1em] py-[.2em]"
        >
          1400
        </button>
      </li>
    </ul>
  );
};

export default ProblemsRatings;
