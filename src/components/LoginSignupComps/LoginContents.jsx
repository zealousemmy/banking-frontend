"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoginError from "./LoginError";
const LoginContents = () => {
  const router = useRouter();
  const [blocked, setBlocked] = useState(false);
  const [errors, setErrors] = useState({});
  const [registering, setRegistering] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [password, setPassword] = useState("");

  const accountNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    const newValue = value.replace(/\D/g, "").slice(0, 10);
    setAccountNumber(newValue);
  };

  const transactionPinChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    const newValue = value.replace(/\D/g, "").slice(0, 4);
    setTransactionPin(newValue);
  };

  const passwordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("clicked");
      const formData = {
        accountNo: accountNumber,
        password: password,
        transactionPin: transactionPin,
      };
      // Submission logic here
      setRegistering(true);
      console.log("Form Data:", formData);
      const response = await axios.post(
        "https://global-link.onrender.com/user/login",
        formData
      );
      console.log(response, "response");
      setRegistering(false);
      if (response.status === 200) {
        if (response?.data?.userStatus === "blocked") {
          setBlocked(true);
        } else {
          localStorage.setItem(
            "elite-trust-finance-userid",
            response?.data?.userId
          );
          localStorage.setItem(
            "elite-trust-finance-usertoken",
            response?.data?.token
          );
          setCookie("elite-trust-finance-userid", response?.data?.userId);
          setCookie("elite-trust-finance-usertoken", response?.data?.token);
          toast(response?.data?.msg);
          router.push("/dashboard");
        }
      }
    } catch (e) {
      console.log(e?.response?.data?.msg);
      toast.error(e?.response?.data?.msg);
      setRegistering(false);
    }
  };
  return (
    <section className="login-reg">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 order-xl-0 order-1">
              <div className="sec-img d-rtl">
                <img
                  src="assets/images/login-reg-bg.png"
                  className="max-un"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-xl-5">
              {blocked && <LoginError />}
              {!blocked && (
                <>
                  <div className="section-text text-center">
                    <h5 className="sub-title">Account</h5>
                    <h2 className="title">Log in to Continue</h2>
                    <p className="dont-acc">
                      Don’t have an account? <a href="/sign-up">Sign up</a>
                    </p>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-12">
                        <div className="single-input">
                          <label htmlFor="logemail">Account Number</label>
                          <input
                            type="text"
                            onChange={accountNumberChange}
                            value={accountNumber}
                            placeholder="Enter Your Account No"
                          />
                        </div>
                        <div className="single-input">
                          <label htmlFor="logpassword">Password</label>
                          <input
                            type="text"
                            onChange={passwordChange}
                            value={password}
                            placeholder="Enter Your Password"
                          />
                        </div>
                        <div className="single-input">
                          <label>Pin</label>
                          <input
                            type="text"
                            placeholder="Enter Your Pin"
                            value={transactionPin}
                            onChange={transactionPinChange}
                          />
                        </div>
                        <button onClick={handleLogin} className="cmn-btn w-100">
                          {registering ? "login...." : "Login"}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* <div className="forgot-pass mt-30 text-center">
                <a href="javascript:void(0)">Forgot Password</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginContents;
