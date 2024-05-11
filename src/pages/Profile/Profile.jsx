import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileSkeleton from "./ProfileSkeleton";
import RatingIcon from "../../assets/icons/ranking.png";
import ContributionIcon from "../../assets/icons/contribution.png";
import FriendsIcon from "../../assets/icons/contacts.png";
import ContestIcon from "../../assets/icons/achievement.png";
import "./profile.css";

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

const Profile = ({}) => {
  const [user, setUser] = useState(null);
  const [totalContest, setTotalContest] = useState(null);

  useEffect(() => {
    const USER_NAME = "Salfi_Sabit";
    axios
      .get(
        `https://codeforces.com/api/user.info?handles=${USER_NAME}&checkHistoricHandles=false`
      )
      .then((response) => {
        setUser(response.data.result[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`https://codeforces.com/api/user.rating?handle=${USER_NAME}`)
      .then((response) => {
        setTotalContest(response.data.result.length);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {user ? (
        <div className="profile">
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
              className="profile__description__user-name"
              style={{ color: `${RANK_COLOR[user.rank]}` }}
            >
              {user.handle}
            </h1>
            <p className="profile__description__city">
              <span style={{ color: "#0F0FCF", textDecoration: "underline" }}>
                {user.city}
              </span>
              ,{" "}
              <span style={{ color: "#0F0FCF", textDecoration: "underline" }}>
                {user.country}
              </span>
            </p>

            <p className="profile__description__organization">
              From{" "}
              <span style={{ color: "#0F0FCF", textDecoration: "underline" }}>
                {user.organization}
              </span>
            </p>

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
      ) : (
        <ProfileSkeleton />
      )}
    </>
  );
};

export default Profile;
