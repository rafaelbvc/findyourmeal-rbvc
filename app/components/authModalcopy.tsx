"use client";

import { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInput from "./authModalInput";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import LinearDeterminate from "./loadingMui";
import { Alert } from "@mui/material";
import signInSignUpModal from "./signInSignUpModal";

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const { signin, signup } = useAuth();
  const { loading, error } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setIsVisible(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setIsVisible(false);
  // const handleClose = () => setOpen(false);
  const [disabled, setDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const validEmail = new RegExp(
    "^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$"
  );
  const validPhone = new RegExp(
    "([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})"
  );
  const validPassword = new RegExp(
    "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$"
  );

  const handleSigninSignup = (signInContent: string, signUpContent: string) => {
    return isSignin ? signInContent : signUpContent;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (isSignin) {
      signin(
        { email: inputData.email, password: inputData.password },
        handleClose
      );
    } else {
      signup(inputData, handleClose);
    }
  };

  useEffect(() => {
    if (isSignin) {
      if (inputData.password && inputData.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputData.firstName &&
        inputData.lastName &&
        inputData.city &&
        validPhone.test(inputData.phone) &&
        validEmail.test(inputData.email) &&
        validPassword.test(inputData.password)
      ) {
        return setDisabled(false);
      }
    }
    return setDisabled(true);
  }, [inputData]);

  return (
    <>
      <div>
        <button
          className={`${handleSigninSignup(
            "text-white bg-blue-400 hover:bg-gray-200 rounded max-w-sm  py-1 px-3 mx-1 sm:min-w-[9.45rem] sm:max-w-[12.2rem] md:min-w-[6.249rem] md:max-w-[6.25rem]",
            "text-white bg-gray-300 hover:bg-blue-200 rounded max-w-sm  py-1  sm:min-w-[9.45rem] sm:max-w-[12.2rem] md:min-w-[6.249rem] md:max-w-[6.25rem]"
          )} `}
          // onClick={handleOpen}
          onClick={handleOpen}
        >
          {handleSigninSignup("Sign in", "Sign up")}
        </button>
        {/* <signInSignUpModal /> */}
      </div>
      {!isVisible ? null : (
        // <div className="flex justify-center w-screen h-screen bg-transparent z-999 float" onClick={handleClose}>
        <div className=" md:hidden absolute rounded  translate-x-[-50%] translate-y-[-50%] mt-[50%] ml-[50%]  sm:w-[19rem] sm:h-[26rem] sm:p-3  bg-white">
          <div>
            <h2 className="text-2xl sm:text-reg font-light text-center">
              {handleSigninSignup(
                "Log Into Your Account",
                "Create Your OpenTable Account"
              )}
            </h2>
            <input />
            <button onClick={handleClose}>click me!</button>
          </div>
        </div>
      //  </div>
      )}
    </>
  );
}

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "25rem",
//   height: "40rem",
//   bgcolor: "background.paper",
//   border: "0.1rem solid #000",
//   boxShadow: "25rem",
//   p: 4,
//   textAlign: "center",
// };

{
  /* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="px-0.5 pt-10 w-[25rem] h-[40rem] flex ">
              <LinearDeterminate />
            </div>
          ) : (
            <div className="p-2">
              {error ? (
                <Alert severity="error" className="mb-4">
                  {error}
                </Alert>
              ) : null}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {handleSigninSignup("SING IN", "CREATE ACCOUNT")}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  {handleSigninSignup(
                    "Log Into Your Account",
                    "Create Your OpenTable Account"
                  )}
                </h2>
                <AuthModalInput
                  inputData={inputData}
                  handleChangeInput={handleChangeInput}
                  isSignin={isSignin}
                />
                <button
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400 hover:bg-red-700"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {handleSigninSignup("Sign In", "Create Account")}
                </button>
                {inputData.email.length &&
                validEmail.test(inputData.email) === false &&
                isSignin === false ? (
                  <div className="text-red-600 text-reg">Invalid Email</div>
                ) : inputData.phone &&
                  validPhone.test(inputData.phone) === false ? (
                  <div className="text-red-600 text-reg">Invalid Phone</div>
                ) : inputData.password &&
                  validPassword.test(inputData.password) === false &&
                  isSignin === false ? (
                  <div className="text-red-600 text-reg">
                    Password must contain at least eight characters, one
                    uppercase letter, one lowercase letter, one number and one
                    special character
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </Box>
      </Modal> */
}
