import React from "react";

const DepositMoneyStep2 = () => {
  return (
    <section className="dashboard-section body-collapse pay step crypto deposit-money">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="head-area d-flex align-items-center justify-content-between">
              <h4>Deposit Money</h4>
              <div className="icon-area">
                <img
                  src="/dash-assets/images/icon/support-icon.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="row justify-content-between pb-120">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="left-area">
                  <ul>
                    <li>
                      <a
                        href="deposit-money.html"
                        className="single-link active"
                      >
                        Choose Payment Method
                      </a>
                    </li>
                    <li>
                      <a
                        href="deposit-money-2.html"
                        className="single-link active"
                      >
                        Enter amount
                      </a>
                    </li>
                    <li>
                      <a
                        href="deposit-money-3.html"
                        className="single-link last"
                      >
                        Confirm Order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-7">
                <div className="table-area">
                  <form action="#">
                    <div className="send-banance">
                      <span className="mdr">How much you want to add?</span>
                      <div className="input-area">
                        <input
                          className="xxlr"
                          placeholder={400.0}
                          type="number"
                        />
                        <select>
                          <option value={1}>USD</option>
                          <option value={2}>USD</option>
                          <option value={3}>USD</option>
                        </select>
                      </div>
                      <p>
                        Available Balance<b>$30,700.00</b>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="footer-area mt-40">
                  <a href="deposit-money-1.html">Previous Step</a>
                  <a href="deposit-money-3.html" className="active">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositMoneyStep2;
