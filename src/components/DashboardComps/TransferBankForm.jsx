"use client";
import { formatAmount, parseFormattedAmount } from "@/hooks/formatAmount";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import { setCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransferError from "./TransferError";

const TransferBankForm = ({ handleClick }) => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [isOnHold, setIsOnHold] = useState(false);
  const [amount, setAmount] = useState("");
  const [transferData, setTransferData] = useState({
    accountName: "",
    remark: "",
  });
  const [errors, setErrors] = useState({});

  const accountNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numbers and limit to 10 digits
    const newValue = value.replace(/\D/g, "").slice(0, 10);
    setAccountNumber(newValue);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // setAmount(value);
    const numericValue = parseFloat(value.replace(/,/g, ""));

    if (!isNaN(numericValue) && numericValue <= 100000) {
      setAmount(value);
    } else if (value === "") {
      setAmount("");
      // onAmountChange("");
    }
  };

  const handleBlur = () => {
    const numericValue = parseFloat(amount.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      const formattedValue = formatAmount(numericValue);
      setAmount(formattedValue);
      handleAmountChange(numericValue > 1000000 ? 1000000 : numericValue);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setTransferData({
      ...transferData,
      [name]: value,
    });
  };

  const { profile, gettingProfile } = useSelector(profileSelector);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!transferData.accountName)
      newErrors.accountName = "Account name is required";
    if (!accountNumber) newErrors.accountNumber = "Account number is required";
    if (!amount) newErrors.amount = "Amount is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const normalAmount = parseFormattedAmount(amount);

  console.log(normalAmount, "amount");
  const handleNext = () => {
    if (validate()) {
      if (profile?.accountStatus === "hold") {
        setIsOnHold(true);
      } else {
        const transferDetails = {
          accountNo: Number(accountNumber),
          amount: normalAmount,
          remark: transferData.remark,
          accountName: transferData.accountName,
          bankName: "Elite Trust Finance",
        };

        console.log(transferDetails, "transfer details");
        localStorage.setItem(
          "elite-trust-finance-transfer-details",
          JSON.stringify(transferDetails)
        );

        setCookie(
          "elite-trust-finance-transfer-details",
          JSON.stringify(transferDetails)
        );

        handleClick();
      }
    }
  };
  return (
    <>
      {isOnHold ? (
        <TransferError />
      ) : (
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
                    <span className="mdr">Step 1 of 4</span>
                    <h5>Interstate transfer</h5>
                  </div>
                </div>
                <>
                  <div className="send-banance">
                    <span className="mdr">Account Number</span>
                    <div className="input-area">
                      <input
                        className="xxlr"
                        placeholder={"9099900999"}
                        type="text"
                        maxLength={10}
                        value={accountNumber}
                        onChange={accountNumberChange}
                      />
                    </div>
                    {errors.accountNumber && (
                      <p className="text-danger mb-4 ">
                        {errors.accountNumber}
                      </p>
                    )}
                    <span className="mdr">Account Name</span>
                    <div className="input-area">
                      <input
                        name="accountName"
                        value={transferData.accountName}
                        onChange={handleChange}
                        className="xxlr"
                        placeholder={"Account name"}
                        type="text"
                      />
                    </div>
                    {errors.accountName && (
                      <p className="text-danger mb-4 ">{errors.accountName}</p>
                    )}
                    <span className="mdr">Amount (max-limit is $100,000)</span>
                    <div className="input-area">
                      <input
                        value={amount}
                        onChange={handleAmountChange}
                        onBlur={handleBlur}
                        className="xxlr"
                        placeholder={400.0}
                        type="text"
                      />
                    </div>
                    {errors.amount && (
                      <p className="text-danger mb-4 ">{errors.amount}</p>
                    )}

                    <span className="mdr">Description</span>
                    <div className="input-area">
                      <input
                        name="remark"
                        onChange={handleChange}
                        value={transferData.remark}
                        className="xxlr"
                        placeholder={"Description"}
                        type="text"
                      />
                    </div>
                    <p>
                      Available Balance
                      <b>${formatAmount(`${profile?.accountBalance}`)}</b>
                    </p>
                  </div>
                  <ul className="total-fees">
                    <li>Total Fees</li>
                    <li>Free</li>
                  </ul>
                  <ul className="total-fees pay">
                    <li>
                      <h5>Total To Pay</h5>
                    </li>
                    <li>
                      <h5>{amount} USD</h5>
                    </li>
                  </ul>
                  <div className="footer-area mt-40">
                    <a href="/dashboard/transfer-money">Go back</a>
                    <a href="#" onClick={handleNext} className="active">
                      Make Transfer
                    </a>
                  </div>
                </>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TransferBankForm;
