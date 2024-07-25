import React from "react";

const TransferMoneySection = () => {
  return (
    <section className="dashboard-section body-collapse pay">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Make a Payment</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="row pb-120">
              <div className="col-xxl-3 col-xl-4 col-md-5">
                <a
                  href="/dashboard/interstate-bank-transfer"
                  className="single-item"
                >
                  <div className="icon-area">
                    <img
                      src="/dash-assets/images/icon/bank-account-icon.png"
                      alt="icon"
                    />
                  </div>
                  <p className="mdr">Interstate transfer</p>
                  <span className="mdr">Make interstate bank transfer</span>
                </a>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-5">
                <a
                  href="/dashboard/local-bank-transfer"
                  className="single-item"
                >
                  <div className="icon-area">
                    <img
                      src="/dash-assets/images/icon/bank-account-icon.png"
                      alt="icon"
                    />
                  </div>
                  <p className="mdr">Local transfer</p>
                  <span className="mdr">Make local bank transfer</span>
                </a>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-5">
                <a
                  href="/dashboard/international-bank-transfer"
                  className="single-item"
                >
                  <div className="icon-area">
                    <img
                      src="/dash-assets/images/icon/bank-account-icon.png"
                      alt="icon"
                    />
                  </div>
                  <p className="mdr">International transfer</p>
                  <span className="mdr">Make international bank transfer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferMoneySection;
