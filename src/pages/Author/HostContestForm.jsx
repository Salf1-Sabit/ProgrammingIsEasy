import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// context
import { SnackbarContext } from "../../components/store/SnackbarContext";

const HostContestForm = () => {
  const { handleSnackbarClick } = React.useContext(SnackbarContext);

  const [form, setForm] = useState({
    contestTitle: "",
    maxParticipants: "",
    participationType: "Individual",
    startTime: "",
    endTime: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { contestTitle, maxParticipants, startTime, endTime } = form;
    setIsFormValid(
      contestTitle.trim() !== "" &&
        maxParticipants.trim() !== "" &&
        startTime.trim() !== "" &&
        endTime.trim() !== ""
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
            <Link to="#" className="underline">
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
                name="contestTitle"
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.contestTitle}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="maxParticipants" className="text-sm md:text-base">
                Maximum Participants
              </label>
              <input
                type="number"
                name="maxParticipants"
                min={0}
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.maxParticipants}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label
                htmlFor="participationType"
                className="text-sm md:text-base"
              >
                Contest Participation Type
              </label>
              <select
                name="participationType"
                className="text-sm md:text-base w-fit bg-white border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                value={form.participationType}
                onChange={handleChange}
              >
                <option value="Individual">Individual</option>
                <option value="Team">Team</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="startTime" className="text-sm md:text-base">
                Contest Start Time
              </label>
              <input
                type="date"
                name="startTime"
                className="text-sm md:text-base border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.startTime}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="endTime" className="text-sm md:text-base">
                Contest End Time
              </label>
              <input
                type="date"
                name="endTime"
                className="text-sm md:text-base border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.endTime}
                onChange={handleChange}
              />
            </div>

            <div className="modal-action">
              <button
                type="reset"
                className="rounded px-3 sm:px-5 py-1 sm:py-2 border font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
              <button
                type="button"
                className={`bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 sm:py-2 text-white font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid}
                onClick={() => {
                  if (isFormValid) {
                    handleSnackbarClick(
                      "Contest has been created successfully",
                      "success"
                    );
                    setForm({
                      contestTitle: "",
                      maxParticipants: "",
                      participationType: "Individual",
                      startTime: "",
                      endTime: "",
                    });
                    document.getElementById("my_modal_5").close();
                  }
                }}
              >
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
