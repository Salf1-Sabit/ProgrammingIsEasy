const getLoginStatus = () => {
  const isLoggedIn = localStorage.getItem("token");
  return isLoggedIn !== null;
};

export default getLoginStatus;
