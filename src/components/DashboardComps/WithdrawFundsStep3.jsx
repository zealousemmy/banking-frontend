import React from "react";

const WithdrawFundsStep3 = () => {
  return (
    <section className="dashboard-section body-collapse pay step step-3 deposit-money withdraw-money">
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
                <span className="mdr">Step 3 of 3</span>
                <h5>Set Amount of transfer</h5>
              </div>
            </div>
            <div className="row pb-120">
              <div className="col-lg-8 col-md-10">
                <form action="#">
                  <div className="payment-details">
                    <div className="top-area">
                      <h6>Confirm account &amp; amount</h6>
                      <div className="right">
                        <a href="javascript:void(0)">
                          <i className="icon-h-edit" />
                          Edit
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xxl-8 col-xl-10 col-12">
                        <ul className="details-list">
                          <li>
                            <span>Payment System</span>
                            <b>Paypal</b>
                          </li>
                          <li>
                            <span>Paypal Payment Card</span>
                            <b>**** **** **** 1182</b>
                          </li>
                          <li>
                            <span>You will receive</span>
                            <b>400.00 USD</b>
                          </li>
                          <li>
                            <span>Fee</span>
                            <b>1 USD</b>
                          </li>
                          <li>
                            <span>E-mail</span>
                            <b>
                              <a
                                href="https://pixner.net/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="147271787d777d753a66717d7054716c75796478713a777b79"
                              >
                                [email&nbsp;protected]
                              </a>
                            </b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="checkbox-area mt-40 d-flex align-items-center justify-content-center">
                    <input type="checkbox" id="accept" name="accept" />
                    <label htmlFor="accept">
                      I accept <a href="javascript:void(0)">terms of use</a>
                    </label>
                  </div>
                  <div className="footer-area mt-40">
                    <a href="withdraw-money-step-2.html">Previous Step</a>
                    <a
                      href="javascript:void(0)"
                      className="active"
                      data-bs-toggle="modal"
                      data-bs-target="#congratulationsMod"
                    >
                      Next
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawFundsStep3;
