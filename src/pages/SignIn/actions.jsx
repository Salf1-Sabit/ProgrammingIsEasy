import axios from "axios";
import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  console.log("username: ", username);
  console.log("password: ", password);

  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";

  try {
    const getToken = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });

    const token = getToken.data.token;
    localStorage.setItem("token", token);

    const allUsers = (await axios.get("https://fakestoreapi.com/users")).data;

    const foundUser = await allUsers.filter(
      (userData) => userData.username === username
    )[0];

    const curUserData = {
      userName: foundUser.username,
      address: foundUser.address,
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem("user", JSON.stringify(curUserData));

    return redirect(`${redirectTo}?loginSuccess=true`);
  } catch (error) {
    const errorRedirectTo = `/signin?error=true`;
    return redirect(errorRedirectTo);
  }
};

export default loginAction;
