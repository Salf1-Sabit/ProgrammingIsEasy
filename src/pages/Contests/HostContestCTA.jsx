import React from "react";

import Button from "../../components/UI/Button";

const HostContestCTA = () => {
  return (
    <aside className="hidden xl:block shadow-md m-8 h-fit rounded border w-[30%] text-center">
      <h1 className="p-4 font-semibold text-lg shadow-sm border-b">
        Host Contest on ProgrammingIsEasy
      </h1>
      <div className="p-4 flex flex-col gap-4">
        <p>
          You can host contests on ProgrammingIsEasy for free! Even with your
          created problems.
        </p>
        <Button
          text="Create Contests"
          to="/host-contests"
          className="py-2 w-fit mx-auto"
        />
      </div>
    </aside>
  );
};

export default HostContestCTA;
