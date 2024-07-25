import React from "react";
import WithdrawFundsStep1 from "./WithdrawFundsStep1";
import AddCardModal from "./modals/AddCardModal";
import WithdrawFundsStep2 from "./WithdrawFundsStep2";
import WithdrawFundsStep3 from "./WithdrawFundsStep3";

const WithdrawFunds = () => {
  return (
    <div>
      {/* <WithdrawFundsStep1 /> */}
      {/* <WithdrawFundsStep2 /> */}
      <WithdrawFundsStep3 />
      <AddCardModal />
    </div>
  );
};

export default WithdrawFunds;
