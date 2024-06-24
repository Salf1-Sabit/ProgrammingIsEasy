import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import RatingIcon from "../../assets/icons/ranking.png";
import ContributionIcon from "../../assets/icons/contribution.png";
import FriendsIcon from "../../assets/icons/contacts.png";
import ContestIcon from "../../assets/icons/achievement.png";
import Wrapper from "../../components/UI/Wrapper";
import "./profile.css";

import { SnackbarContext } from "../../components/store/SnackbarContext";

const RANK_COLOR = {
  newbie: "#808080",
  pupil: "#008000",
  specialist: "#29B5AC",
  expert: "#0000FF",
  "candidate master": "#AA00AA",
  master: "#FF8C00",
  "international master": "#FF8C02",
  grandmaster: "#FF0000",
  "international grandmaster": "#FF0000",
  "legendary grandmaster": "#FF1010",
};

const Profile = () => {
  const [user, setUser] = useState(
    null || JSON.parse(localStorage.getItem("profileUser"))
  );
  const [totalContest, setTotalContest] = useState(
    null || localStorage.getItem("profileTotalContest")
  );
  const inputRef = useRef(null);
  const [userName, setUserName] = useState(
    "" || localStorage.getItem("profileUserName")
  );
  const { handleSnackbarClick } = React.useContext(SnackbarContext);

  const getUser = useCallback(async () => {
    if (userName === "") {
      handleSnackbarClick(
        "Empty handles are not allowed. Please try again.",
        "warning"
      );
      return;
    }

    try {
      // Fetch user info
      const userInfoResponse = await axios.get(
        `https://codeforces.com/api/user.info?handles=${userName}&checkHistoricHandles=false`
      );
      setUser(userInfoResponse.data.result[0]);
      localStorage.setItem(
        "profileUser",
        JSON.stringify(userInfoResponse.data.result[0])
      );

      // Fetch user rating
      const userRatingResponse = await axios.get(
        `https://codeforces.com/api/user.rating?handle=${userName}`
      );
      setTotalContest(userRatingResponse.data.result.length);
      localStorage.setItem(
        "profileTotalContest",
        userRatingResponse.data.result.length
      );

      // If both calls were successful
      handleSnackbarClick("Profile added successfully", "success");
      localStorage.setItem("profileUserName", userName);
    } catch (error) {
      handleSnackbarClick(
        "Sorry, the username is not correct. Please try again",
        "error"
      );
    }
  }, [userName, handleSnackbarClick]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        getUser();
      }
    };

    const curInputRef = inputRef.current;

    if (curInputRef) {
      curInputRef.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (curInputRef) {
        curInputRef.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [userName, getUser]);

  return (
    <>
      <Wrapper className="profile-container text-sm sm:text-lg">
        {user ? (
          <div className="profile-outer-container">
            <div className="profile flex flex-col md:flex-row rounded">
              <img
                className="profile__img"
                src={user.titlePhoto}
                alt="User avatar"
              />

              <div className="profile__description">
                <h3 className="profile__description__current-rank">
                  <span style={{ color: `${RANK_COLOR[user.rank]}` }}>
                    {user.rank}
                  </span>
                </h3>
                <h1
                  className="profile__description__user-name leading-10 font-medium"
                  style={{ color: `${RANK_COLOR[user.rank]}` }}
                >
                  <span
                    style={{
                      color: `${
                        user.rank === "legendary grandmaster" && "#000"
                      }`,
                    }}
                  >
                    {user.handle.substring(0, 1)}
                  </span>
                  <span>{user.handle.substring(1, user.handle.length)}</span>
                </h1>
                <p className="profile__description__city">
                  <span
                    style={{ color: "#0F0FCF", textDecoration: "underline" }}
                  >
                    {user.city}
                  </span>
                  {user.city && user.country && <span>, </span>}
                  <span
                    style={{ color: "#0F0FCF", textDecoration: "underline" }}
                  >
                    {user.country}
                  </span>
                </p>

                {user.organization && (
                  <p className="profile__description__organization">
                    From{" "}
                    <span
                      style={{ color: "#0F0FCF", textDecoration: "underline" }}
                    >
                      {user.organization}
                    </span>
                  </p>
                )}

                <p className="profile__description__details">
                  <img
                    src={RatingIcon}
                    alt="Rating icon"
                    style={{ width: "1.5em" }}
                  />
                  <span>
                    Contest rating:{" "}
                    <span style={{ color: `${RANK_COLOR[user.rank]}` }}>
                      {user.rating}
                    </span>{" "}
                    (max.{" "}
                    <span style={{ color: `${RANK_COLOR[user.maxRank]}` }}>
                      {user.maxRank}
                    </span>
                    ,{" "}
                    <span style={{ color: `${RANK_COLOR[user.maxRank]}` }}>
                      {user.maxRating}
                    </span>
                    )
                  </span>
                </p>
                <p className="profile__description__details">
                  <img
                    src={ContributionIcon}
                    alt="Rating icon"
                    style={{ width: "1.5em" }}
                  />
                  <span>Contribution: {user.contribution}</span>
                </p>
                <p className="profile__description__details">
                  <img
                    src={FriendsIcon}
                    alt="Rating icon"
                    style={{ width: "1.5em" }}
                  />
                  <span>Friends of: {user.friendOfCount}</span>
                </p>
                <p className="profile__description__details">
                  <img
                    src={ContestIcon}
                    alt="Rating icon"
                    style={{ width: "1.5em" }}
                  />
                  <span>Contest participated: {totalContest}</span>
                </p>
              </div>
            </div>

            <div></div>

            <div className="profile__btn-container">
              <button
                className="bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 text-white font-medium text-sm md:text-base"
                onClick={() => {
                  setUserName("");
                  setUser("");
                  localStorage.removeItem("profileUser");
                  localStorage.removeItem("profileUserName");
                  localStorage.removeItem("profileTotalContest");
                  handleSnackbarClick("Profile removed sucessfully", "success");
                }}
                style={{ cursor: "pointer" }}
              >
                Remove Profile
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold">
              Please enter your Codeforces handle
            </h2>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <input
                className="px-2 sm:px-3 py-1 rounded border-2 border-gray-400 focus:border-blue-500 focus:ring-2 sm:focus:ring-4"
                type="text"
                placeholder="example: tourist"
                onChange={(event) => setUserName(event.target.value)}
                ref={inputRef}
              />
              <button
                className="bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 text-white font-medium"
                onClick={() => {
                  getUser();
                }}
                style={{ cursor: "pointer" }}
              >
                Save Profile
              </button>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default Profile;
