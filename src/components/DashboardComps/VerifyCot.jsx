"use client";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  transactionSelector,
  verifyCot,
  sendCot,
} from "@/redux/features/transaction/transaction-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import { baseUrl } from "@/constants/urls";
import axios from "axios";
import TransferSuccess from "./TransferSuccess";

const VerifyCot = ({ cotCallback, amount, accontName }) => {
  const [cot, setCot] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [sending, setSending] = useState(false);
  const [stage, setStage] = useState("verify-cot");
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = JSON.parse(transferDetails);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { sendingCot, sentCotSuccess, sendCotError } =
    useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendCot = async (e) => {
    const data = { accountNo: profile?.accountNo };
    try {
      setSending(true);
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(`${baseUrl}/user/create-Cot`, data, {
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
      });
      console.log(response, "from response update request");
      if (response.status === 200) {
        setSending(false);
        toast("Cot sent successfully!!!");
      }
    } catch (err) {
      console.log("The error", err);
      setSending(false);
    }
  };

  useEffect(() => {
    if (sentCotSuccess) {
      toast("Cot sent successfully!!!");
    }
  }, [sentCotSuccess]);

  const handleVerifyCot = async (e) => {
    e.preventDefault();
    const data = { cot: cot };
    const accountData = { accountNo: profile?.accountNo };
    setVerifying(true);
    try {
      const userAuthToken = localStorage.getItem(
        "elite-trust-finance-usertoken"
      );
      const userId = localStorage.getItem("elite-trust-finance-userid");
      console.log("data returned", data);

      const response = await axios.post(
        `${baseUrl}/user/verify-cot/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userAuthToken}`,
          },
        }
      );
      console.log(response, "from response update request");
      if (response.status === 200) {
        dispatch(sendCot(accountData));
        await cotCallback();
        setVerifying(false);
        setStage("transfer-successful")
      }
    } catch (err) {
      console.log("The error", err);
      toast.error(err?.response?.data?.msg);
      setVerifying(false);
    }
    // dispatch(verifyOtp(data));
  };
  return (
    <>
    {stage === "verify-cot" &&  <section className="dashboard-section body-collapse pay step step-2">
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
                  <span className="mdr">Step 4 of 4</span>
                  <h5>Verify COT</h5>
                </div>
              </div>
              <form action="#">
                <div className="send-banance">
                  <span className="mdr">COT</span>
                  <div className="input-area">
                    <input
                      onChange={(e) => setCot(e.target.value)}
                      className="xxlr"
                      placeholder={900099}
                      type="text"
                    />
                  </div>
                </div>
                <div className="footer-area mt-40">
                  <a href="#">Go back</a>
                  <a href="#" onClick={handleSendCot}>
                    {sending ? "sending..." : "Request Cot"}
                  </a>
                  <a
                    href="#"
                    className="active"
                    // data-bs-toggle="modal"
                    // data-bs-target="#congratulationsMod"
                    onClick={handleVerifyCot}
                  >
                    {verifying ? "verying..." : "Verify COT"}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>}
      {stage === "transfer-successful" && <TransferSuccess amount={detailsData?.amount} accountName={detailsData?.accountName} />}
      
    </>
  );
};

export default VerifyCot;
