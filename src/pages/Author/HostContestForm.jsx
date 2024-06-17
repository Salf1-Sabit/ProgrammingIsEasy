import React from "react";
import { Link } from "react-router-dom";

const HostContestForm = () => {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0">
          <h3 className="font-bold text-base md:text-xl border-b p-3 md:p-4 text-gray-700">
            Create New Contest
          </h3>
          <p className="text-white bg-[#3E8ED0] rounded mx-3 md:mx-4 mt-3 md:mt-4 p-3 sm:p-4 md:p-5 text-[12px] md:text-sm lg:text-base">
            By using the contest hosting feature on ProgrammingIsEasy, you are
            agreeing with our{" "}
            <Link href="#" className="underline">
              terms and conditions.
            </Link>
          </p>

          <form method="dialog" className="p-3 md:p-4">
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="contestTitle" className="text-sm md:text-base">
                Contest Title
              </label>
              <input
                type="text"
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="contestTitle" className="text-sm md:text-base">
                Contest Handle
              </label>
              <input
                type="text"
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="contestTitle" className="text-sm md:text-base">
                Contest participation type
              </label>
              <select className="w-fit bg-white border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200">
                <option selected>Individual</option>
                <option>Team</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="contestTitle" className="text-sm md:text-base">
                Contest start time
              </label>
              <input
                type="date"
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="contestTitle" className="text-sm md:text-base">
                Contest end time
              </label>
              <input
                type="date"
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
              />
            </div>

            <div className="modal-action">
              <button className="rounded px-3 sm:px-5 py-1 sm:py-2 border font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base">
                Close
              </button>
              <button className="bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 sm:py-2 text-white font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default HostContestForm;
