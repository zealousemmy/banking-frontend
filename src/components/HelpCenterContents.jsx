import React from "react";

const HelpCenterContents = () => {
  return (
    <div>
      <div>
        <section className="banner-section help-center">
          <div className="overlay">
            <div className="banner-content">
              <div className="container wow fadeInUp">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-7">
                    <div className="main-content text-center">
                      <div className="top-area section-text dark-sec">
                        <h3 className="title">How can we help you today?</h3>
                      </div>
                      <form action="#">
                        <div className="form-group mb-40 d-flex align-items-center">
                          <img
                            src="assets/images/icon/search-icon.png"
                            alt="icon"
                          />
                          <input
                            type="text"
                            placeholder="Search Knowledge base"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section end */}
        {/* Help Center start */}
        <section className="help-center-section">
          <div className="overlay pb-120">
            <div className="container wow fadeInUp">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-12">
                  <div className="nav-tabs-area">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="cmn-btn active"
                          id="personal-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#personal"
                          type="button"
                          role="tab"
                          aria-controls="personal"
                          aria-selected="true"
                        >
                          personal
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="cmn-btn"
                          id="business-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#business"
                          type="button"
                          role="tab"
                          aria-controls="business"
                          aria-selected="false"
                        >
                          business
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content mt-40">
                    <div
                      className="tab-pane fade show active"
                      id="personal"
                      role="tabpanel"
                      aria-labelledby="personal-tab"
                    >
                      <div className="row justify-content-sm-start justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-1.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>About Elite Trust Finance</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-2.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Wallet Creation</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-3.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Adding Money</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-4.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Elite Trust Finance Cards</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-5.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Sending Money</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-6.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Account Mangament</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-7.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Adding Recipient</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="business"
                      role="tabpanel"
                      aria-labelledby="business-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-1.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>About Elite Trust Finance</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-1.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Accepting Payments</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-2.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Adding Money</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-3.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Transactions</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-4.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Deposits</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-2.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Wallet</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-1.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Refund</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/personal-icon-4.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Elite Trust Finance Cards</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-5.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Designated Bank Acc</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-6.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Payment Gateway</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-7.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>3D Secure Auth.</h5>
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-9">
                          <div className="single-box">
                            <div className="img-area">
                              <img
                                src="assets/images/icon/business-icon-8.png"
                                alt="icon"
                              />
                            </div>
                            <a href="help-center-category.html">
                              <h5>Fees and Allowance</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Help Center end */}
        {/* FAQs In start */}
        <section className="faqs-section help-center">
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-7">
                  <div className="section-header text-center">
                    <h5 className="sub-title">Frequently Asked Questions</h5>
                    <h2 className="title">
                      If you got questions we have answer
                    </h2>
                    <p>We have a list of frequently asked questions about us</p>
                  </div>
                </div>
              </div>
              <div className="row cus-mar">
                <div className="col-lg-6">
                  <div className="accordion" id="accordionLeft">
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingLeftOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseLeftOne"
                          aria-expanded="false"
                          aria-controls="collapseLeftOne"
                        >
                          How to send money online?
                        </button>
                      </h6>
                      <div
                        id="collapseLeftOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingLeftOne"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingLeftTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseLeftTwo"
                          aria-expanded="false"
                          aria-controls="collapseLeftTwo"
                        >
                          How much are money transfer fees?
                        </button>
                      </h6>
                      <div
                        id="collapseLeftTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingLeftTwo"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingLeftThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseLeftThree"
                          aria-expanded="false"
                          aria-controls="collapseLeftThree"
                        >
                          What is the fastest way to send money abroad?
                        </button>
                      </h6>
                      <div
                        id="collapseLeftThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingLeftThree"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingLeftFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseLeftFour"
                          aria-expanded="false"
                          aria-controls="collapseLeftFour"
                        >
                          How to use Elite Trust Finance?
                        </button>
                      </h6>
                      <div
                        id="collapseLeftFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingLeftFour"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingLeftFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseLeftFive"
                          aria-expanded="false"
                          aria-controls="collapseLeftFive"
                        >
                          How does Elite Trust Finance protect your money?
                        </button>
                      </h6>
                      <div
                        id="collapseLeftFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingLeftFive"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion" id="accordionRight">
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingRightOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRightOne"
                          aria-expanded="false"
                          aria-controls="collapseRightOne"
                        >
                          Are money transfer apps safe?
                        </button>
                      </h6>
                      <div
                        id="collapseRightOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingRightOne"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingRightTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRightTwo"
                          aria-expanded="false"
                          aria-controls="collapseRightTwo"
                        >
                          How much money can I send?
                        </button>
                      </h6>
                      <div
                        id="collapseRightTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingRightTwo"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingRightThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRightThree"
                          aria-expanded="false"
                          aria-controls="collapseRightThree"
                        >
                          Which currency can I send?
                        </button>
                      </h6>
                      <div
                        id="collapseRightThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingRightThree"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingRightFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRightFour"
                          aria-expanded="false"
                          aria-controls="collapseRightFour"
                        >
                          Cancel transaction
                        </button>
                      </h6>
                      <div
                        id="collapseRightFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingRightFour"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingRightFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseRightFive"
                          aria-expanded="false"
                          aria-controls="collapseRightFive"
                        >
                          Can I send multiple payments?
                        </button>
                      </h6>
                      <div
                        id="collapseRightFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingRightFive"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit posuere vel venenatis, eu sit massa. Volutpat
                            massa rhoncus odio feugiat tellus elit massa sed
                            ullamcorper a in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQs In end */}
        {/* Call Action start */}
        <section className="call-action">
          <div className="overlay pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 text-center">
                  <div className="section-text">
                    <h5 className="sub-title">Let us help you!</h5>
                    <h2 className="title">
                      Didn’t find what you were looking for?
                    </h2>
                  </div>
                  <div className="btn-area">
                    <a href="help-center.html" className="cmn-btn">
                      Submit a request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call Action end */}
      </div>
    </div>
  );
};

export default HelpCenterContents;
