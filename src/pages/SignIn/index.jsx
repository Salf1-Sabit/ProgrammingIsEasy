/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AuthInput from "../../components/UI/Input/AuthInput";
import AuthImage from "../../assets/images/sideImage.jpg";
import Wrapper from "../../components/UI/Wrapper";
import SignInSchema from "../../schema/signin";

import {
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import { SnackbarContext } from "../../components/store/SnackbarContext";

import AlreadyLoggedInMessage from "../../components/UI/AlreadyLoggedInMessage";
import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import getUserFullName from "../../utils/getUserFullName";

const SignIn = () => {
  const location = useLocation();
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { handleSnackbarClick } = React.useContext(SnackbarContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const loaderData = useLoaderData();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const redirectTo = location?.state?.from?.pathname || "/";
    submit(formData, {
      method: "post",
      action: `/signin?redirectTo=${encodeURIComponent(redirectTo)}`,
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.get("loginSuccess")) {
      const userFullName = getUserFullName();

      handleSnackbarClick(`${userFullName}, successfully logged in`, "success");
      window.history.replaceState({}, document.title, location.pathname); // Clear URL params
    }

    if (searchParams.get("error")) {
      handleSnackbarClick(`Invalid credentials, please try again!`, "error");
      window.history.replaceState({}, document.title, location.pathname); // Clear URL params
    }
  }, [location.search, location.pathname, handleSnackbarClick]);

  if (loaderData && loaderData.showAlreadyLoggedInMessage) {
    return <AlreadyLoggedInMessage />;
  }

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 100 }} open={isSubmitting}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Wrapper>
        <div className="flex justify-around  min-h-[65vh] my-[12%]">
          <img
            src={AuthImage}
            alt="hello"
            className="w-1/2 hidden lg:block rounded-md object-cover"
          />
          <div className="w-96 my-auto">
            <div className="w-full flex flex-col items-start gap-4 mb-12 ">
              <h1 className="text-[22px] sm:text-[32px] lg:text-4xl leading-[24px] sm:leading-[30px] lg:leading-[40px] font-bold">
                Log in to ProgrammingIsEasy
              </h1>
              <p className="text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] font-bold">
                Enter your details below
              </p>
            </div>
            <form
              className="flex flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <AuthInput
                placeholder="Username"
                type="text"
                name="username"
                register={register}
                errors={errors}
              />
              <AuthInput
                placeholder="Password"
                type="password"
                name="password"
                register={register}
                errors={errors}
              />
              <div className="flex mt-6 flex-col sm:flex-row">
                <button
                  // className=" w-full mb-2"
                  className="bg-[#00D1B2] text-sm md:text-base rounded px-3 sm:px-5 text-white font-medium w-full mb-2 text-center hover:bg-[#00b096] transition-all duration-200 py-[.4em]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
                <Link
                  to="/signin"
                  className=" bg-white-900 ml-2 text-gray-300 mb-2 font-semibold text-[12px] 
            sm:text-sm lg:text-[16px] sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 text-nowrap "
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
            <p className="mx-auto text-[14px] sm:text-[18px] leading-[10px] sm:leading-[14px] lg:leading-[18px] mt-8">
              Don't have an account?{" "}
              <NavLink to="/signup" className="underline">
                <span className="font-semibold">Sign up</span>
              </NavLink>
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignIn;
