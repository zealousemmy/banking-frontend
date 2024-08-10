"use client";
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import { getCookie, deleteCookie } from "cookies-next";
import {
  getTransfers,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import { formatAmount, formatTime } from "@/hooks/formatAmount";

const DashHeader = () => {
  // const authenticated = window ? window.localStorage.getItem("elite-trust-finance-usertoken")
  //   : "";
  const router = useRouter();
  const authenticated = getCookie("elite-trust-finance-usertoken");
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);

  useLayoutEffect(() => {
    const isAuth = authenticated;
    if (!isAuth) {
      redirect("/login");
    }
  }, []);

  const handleLogout = () => {
    console.log("clicked now");
    localStorage.removeItem("elite-trust-finance-usertoken");
    localStorage.removeItem("elite-trust-finance-userid");
    deleteCookie("elite-trust-finance-usertoken");
    deleteCookie("elite-trust-finance-userid");
    router.push("/login");
  };

  function displayInitials(fullName) {
    var names = fullName.split(" ");
    var initials = "";

    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      initials += name[0];
    }

    return initials;
  }

  const firstFourItems = transactions.length > 0 && transactions?.slice(0, 4);
  console.log("user profile", profile);
  const userInitials = displayInitials(
    `${profile?.firstName} ${profile?.lastName}`
  );

  return (
    <>
      <header className="header-section body-collapse">
        <div className="overlay">
          <div className="container-fruid">
            <div className="row d-flex header-area">
              <div className="navbar-area d-flex align-items-center justify-content-between">
                <div className="sidebar-icon">
                  <img src="/dash-assets/images/icon/menu.png" alt="icon" />
                </div>
                <form action="#" className="flex-fill">
                  <div className="form-group d-flex align-items-center">
                    <img src="/dash-assets/images/icon/search.png" alt="icon" />
                    <input type="text" placeholder="Type to search..." />
                  </div>
                </form>
                <div className="dashboard-nav">
                  <div className="single-item notifications-area">
                    <div className="notifications-btn">
                      <img
                        src="/dash-assets/images/icon/bell.png"
                        className="bell-icon"
                        alt="icon"
                      />
                    </div>
                    <div className="main-area notifications-content">
                      <div className="head-area d-flex justify-content-between">
                        <h5>Notifications</h5>
                        <span className="mdr">{transactions?.length}</span>
                      </div>
                      <ul>
                        {transactions.length === 0 && (
                          <>
                            <li>No notification found</li>
                          </>
                        )}
                        {transactions.length > 0 &&
                          firstFourItems.map((item) => (
                            <li>
                              <a href="javascript:void(0)" className="d-flex">
                                <div className="text-area">
                                  <p className="mdr">
                                    Transaction of{" "}
                                    <b>${formatAmount(`${item?.amount}`)}</b>{" "}
                                    <br />
                                    Account Name: <b>{item?.accountName}</b>
                                  </p>
                                  <p className="mdr time-area">
                                    {formatTime(`${item?.createdAt}`)}
                                  </p>
                                </div>
                              </a>
                              {/* <i className="fa-solid fa-caret-right" /> */}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="single-item user-area">
                    <div className="profile-area d-flex align-items-center">
                      <span className="user-profile">
                        {/* <div> */}
                        {!profile?.image ? (
                          <div className="userProfileImageText2">
                            <h3>{userInitials}</h3>
                          </div>
                        ) : (
                          <img src={`${profile?.image}`} alt="image" />
                        )}
                        {/* </div> */}
                        {/* <img src="/dash-assets/images/avatar.png" alt="User" /> */}
                      </span>
                      <i className="fa-solid fa-sort-down" />
                    </div>
                    <div className="main-area user-content">
                      <div className="head-area d-flex align-items-center">
                        <div className="profile-img">
                          {!profile?.image ? (
                            <div className="userProfileImageText2">
                              <h3>{userInitials}</h3>
                            </div>
                          ) : (
                            <img className="profile-pics" src={`${profile?.image}`} alt="image" />
                          )}
                        </div>
                        {/* <div className="profile-img">
                          <img
                            src="/dash-assets/images/avatar-2.png"
                            alt="User"
                          />
                        </div> */}
                        <div className="profile-head">
                          <a href="javascript:void(0)">
                            <h5>{`${profile?.firstName} ${profile?.lastName}`}</h5>
                          </a>
                          <p className="wallet-id">Wallet ID: 6264849965</p>
                        </div>
                      </div>
                      <ul>
                        <li className="border-area">
                          <a href="/dashboard/account">
                            <i className="fas fa-cog" />
                            Settings
                          </a>
                        </li>
                        <li>
                          <button onClick={handleLogout}>
                            <i className="fas fa-sign-out" />
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-wrapper">
                <div className="close-btn">
                  <i className="fa-solid fa-xmark" />
                </div>
                <div className="sidebar-logo">
                  <a href="/dashboard">
                    <img
                      src="/dash-assets/images/elite-trust-logo-3.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <ul>
                  <li className="active">
                    <a href="/dashboard">
                      <img
                        src="/dash-assets/images/icon/dashboard.png"
                        alt="Dashboard"
                      />{" "}
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/transactions">
                      <img
                        src="/dash-assets/images/icon/transactions.png"
                        alt="Transactions"
                      />{" "}
                      <span>Transactions</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/transfer-money">
                      <img src="/dash-assets/images/icon/pay.png" alt="Pay" />{" "}
                      <span>Send Money</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/receive">
                      <img
                        src="/dash-assets/images/icon/receive.png"
                        alt="Receive"
                      />
                      <span>Receive</span>
                    </a>
                  </li>
                </ul>
                <ul className="bottom-item">
                  <li>
                    <a href="/dashboard/account">
                      <img
                        src="/dash-assets/images/icon/account.png"
                        alt="Account"
                      />{" "}
                      <span>Account</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="/dash-assets/images/icon/support.png"
                        alt="Support"
                      />{" "}
                      <span>Support</span>
                    </a>
                  </li>
                </ul>
                <div className="pt-120">
                  <div className="invite-now">
                    <div className="img-area">
                      <img
                        src="/dash-assets/images/invite-now-illus.png"
                        alt="Image"
                      />
                    </div>
                    <p>Invite your friend and get $25</p>
                    <a href="javascript:void(0)" className="cmn-btn">
                      Invite Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashHeader;
