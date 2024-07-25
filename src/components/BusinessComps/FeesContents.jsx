import React from "react";

const FeesContents = () => {
  return (
    <div>
      <div>
        {/* Banner Section start */}
        <section className="banner-section inner-banner fees">
          <div className="overlay">
            <div className="shape-area">
              <img
                src="assets/images/banner-fees.png"
                className="shape-1"
                alt="image"
              />
            </div>
            <div className="banner-content">
              <div className="container wow fadeInUp">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-7">
                    <div className="main-content">
                      <h1>Fees</h1>
                      <div className="breadcrumb-area">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb d-flex align-items-center">
                            <li className="breadcrumb-item">
                              <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript:void(0)">Company</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Fees
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section end */}
        {/* Pricing Plan start */}
        <section className="pricing-plan">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center">
                <div className="col-xl-7">
                  <div className="section-header text-center">
                    <h5 className="sub-title">
                      We Promise Low Fees and No Extra Charges
                    </h5>
                    <h2 className="title">
                      Start for free. Pay as you grow. Switch at any time.
                    </h2>
                    <p>
                      Open an account under your registered business name. You
                      can change or cancel your plan at any time. Billing is
                      monthly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-12">
                  <div className="nav-tabs-area mb-40">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="cmn-btn active"
                          id="company-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#company"
                          type="button"
                          role="tab"
                          aria-controls="company"
                          aria-selected="true"
                        >
                          company
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="cmn-btn"
                          id="freelancer-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#freelancer"
                          type="button"
                          role="tab"
                          aria-controls="freelancer"
                          aria-selected="false"
                        >
                          freelancer
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="company"
                      role="tabpanel"
                      aria-labelledby="company-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Free</h5>
                              <h3>€0/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>0</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>0</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>5</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€0</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Grow</h5>
                              <h3>€25/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>1</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>10</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>10</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€10k</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Scale</h5>
                              <h3>€100/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>2</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>50</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>1000</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€0</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="freelancer"
                      role="tabpanel"
                      aria-labelledby="freelancer-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Free</h5>
                              <h3>€0/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>0</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>0</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>5</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€0</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Grow</h5>
                              <h3>€25/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>1</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>10</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>10</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€10k</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 col-9">
                          <div className="pricing-single">
                            <div className="pricing-head">
                              <h5>Scale</h5>
                              <h3>€100/m</h3>
                              <div className="btn-area">
                                <a
                                  href="javascript:void(0)"
                                  className="cmn-btn"
                                >
                                  Get Started
                                </a>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <ul>
                                <li>
                                  <span>Free metal cards</span>
                                  <span>2</span>
                                </li>
                                <li>
                                  <span>Free international payments</span>
                                  <span>50</span>
                                </li>
                                <li>
                                  <span>Free local payments</span>
                                  <span>1000</span>
                                </li>
                                <li>
                                  <span>(FX) at the interbank rate</span>
                                  <span>€0</span>
                                </li>
                                <li>
                                  <span>Elite Trust Finance Pay</span>
                                  <span>1% + €0.20</span>
                                </li>
                                <li>
                                  <span>All other cards</span>
                                  <span>2.8% + €0.20</span>
                                </li>
                                <li>
                                  <span>Rewards</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Bulk payments</span>
                                  <span>×</span>
                                </li>
                                <li>
                                  <span>Business API</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Expenses</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Team member permissions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Unlimited team members</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Hold and exchange 28 currencies</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Virtual company cards</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Subscriptions</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Payment requests</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Accept payments on your website</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Marketplace</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                                <li>
                                  <span>Priority 24/7 support</span>
                                  <span>
                                    <img
                                      src="assets/images/icon/check-4.png"
                                      alt="image"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
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
        {/* Partner perks end */}
        {/* Supported Country start */}
        <section className="supported-country">
          <div className="overlay pb-120">
            <div className="container">
              <div className="main-content">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="section-text text-center">
                      <h2 className="title">
                        Join Over 500,000 Customers Worldwide
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="all-flag">
                      <ul>
                        <li>
                          <img src="assets/images/country/01.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/02.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/03.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/04.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/05.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/06.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/07.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/08.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/09.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/10.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/11.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/12.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/13.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/14.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/15.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/16.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/17.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/18.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/19.png" alt="image" />
                        </li>
                        <li>
                          <img src="assets/images/country/20.png" alt="image" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeesContents;
