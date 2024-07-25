import React from "react";

const Nav = () => {
  return (
    <header className="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="/assets/images/elite-trust-logo-3.png"
                  className="logo"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown main-navbar">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Personal
                    </a>
                    <ul className="dropdown-menu main-menu shadow">
                      <li>
                        <a className="nav-link" href="/global-payments">
                          Global Payments
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/subscriptions">
                          Subscriptions
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/security">
                          Security
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/fees">
                          Fees
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown main-navbar">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Business
                    </a>
                    <ul className="dropdown-menu main-menu shadow">
                      <li>
                        <a className="nav-link" href="/business-accounts">
                          Business Account
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/corporate-card">
                          Corporate Card
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/expense-management">
                          Expense Management
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/budgeting">
                          Budgeting
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/security">
                          Security
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/rewards">
                          Rewards
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/fees">
                          Fees
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown main-navbar">
                    <a className="nav-link" href="/about-us">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown main-navbar">
                    <a className="nav-link" href="/help-center">
                      Help Center
                    </a>
                  </li>
                </ul>
                <div className="right-area header-action d-flex align-items-center max-un">
                  <a href="/login" className="login">
                    Login
                  </a>
                  <a href="/sign-up" className="cmn-btn">
                    Sign Up
                    <i className="icon-d-right-arrow-2" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
