import React from "react";

const ReceiveDetails = () => {
  return (
    <section className="dashboard-section body-collapse pay step step-2 step-3 receive-3">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Request a Payment</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="choose-recipient">
              <div className="step-area">
                <span className="mdr">Step 3 of 4</span>
                <h5>Your Payment details</h5>
              </div>
            </div>
            <div className="payment-details">
              <div className="top-area">
                <h6>Payment Details</h6>
              </div>
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8">
                  <ul className="details-list">
                    <li>
                      <span>Amount</span>
                      <b>400.00 USD</b>
                    </li>
                    <li>
                      <span>Bitcoin equivalent</span>
                      <b>00009087.00 BTC</b>
                    </li>
                    <li>
                      <span>Description</span>
                      <b>Software Development</b>
                    </li>
                    <li>
                      <span>Requested as</span>
                      <b>Kevin Martin</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="attach-documents">
              <div className="top-area">
                <h6>Payment Method</h6>
                <p>
                  Copy provided bitcoin address below and send to requestor.
                </p>
                {/* <p>
                  Attact up to 5 documents ( like your invoice or work contact)
                  to your payment request.
                </p> */}
                <div className="file-upload">
                  <div className="right-area">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                      }}
                      //   className="file"
                    >
                      <h5 className="text-center">Wallet ID: 6264849965</h5>
                      {/* <input type="file" /> */}
                      {/* <span className="file-custom" /> */}
                      {/* <span className="file-custom2" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-area mt-40">
              <a href="javascript:void(0)">Preview</a>
              <a href="payment-submitted.html" className="active">
                Request Payment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveDetails;
