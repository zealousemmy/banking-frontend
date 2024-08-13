"use client";
import { formatAmount, formatDate, formatTime } from "@/hooks/formatAmount";
import {
  getProfile,
  profileSelector,
} from "@/redux/features/profile/profile-slice";
import {
  getTransfers,
  transactionSelector,
} from "@/redux/features/transaction/transaction-slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

const DashIndexPageContents = () => {
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);

  console.log(transactions, "transactions");
  return (
    <section className="dashboard-section body-collapse">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="section-content">
                <div className="acc-details">
                  <div className="top-area">
                    {gettingProfile ? (
                      <TailSpin
                        visible={true}
                        height="40"
                        width="40"
                        color="#4743c9"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      <>
                        <div className="left-side">
                          <h5>
                            {" "}
                            Hi, {`${profile?.firstName} ${profile?.lastName}`}!
                          </h5>
                          <h2>${formatAmount(`${profile?.accountBalance}`)}</h2>
                          <h5 className="receive">
                            Account Status:{" "}
                            <span>{profile?.accountStatus}</span>
                          </h5>
                        </div>
                      </>
                    )}

                    <div className="right-side">
                      <div className="right-top">
                        <select>
                          <option value="1">US Dollar</option>
                          <option value="2">US Dollar</option>
                          <option value="3">US Dollar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="left-side">
                      <a href="/dashboard/transfer-money" className="cmn-btn">
                        Transfer Money
                      </a>
                      <a href="/dashboard/receive" className="cmn-btn">
                        Receive
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bottom-area">
                  <div
                    style={{
                      background: "#4743c9",
                      padding: "15px 10px 5px 30px",
                      borderRadius: "10px",
                    }}
                    className="left-side  mt-3  "
                  >
                    <h5 style={{ color: "#F0ECECBD" }} className="receive">
                      Account Number
                    </h5>
                    <h2
                      className="h5"
                      style={{ color: "white", margin: "0.5rem 0" }}
                    >
                      {profile?.accountNo}
                    </h2>
                  </div>
                </div>
                <div className="bottom-area">
                  <div
                    style={{
                      background: "#4743c9",
                      padding: "15px 10px 5px 30px",
                      borderRadius: "10px",
                    }}
                    className="left-side  mt-3  "
                  >
                    <h5 style={{ color: "#F0ECECBD" }} className="receive">
                      Routing Number
                    </h5>
                    <h2
                      className="h5"
                      style={{
                        color: "white",
                        margin: "0.5rem 0",
                      }}
                    >
                      3278265925
                    </h2>
                  </div>
                </div>
                <div className="transactions-area mt-40">
                  <div className="section-text">
                    <h5>Transactions</h5>
                    <p>Updated every several minutes</p>
                  </div>
                  <div className="top-area d-flex align-items-center justify-content-between">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="latest-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#latest"
                          type="button"
                          role="tab"
                          aria-controls="latest"
                          aria-selected="true"
                        >
                          Latest
                        </button>
                      </li>
                    </ul>
                    <div className="view-all d-flex align-items-center">
                      <a href="/dashboard/transactions">View All</a>
                      <img
                        src="/dash-assets/images/icon/right-arrow.png"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="tab-content mt-40">
                    <div
                      className="tab-pane fade show active"
                      id="latest"
                      role="tabpanel"
                      aria-labelledby="latest-tab"
                    >
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Name/ Business</th>
                              <th scope="col">Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transactions?.length > 0 &&
                              transactions?.map((item) => (
                                <tr
                                  data-bs-toggle="modal"
                                  data-bs-target="#transactionsMod"
                                >
                                  <th scope="row">
                                    <p>{item?.accountName}</p>
                                    <p className="mdr">{item?.bankName}</p>
                                  </th>
                                  <td>
                                    <p>{formatTime(`${item?.createdAt}`)}</p>
                                    <p className="mdr">
                                      {formatDate(`${item?.createdAt}`)}
                                    </p>
                                  </td>
                                  <td>
                                    {item?.transactionStatus ===
                                      "completed" && (
                                      <p className="completed">completed</p>
                                    )}
                                    {item?.transactionStatus === "pending" && (
                                      <p className="pending">pending</p>
                                    )}
                                    {item?.transactionStatus === "failed" && (
                                      <p className="cancelled">Failed</p>
                                    )}
                                  </td>
                                  <td>
                                    <p>-${formatAmount(`${item?.amount}`)}</p>
                                    <p className="mdr">
                                      ${formatAmount(`${item?.senderBalance}`)}
                                    </p>
                                  </td>
                                </tr>
                              ))}
                            {transactions?.length === 0 && (
                              <>
                                <p>No transactions yet</p>
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="side-items">
                <div className="single-item">
                  <div className="section-text d-flex align-items-center justify-content-between">
                    <h6>Payment Analytics</h6>
                    <div className="select-box">
                      <select>
                        <option>Monthly</option>
                        <option value={1}>Jan</option>
                        <option value={2}>Feb</option>
                        <option value={3}>Mar</option>
                      </select>
                    </div>
                  </div>
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashIndexPageContents;
