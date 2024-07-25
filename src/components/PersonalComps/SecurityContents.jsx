import React from "react";

const SecurityContents = () => {
  return (
    <div>
      <div>
        <section className="banner-section invoice-management security">
          <div className="overlay">
            <div className="shape-area">
              <img
                src="assets/images/security-shape-1.png"
                className="shape-1"
                alt="icon"
              />
              <img
                src="assets/images/security-shape-2.png"
                className="shape-2"
                alt="icon"
              />
              <img
                src="assets/images/security-shape-3.png"
                className="shape-3"
                alt="icon"
              />
            </div>
            <div className="banner-content">
              <div className="container wow fadeInUp">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-7">
                    <div className="main-content text-center">
                      <div className="top-area section-text dark-sec">
                        <h5 className="sub-title">Security</h5>
                        <h1 className="title">Spend With Confidence</h1>
                        <p>
                          Keep your money and payments secure with our high
                          quality tech and card protections
                        </p>
                      </div>
                      <div className="btn-area">
                        <a href="/sign-up" className="cmn-btn">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section end */}
        {/* Features start */}
        <section className="earn-cashback features">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row pb-120 align-items-center justify-content-between">
                <div className="col-md-6">
                  <div className="section-area">
                    <h5 className="sub-title">
                      Stay safe with our anti-fraud system
                    </h5>
                    <h2 className="title">
                      Your money is safeguarded by licensed banks
                    </h2>
                    <p>
                      We keep your card details safe, flag suspicious
                      transactions, and ask for extra verification to protect
                      you. Our cards are 3D Secure and our contactless card
                      limits help fight fraud
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="sec-image">
                    <img
                      src="assets/images/security-features-1.png"
                      alt="image"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-between">
                <div className="col-md-5 order-md-0 order-1">
                  <div className="sec-image">
                    <img
                      src="assets/images/security-features-2.png"
                      alt="image"
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-text">
                    <h5 className="sub-title">
                      Stay in line with company policies
                    </h5>
                    <h2 className="title">
                      Set and change team permissions with a tap
                    </h2>
                    <p>
                      Stay in total control of your team’s spending by managing
                      their permissions and levels of access. Create custom
                      roles and choose the combination of apps and features you
                      want them to use
                    </p>
                  </div>
                  <div className="btn-area">
                    <a href="/sign-up" className="cmn-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features end */}
        {/* Call Action start */}
        <section className="call-action security">
          <div className="overlay">
            <div className="container">
              <div className="main-content">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="section-text dark-sec">
                      <h5 className="sub-title">What are you waiting for?</h5>
                      <h2 className="title">
                        Get top tier security for your business today
                      </h2>
                    </div>
                    <div className="btn-area">
                      <a href="/sign-up" className="cmn-btn active">
                        Sign up in minutes
                      </a>
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

export default SecurityContents;
