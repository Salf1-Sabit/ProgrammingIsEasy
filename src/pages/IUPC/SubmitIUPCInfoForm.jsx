import React, { useState, useEffect } from "react";

// context
import { SnackbarContext } from "../../components/store/SnackbarContext";

const SubmitIUPCInfoForm = () => {
  const { handleSnackbarClick } = React.useContext(SnackbarContext);

  const [form, setForm] = useState({
    contestTitle: "",
    registrationFee: "",
    contestType: "IUPC",
    scheduledTime: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { contestTitle, registrationFee, scheduledTime } = form;
    setIsFormValid(
      contestTitle.trim() !== "" &&
        registrationFee.trim() !== "" &&
        scheduledTime.trim() !== ""
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <dialog
        id="submitIUPCInfoForm"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box p-0">
          <h3 className="font-bold text-base md:text-xl border-b p-3 md:p-4 text-gray-700">
            Submit National Contest Information
          </h3>

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
              <label htmlFor="registrationFee" className="text-sm md:text-base">
                Registration Fee
              </label>
              <input
                type="number"
                name="registrationFee"
                min={0}
                className="border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.registrationFee}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="contestType" className="text-sm md:text-base">
                Contest type
              </label>
              <select
                name="contestType"
                className="text-sm md:text-base w-fit bg-white border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                value={form.contestType}
                onChange={handleChange}
              >
                <option value="IUPC">IUPC</option>
                <option value="NCPC">NCPC</option>
                <option value="ICPC">ICPC</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
              <label htmlFor="scheduledTime" className="text-sm md:text-base">
                Scheduled time
              </label>
              <input
                type="date"
                name="scheduledTime"
                className="text-sm md:text-base border rounded py-1 px-1 sm:px-2 focus:border-[#3E8ED0] transition-all duration-200"
                required
                value={form.scheduledTime}
                onChange={handleChange}
              />
            </div>

            <div className="modal-action">
              <button
                type="reset"
                className="rounded px-3 sm:px-5 py-1 sm:py-2 border font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base"
                onClick={() =>
                  document.getElementById("submitIUPCInfoForm").close()
                }
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
                      "You've applied for the new national contests info successfully",
                      "success"
                    );
                    setForm({
                      contestTitle: "",
                      registrationFee: "",
                      contestType: "IUPC",
                      scheduledTime: "",
                    });
                    document.getElementById("submitIUPCInfoForm").close();
                  }
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default SubmitIUPCInfoForm;
