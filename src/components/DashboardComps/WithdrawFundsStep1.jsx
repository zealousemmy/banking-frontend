import React from "react";

const WithdrawFundsStep1 = () => {
  return (
    <section className="dashboard-section body-collapse pay step deposit-money withdraw-money">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Withdraw Funds</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="row pb-120">
              <div className="col-md-8">
                <div className="table-area">
                  <div className="head-item">
                    <h6>Linked Payment system</h6>
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
                  <a href="withdraw-money-step-2.html" className="active">
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

export default WithdrawFundsStep1;
