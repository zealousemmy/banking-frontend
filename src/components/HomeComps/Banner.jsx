import React from "react";

const Banner = () => {
  return (
    <section className="banner-section index">
      <div className="overlay">
        <div className="shape-area">
          <img
            src="assets/images/banner-box.png"
            className="obj-1"
            alt="image"
          />
          <img
            src="assets/images/banner-human.png"
            className="obj-2"
            alt="image"
          />
          <img
            src="assets/images/banner-rocket.png"
            className="obj-3"
            alt="image"
          />
          <img
            src="assets/images/banner-clock.png"
            className="obj-4"
            alt="image"
          />
        </div>
        <div className="banner-content">
          <div className="container wow fadeInUp">
            <div className="content-shape">
              <img
                src="assets/images/banner-wallet.png"
                className="obj-1"
                alt="image"
              />
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="main-content">
                  <div className="top-area section-text">
                    <h5 className="sub-title">Trusted by over 3M customers</h5>
                    <h1 className="title">Pay Anyone, Anywhere</h1>
                    <p className="xlr">
                      Quickly and easily send, receive and request money online
                      with Elite Trust Finance. Get a customised solution to fit
                      your business needs.
                    </p>
                  </div>
                  <div className="bottom-area d-xxl-flex">
                    <a href="/sign-up" className="cmn-btn">
                      Open a Free Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-md-6">
                <div className="send-money">
                  <form action="#">
                    <div className="currency-area">
                      <div className="left-side">
                        <span className="mdr">You send</span>
                        <input
                          type="text"
                          className="xlr"
                          placeholder="Enter Amount"
                          defaultValue={1000}
                        />
                      </div>
                      <div className="right-side">
                        <select>
                          <option value={1}>USD</option>
                          <option value={2}>GBP</option>
                          <option value={3}>AUS</option>
                        </select>
                      </div>
                    </div>
                    <div className="calculation">
                      <div className="head-area">
                        <img
                          src="assets/images/icon/conversion.png"
                          alt="image"
                        />
                        <span className="mdr highlight">Show calculation</span>
                      </div>
                      <div className="calculation-details">
                        <div className="single-area d-flex align-items-center">
                          <div className="left-area">
                            <i className="fas fa-minus" />
                            <span className="mdr">10.04 USD</span>
                          </div>
                          <div className="right-area">
                            <span className="mdr">Our fee</span>
                          </div>
                        </div>
                        <div className="single-area d-flex align-items-center">
                          <div className="left-area">
                            <i className="fas fa-equals" />
                            <span className="mdr">989.96 USD</span>
                          </div>
                          <div className="right-area">
                            <span className="mdr">We’ll Convert</span>
                          </div>
                        </div>
                        <div className="single-area d-flex align-items-center">
                          <div className="left-area">
                            <i className="fas fa-times" />
                            <span className="mdr">1.3947</span>
                          </div>
                          <div className="right-area">
                            <span className="mdr highlight">
                              Elite Trust Finance Rate
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="currency-area">
                      <div className="left-side">
                        <span className="mdr">Recipient gets</span>
                        <h5>1,380.69</h5>
                      </div>
                      <div className="right-side recipient">
                        <select>
                          <option value={1}>AUS</option>
                          <option value={2}>USD</option>
                          <option value={3}>GBP</option>
                        </select>
                      </div>
                    </div>
                    <div className="btn-area mt-40">
                      <a href="/sign-up" className="cmn-btn w-100">
                        Get Started
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section">
        <div className="container wow fadeInUp">
          <div className="row cus-mar">
            <div className="col-xl-3 col-md-3 col-sm-6">
              <div className="single-area d-flex align-items-center justify-content-center">
                <div className="text-area text-center">
                  <h2>
                    <span className="counter">50</span>
                    <span>+</span>
                  </h2>
                  <p>Supported Currencies</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-6">
              <div className="single-area d-flex align-items-center justify-content-center">
                <div className="text-area text-center">
                  <h2>
                    <span className="counter">100</span>
                    <span>+</span>
                  </h2>
                  <p>Available Countries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-6">
              <div className="single-area d-flex align-items-center justify-content-center">
                <div className="text-area text-center">
                  <h2>
                    <span className="counter">70</span>
                    <span>+</span>
                  </h2>
                  <p>Payment Methods</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-sm-6">
              <div className="single-area d-flex align-items-center justify-content-center">
                <div className="text-area text-center">
                  <h2>
                    <span className="counter">7</span>
                    <span>/</span>
                    <span className="counter">24</span>
                    <span>+</span>
                  </h2>
                  <p>Support Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
