import React from "react";

const CongratsModal = () => {
  return (
    <div className="congratulations-popup purchased-popup">
      <div className="container-fruid">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="modal fade"
              id="congratulationsMod"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <div className="main-content text-center pt-120 pb-120">
                    <img
                      className="mb-60"
                      src="/dash-assets/images/icon/success.png"
                      alt="icon"
                    />
                    <h4 className="mb-30">Congratulations</h4>
                    <p>
                      You have successfully add fund your account for $400.00
                      USD
                    </p>
                    <a href="/dashboard" className="mt-40">
                      Back to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
