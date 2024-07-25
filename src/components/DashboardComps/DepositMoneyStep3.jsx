import React from "react";

const DepositMoneyStep3 = () => {
  return (
    <section className="dashboard-section body-collapse pay step step-3 crypto deposit-money">
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
              <div className="col-xl-3 col-lg-4">
                <div className="left-area">
                  <ul>
                    <li>
                      <a
                        href="deposit-money.html"
                        className="single-link active"
                      >
                        Choose Payment Method
                      </a>
                    </li>
                    <li>
                      <a
                        href="deposit-money-2.html"
                        className="single-link active"
                      >
                        Enter amount
                      </a>
                    </li>
                    <li>
                      <a
                        href="deposit-money-3.html"
                        className="single-link active last"
                      >
                        Confirm Order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
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
                      <div className="col-xxl-8 col-xl-9 col-lg-12">
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
                                data-cfemail="dfb9bab3b6bcb6bef1adbab6bb9fbaa7beb2afb3baf1bcb0b2"
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
                    <a href="deposit-money-2.html">Previous Step</a>
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

export default DepositMoneyStep3;
