import React, { useContext } from "react";
import { SiTicktick } from "react-icons/si";
import { useMouseOver } from "../../../hooks/useMouseOver";
import { TaskDoneContext } from "../../../components/store/TaskDoneContext";

const ListItem = ({ taskId, link, title, image }) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useMouseOver();
  const { doneTasks, toggleTasks } = useContext(TaskDoneContext);
  const isTaskDone = doneTasks.find((id) => id === taskId);

  return (
    <li
      className={`${
        !isTaskDone ? "hover:bg-[#edeff0]" : "hover:bg-white"
      } flex justify-between gap-2 text-[12px] sm:text-sm md:text-base leading-4`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flex items-center justify-center">
        <div
          className={`checked-icon-container rounded ${
            isTaskDone
              ? "bg-[#edeff0]"
              : isHovered
              ? "bg-white"
              : "bg-[#edeff0]"
          }  mr-2 flex justify-center items-center p-[6px] sm:p-2`}
        >
          <div
            className={`w-3 h-3 md:w-4 md:h-4 flex justify-center items-center"}`}
          >
            <img src={image} alt="" />
          </div>
        </div>
        <span>
          <a href={link} target="_blank" rel="noreferrer" className="text-link">
            {title}{" "}
          </a>
        </span>
      </div>

      {isTaskDone && (
        <div
          className={`bg-[#cdf4d1] text-[#59d966] hover:bg-[#bdf0c2] border border-[#7ae185]
          }  px-[1.5em] sm:px-[1.8em] md:px-[2em] py-[.3em] rounded-full text-[10px] sm:text-[12px] md:text-sm transition-all duration-200`}
          onClick={() => toggleTasks(taskId)}
        >
          <SiTicktick />
        </div>
      )}

      {!isTaskDone && isHovered && (
        <div
          className={`${
            isTaskDone
              ? "bg-[#cdf4d1] text-[#59d966]"
              : "bg-gray-300 hover:bg-[#bcc0c5] "
          }  px-[1.5em] sm:px-[1.8em] md:px-[2em] py-[.3em] rounded-full text-[10px] sm:text-[12px] md:text-sm transition-all duration-200`}
          onClick={() => toggleTasks(taskId)}
        >
          <SiTicktick />
        </div>
      )}
    </li>
  );
};

export default ListItem;
