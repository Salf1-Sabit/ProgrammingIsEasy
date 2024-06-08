import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import FolderIcon from "../../assets/icons/folder.png";
import IconContainer from "../../components/UI/IconContainer";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="bg-white mt-4 lg:mt-8 text-sm sm:text-base">
      <Wrapper className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <h1 className="flex gap-2 sm:gap-3 items-center text-base sm:text-lg font-medium leading-5">
          <IconContainer>
            <img src={FolderIcon} alt="folder" />
          </IconContainer>
          How to come up with solutions?
        </h1>

        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <Blog
            title="How to read problem statements"
            author="Um_nik"
            authorRank="legendary grandmaster"
            published="6 years ago"
            link="https://codeforces.com/blog/entry/62730"
          />

          <Blog
            title="How to come up with the solutions: techniques"
            author="MikeMirzayanov"
            authorRank="unrated"
            published="9 years ago"
            link="https://codeforces.com/blog/entry/20548"
          />

          <Blog
            title="Characteristics of the optimal solution, a technique for finding observations in a problem"
            author="Proofy"
            authorRank="master"
            published="2 years ago"
            link="https://codeforces.com/blog/entry/99291"
          />

          <Blog
            title='On "is this greedy or DP", forcing and rubber bands'
            author="-is-this-fft-"
            authorRank="grandmaster"
            published="21 month(s) ago"
            link="https://codeforces.com/blog/entry/106346"
          />

          <Blog
            title="How to prove your solutions in Competitive Programming"
            author="Everule"
            authorRank="grandmaster"
            published="16 month ago"
            link="https://codeforces.com/blog/entry/111849"
          />

          <Blog
            title="The Reason You are Bad at Codeforces — You are Not Russian Enough"
            author="Zhtluo"
            authorRank="grandmaster"
            published="3 month ago"
            link="https://codeforces.com/blog/entry/126310"
          />

          <Blog
            title="All You Need is Randomly Guessing — How to Improve at Codeforces"
            author="Zhtluo"
            authorRank="grandmaster"
            published="3 month ago"
            link="https://codeforces.com/blog/entry/126875"
          />
        </ul>

        <h1 className="flex gap-2 sm:gap-3 items-center text-base sm:text-lg font-medium leading-5">
          <IconContainer>
            <img src={FolderIcon} alt="folder" />
          </IconContainer>
          How to practice?
        </h1>

        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <Blog
            title="F.A.Q. (in PM)"
            author="Um_nik"
            authorRank="legendary grandmaster"
            published="8 years ago"
            link="https://codeforces.com/blog/entry/47516"
          />

          <Blog
            title="My opinion on how to practice competitive programming"
            author="Radewoosh"
            authorRank="legendary grandmaster"
            published="3 years ago"
            link="https://codeforces.com/blog/entry/47516"
          />

          <Blog
            title="Self-deception: maybe why you're still grey after practicing every day"
            author="-is-this-fft-"
            authorRank="grandmaster"
            published="2 years ago"
            link="https://codeforces.com/blog/entry/98621"
          />

          <Blog
            title="How to practice Competitive Programming [Um_nik version]"
            author="Um_nik"
            authorRank="legendary grandmaster"
            published="2 years ago"
            link="https://codeforces.com/blog/entry/98806"
          />

          <Blog
            title="[Tutorial] A way to Practice Competitive Programming : From Rating 1000 to 2400+"
            author="E869120"
            authorRank="international grandmaster"
            published="5 years ago"
            link="https://codeforces.com/blog/entry/66909"
          />

          <Blog
            title="[Tutorial] How to learn better, and what most people don't get about learning"
            author="nor"
            authorRank="master"
            published="17 months ago"
            link="https://codeforces.com/blog/entry/66909"
          />

          <Blog
            title="Pro Tips - get them while they are free"
            author="nor"
            authorRank="legendary grandmaster"
            published="15 months ago"
            link="https://codeforces.com/blog/entry/113785"
          />
        </ul>

        <h1 className="flex gap-2 sm:gap-3 items-center text-base sm:text-lg font-medium leading-5">
          <IconContainer>
            <img src={FolderIcon} alt="folder" />
          </IconContainer>
          How to ask for help?
        </h1>

        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <Blog
            title="How to ask for help in PM"
            author="-is-this-fft-"
            authorRank="grandmaster"
            published="4 years ago"
            link="https://codeforces.com/blog/entry/83672"
          />

          <Blog
            title="Asking for help FAQ"
            author="Errichto"
            authorRank="international grandmaster"
            published="5 years ago"
            link="https://codeforces.com/blog/entry/64993"
          />

          <Blog
            title="What not to say when you are accused of cheating"
            author="ACGN"
            authorRank="master"
            published="14 months ago"
            link="https://codeforces.com/blog/entry/115267"
          />
        </ul>
      </Wrapper>
    </div>
  );
};

export default Blogs;
