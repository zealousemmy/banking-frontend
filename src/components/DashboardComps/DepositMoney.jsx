import React from "react";
import DepositMoneyStep1 from "./DepositMoneyStep1";
import AddCardModal from "./modals/AddCardModal";
import DepositMoneyStep2 from "./DepositMoneyStep2";
import DepositMoneyStep3 from "./DepositMoneyStep3";
import CongratsModal from "./modals/CongratsModal";

const DepositMoney = () => {
  return (
    <div>
      {/* <DepositMoneyStep1 /> */}
      {/* <DepositMoneyStep2 /> */}
      <DepositMoneyStep3 />
      <AddCardModal />
      <CongratsModal />
    </div>
  );
};

export default DepositMoney;
