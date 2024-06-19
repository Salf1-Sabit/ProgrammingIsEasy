import React from "react";

import Button from "../../components/UI/Button";

const HostContestCTA = () => {
  return (
    <aside className="hidden xl:block shadow-md m-8 h-fit rounded border w-[30%] text-center">
      <h1 className="p-4 font-semibold text-lg shadow-sm border-b leading-5">
        Submit National Contests Information
      </h1>
      <div className="p-4 flex flex-col gap-4">
        <p>
          Submit upcoming/past national contest info here for admin approval.
          Thank you.
        </p>
        <Button
          text="Apply"
          className="py-2 w-fit mx-auto"
          onClick={() =>
            document.getElementById("submitIUPCInfoForm").showModal()
          }
        />
      </div>
    </aside>
  );
};

export default HostContestCTA;
