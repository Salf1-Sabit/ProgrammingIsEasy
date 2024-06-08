import React from "react";

import RANK_COLOR from "../../data/rankColors";
import IconContainer from "../../components/UI/IconContainer";
import DocumentIcon from "../../assets/icons/document.png";

const Blog = ({ title, link, author, authorRank, published }) => {
  return (
    <li className="ml-4 sm:ml-8 flex gap-2 sm:gap-3 items-center font-medium leading-5 text-[#0000FF]">
      <p className="md:hidden text-black">#</p>
      <IconContainer className="hidden md:block">
        <img src={DocumentIcon} alt="document" className="w-full h-full" />
      </IconContainer>
      <p>
        <a href={link} target="_blank" rel="noreferrer" className="underline">
          {title}
        </a>
        <span className="text-black"> - </span>
        <span
          className="font-medium"
          style={{ color: `${RANK_COLOR[authorRank]}` }}
        >
          <span
            style={{
              color: `${authorRank === "legendary grandmaster" && "#000"}`,
            }}
          >
            {author.substring(0, 1)}
          </span>
          <span>{author.substring(1, author.length)}</span>
        </span>
        <span className="font-medium text-black"> - {published}</span>
      </p>
    </li>
  );
};

export default Blog;
