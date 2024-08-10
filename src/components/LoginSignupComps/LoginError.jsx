import React from "react";

const LoginError = () => {
  return (
    <section className="dashboard-section body-collapse pay step step-2 step-3 receive-3">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="request-submitted pb-120 text-center">
              <div className="top-area">
                <div className="icon-area">
                  <img
                    src="/dash-assets/images/icon/error-icon.png"
                    alt="icon"
                    style={{ marginBottom: "2rem" }}
                  />
                </div>
                <h3>Account Blocked!</h3>
                <p className="receive">
                  your account has been blocked, please contact our support
                </p>
                <a
                  style={{
                    // background: "#5a1f16",
                    padding: "10px",
                    // color: "#fff",
                    borderRadius: "8px",
                  }}
                  href="mailto:elitetrustfinance1@gmail.com"
                  className="mt-40 border-5 cmn-btn"
                >
                  contact support
                </a>
                {/* <h5>Manage payment request | Request another Payment</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginError;
