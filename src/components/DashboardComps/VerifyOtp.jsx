"use client";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  transactionSelector,
  verifyOtp,
  sendOtp, sendCot
} from "@/redux/features/transaction/transaction-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "@/constants/urls";
import axios from "axios";

const VerifyOtp = ({ otpCallback }) => {
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { sendingOtp, sentOtpSuccess, sendOtpError } =
    useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendOtp = async (e) => {
    const data = { accountNo: profile?.accountNo };
    try {
      setSending(true)
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(`${baseUrl}/user/create-otp`, data, {
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
      });
      console.log(response, "from response update request");
      if(response.status === 200){
        setSending(false);
        toast("otp sent successfully!!!");
      }
    } catch (err) {
      console.log("The error", err);
      setSending(false)
    }
  };

  useEffect(() => {
    if (sentOtpSuccess) {
      toast("otp sent successfully!!!");
    }
  }, [sentOtpSuccess]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const data = { otp: otp };
    const accountData = { accountNo: profile?.accountNo };
    setVerifying(true);
    try {
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(
        `${baseUrl}/user/verify/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userAuthToken}`,
          },
        }
      );
      console.log(response, "from response update request");
      if (response.status === 200) {
        setVerifying(false);
        dispatch(sendCot(accountData))
        otpCallback();
      }
    } catch (err) {
      console.log("The error", err);
      toast.error(err?.response?.data?.msg);
      setVerifying(false);
    }
    // dispatch(verifyOtp(data));
  };

  return (
    <section className="dashboard-section body-collapse pay step step-2">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Make a Payment</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="choose-recipient">
              <div className="step-area">
                <span className="mdr">Step 3 of 4</span>
                <h5>Verify OTP</h5>
              </div>
            </div>
            <form action="#">
              <div className="send-banance">
                <span className="mdr">OTP</span>
                <div className="input-area">
                  <input
                    onChange={(e) => setOtp(e.target.value)}
                    className="xxlr"
                    placeholder={900099}
                    type="text"
                  />
                </div>
              </div>
              <div className="footer-area mt-40">
                <a href="#">Go back</a>
                <a href="#" onClick={handleSendOtp}>
                 {sending ? "sending..." :"Request Otp"}
                </a>
                <a href="#" onClick={handleVerifyOtp} className="active">
                  {verifying ? "verifying..." : "Verify OTP"}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
