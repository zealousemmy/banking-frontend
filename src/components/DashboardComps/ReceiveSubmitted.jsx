"use client";
import React from "react";

const ReceiveSubmitted = () => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("9099303");
      alert("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
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
            <div className="request-submitted pb-120 text-center">
              <div className="top-area">
                <div className="icon-area">
                  <img
                    src="/dash-assets/images/icon/submitted-icon.png"
                    alt="icon"
                  />
                </div>
                <h3>Request Queued</h3>
                <p className="receive">
                  Payment request approved to wallet address:
                  <span>6865154</span>
                </p>
                {/* <h5>Manage payment request | Request another Payment</h5> */}
              </div>
              <div className="share-link">
                <p>Click to copy wallet address and send to your payer</p>
                <ul className="d-flex align-items-center justify-content-center">
                  <li>
                    <a onClick={handleCopyClick} href="#">
                      <img
                        src="/dash-assets/images/icon/copy-link.png"
                        alt="icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiveSubmitted;
