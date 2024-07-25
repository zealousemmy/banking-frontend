import React from "react";

const ReceiveForm = () => {
  return (
    <section className="dashboard-section body-collapse pay step step-2 receive-2">
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
                <span className="mdr">Step 1 of 4</span>
                <h5>Payment Details</h5>
              </div>
            </div>
            <form action="#">
              <div className="send-banance">
                <span className="mdr">Amount</span>
                <div className="input-area">
                  <input className="xxlr" placeholder={400.0} type="number" />
                  <span>
                    <option value={1}>USD</option>
                  </span>
                </div>
                <span className="mdr">Bitcoin Equivalent</span>
                <div className="input-area">
                  <input
                    className="xxlr"
                    placeholder={"0005.0"}
                    type="number"
                  />
                  <span>
                    <option value={1}>Bitcoin</option>
                  </span>
                </div>
              </div>
              <div className="input-field row">
                <div className="col-md-12">
                  <div className="single-input">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      id="description"
                      placeholder="Software Development"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input">
                    <label htmlFor="dueBy">Payment due by</label>
                    <input type="text" id="dueBy" placeholder="29/12/2022" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input">
                    <label htmlFor="request">Request Payment as</label>
                    <input
                      type="text"
                      id="request"
                      placeholder="Kevin Martin"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-area mt-40">
                {/* <a href="receive-step-1.html">Previous Step</a> */}
                <a href="#" className="active">
                  Continue
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveForm;
