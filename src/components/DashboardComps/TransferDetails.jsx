"use client";
import { profileSelector } from "@/redux/features/profile/profile-slice";
import {
  sendOtp,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TransferDetails = ({ verifyDetails, handlePrev }) => {
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = JSON.parse(transferDetails);
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { sendingOtp, sentOtpSuccess, sendOtpError } =
    useSelector(transactionSelector);
  console.log(profile, "profile");

  const handleSendOtp = () => {
    const data = { accountNo: profile?.accountNo };
    dispatch(sendOtp(data));
  };

  useEffect(() => {
    if (sentOtpSuccess) {
      verifyDetails();
    }
  }, [sentOtpSuccess]);
  return (
    <section className="dashboard-section body-collapse pay step step-2 step-3">
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
                <span className="mdr">Step 2 of 4</span>
                <h5>Confirm Your Transfer</h5>
              </div>
            </div>
            <div className="payment-details">
              <div className="row">
                <div className="col-xl-6">
                  <ul className="details-list">
                    <li>
                      <span>Amount to Send</span>
                      <b>${detailsData?.amount} USD</b>
                    </li>
                    <li>
                      <span>Recipient gets</span>
                      <b>${detailsData?.amount} USD</b>
                    </li>
                    <li>
                      <span>Account no</span>
                      <b>{detailsData?.accountNo}</b>
                    </li>
                    <li>
                      <span>Name of receiver</span>
                      <b>{detailsData?.accountName}</b>
                    </li>
                    <li>
                      <span>Transaction Fee</span>
                      <b>Free</b>
                    </li>
                    <li>
                      <span>Purpose</span>
                      <b>{detailsData?.remark}</b>
                    </li>
                    {/* <li>
                      <span>Transfer will be receive on </span>
                      <b>29 June at 10:0 PM </b>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <form action="#">
              <div className="checkbox">
                {/* <input type="checkbox" id="confirm" /> */}
                <label htmlFor="confirm">
                  By clicking Proceed payment you confirm the payment details
                  above
                </label>
              </div>
              <div className="footer-area mt-40">
                <a onClick={handlePrev} href="#">
                  Previous Step
                </a>
                <a
                  href="#"
                  className="transferMod active"
                  onClick={handleSendOtp}
                  //   data-bs-toggle="modal"
                  //   data-bs-target="#transferMod"
                >
                  {sendingOtp ? "..." : "Proceed payment"}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferDetails;
