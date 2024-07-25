"use client";

import React, { useState } from "react";
import TransferBankForm from "./TransferBankForm";
import TransferDetails from "./TransferDetails";
import VerifyOtp from "./VerifyOtp";
import VerifyCot from "./VerifyCot";
import CongratsModal from "./modals/CongratsModal";
import TransferLocalBankForm from "./TransferLocalBankForm";
import TransferInternationalBankForm from "./TransferInternationalBankForm";
import { useDispatch } from "react-redux";
import { getCookie } from "cookies-next";
import { createTransfer } from "@/redux/features/transaction/transaction-slice";

const TransferToInternationalBank = () => {
  const [currentStep, setCurrentStep] = useState("transfer-form");
  const transferDetails = getCookie("elite-trust-finance-transfer-details");
  const detailsData = transferDetails ? JSON.parse(transferDetails) : "";
  const dispatch = useDispatch();

  const handleTransfer = () => {
    setCurrentStep("transfer-details");
  };
  const verifyDetails = () => {
    setCurrentStep("verify-otp");
  };

  const otpCallback = () => {
    setCurrentStep("verify-cot");
  };

  const cotCallback = async () => {
    const requiredDetails = { ...detailsData };
    dispatch(createTransfer(requiredDetails));
  };
  return (
    <div>
      {currentStep === "transfer-form" && (
        <TransferInternationalBankForm handleClick={handleTransfer} />
      )}
      {currentStep === "transfer-details" && (
        <TransferDetails verifyDetails={verifyDetails} />
      )}
      {currentStep === "verify-otp" && <VerifyOtp otpCallback={otpCallback} />}

      {currentStep === "verify-cot" && <VerifyCot cotCallback={cotCallback} />}
      <CongratsModal />
    </div>
  );
};

export default TransferToInternationalBank;
