import React from "react";

const WithdrawFundsStep2 = () => {
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
            <div className="choose-recipient">
              <div className="step-area">
                <span className="mdr">Step 2 of 3</span>
                <h5>Set Amount of transfer</h5>
              </div>
            </div>
            <div className="row pb-120">
              <div className="col-md-7">
                <div className="table-area">
                  <form action="#">
                    <div className="send-banance">
                      <span className="mdr">How much you want to add?</span>
                      <div className="input-area">
                        <input
                          className="xxlr"
                          placeholder={400.0}
                          type="number"
                        />
                        <span>
                          <option value={1}>USD</option>
                        </span>
                      </div>
                      <p>
                        Available Balance<b>$30,700.00</b>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="footer-area mt-40">
                  <a href="withdraw-money-step-1.html">Previous Step</a>
                  <a href="withdraw-money-step-3.html" className="active">
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

export default WithdrawFundsStep2;
