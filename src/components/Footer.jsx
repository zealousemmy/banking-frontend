import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="newsletter">
              <div className="section-area mb-30 dark-sec text-center">
                <h3 className="title">Subscribe to Our Newsletter</h3>
              </div>
              <form action="#">
                <div className="form-group d-flex align-items-center">
                  <input type="text" placeholder="Your Email Address" />
                  <button>
                    <img
                      src="assets/images/icon/arrow-right-2.png"
                      alt="icon"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-area pt-120">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start">
                <div className="menu-item">
                  <ul className="footer-link d-flex align-items-center">
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/help-center">Support</a>
                    </li>
                    <li>
                      <a href="/fees">Fees</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                {/* <div className="social-link d-flex justify-content-sm-end justify-content-center align-items-center">
                  <a href="javascript:void(0)">
                    <img src="assets/images/icon/facebook.png" alt="icon" />
                  </a>
                  <a href="javascript:void(0)">
                    <img src="assets/images/icon/linkedin.png" alt="icon" />
                  </a>
                  <a href="javascript:void(0)">
                    <img src="assets/images/icon/instagram.png" alt="icon" />
                  </a>
                  <a href="javascript:void(0)">
                    <img src="assets/images/icon/twitter.png" alt="icon" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6 col-sm-8 d-flex justify-content-center justify-content-sm-start order-sm-0 order-1">
                <div className="copyright text-center text-sm-start">
                  <p>
                    {" "}
                    Copyright © 2025 <a href="/">First Credit Choice.</a> All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-4">
                <div className="menu-item">
                  <ul className="footer-link d-flex justify-content-sm-end justify-content-center align-items-center">
                    <li>
                      <a href="/terms-conditions">Terms</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
