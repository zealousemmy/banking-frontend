import React from "react";

const DepositMoneyStep1 = () => {
  return (
    <section className="dashboard-section body-collapse pay step crypto deposit-money">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Deposit Money</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="row justify-content-between pb-120">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="left-area">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="single-link active"
                      >
                        Choose Payment Method
                      </a>
                    </li>
                    <li>
                      <a
                        href="deposit-money-2.html"
                        className="single-link two"
                      >
                        Enter amount
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="single-link last">
                        Confirm Order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="table-area">
                  <div className="head-area">
                    <h4>Linked Payment system</h4>
                  </div>
                  <div className="card-area d-flex flex-wrap">
                    <div className="single-card">
                      <input
                        type="radio"
                        defaultChecked
                        name="cardSelect"
                        id="visa"
                      />
                      <label htmlFor="visa">
                        <span className="wrapper" />
                        <img
                          src="/dash-assets/images/visa-card.png"
                          alt="image"
                        />
                      </label>
                    </div>
                    <div className="single-card">
                      <input type="radio" name="cardSelect" id="paypal" />
                      <label htmlFor="paypal">
                        <span className="wrapper" />
                        <img
                          src="/dash-assets/images/paypal-card.png"
                          alt="image"
                        />
                      </label>
                    </div>
                    <div className="single-card">
                      <input type="radio" name="cardSelect" id="paylio" />
                      <label htmlFor="paylio">
                        <span className="wrapper" />
                        <img
                          src="/dash-assets/images/paylio-card.png"
                          alt="image"
                        />
                      </label>
                    </div>
                    <div className="single-card">
                      <input type="radio" name="cardSelect" id="blockchain" />
                      <label htmlFor="blockchain">
                        <span className="wrapper" />
                        <img
                          src="/dash-assets/images/blockchain-card.png"
                          alt="image"
                        />
                      </label>
                    </div>
                    <div className="single-card">
                      <button
                        type="button"
                        className="reg w-100 p-0"
                        data-bs-toggle="modal"
                        data-bs-target="#addcardMod"
                      >
                        <img
                          src="/dash-assets/images/add-new.png"
                          alt="image"
                          className="w-100"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="footer-area mt-40">
                  <a href="javascript:void(0)">Previous Step</a>
                  <a href="deposit-money-2.html" className="active">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositMoneyStep1;
