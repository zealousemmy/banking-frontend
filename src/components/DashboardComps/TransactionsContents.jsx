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

const TransactionsContents = () => {
  const dispatch = useDispatch();

  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  const { profile, gettingProfile } = useSelector(profileSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);
  console.log(transactions, "transactions");
  return (
    <section className="dashboard-section body-collapse transactions">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="head-area">
            <div className="row">
              <div className="col-lg-5 col-md-4">
                <h4>Transactions</h4>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="transactions-right d-flex align-items-center">
                  <form action="#" className="flex-fill">
                    <div className="form-group d-flex align-items-center">
                      <img
                        src="/dash-assets/images/icon/search.png"
                        alt="icon"
                      />
                      <input type="text" placeholder="Type to search..." />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="transactions-main">
                <div className="top-items">
                  <h6>All Transactions</h6>
                </div>

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
                              {/* <p className="completed">completed</p> */}
                              {item?.transactionStatus === "completed" && (
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
                              {profile?._id === item?.receiverId ? (
                                <p>Received</p>
                              ) : (
                                <p className="mdr">
                                  ${formatAmount(`${item?.senderBalance}`)}
                                </p>
                              )}
                            </td>
                          </tr>
                        ))}
                      {!transactions?.length <= 0 && (
                        <>
                          <p>No transactions yet</p>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                {/* <nav
                  aria-label="Page navigation"
                  className="d-flex justify-content-center mt-40"
                >
                  <ul className="pagination justify-content-center align-items-center mb-40">
                    <li className="page-item">
                      <a
                        className="page-link previous"
                        href="javascript:void(0)"
                        aria-label="Previous"
                      >
                        <i className="fa-solid fa-angles-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link previous"
                        href="javascript:void(0)"
                        aria-label="Previous"
                      >
                        <i className="fa-solid fa-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0)">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="javascript:void(0)">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0)">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0)">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link next"
                        href="javascript:void(0)"
                        aria-label="Next"
                      >
                        <i className="fa-solid fa-angle-right" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link next"
                        href="javascript:void(0)"
                        aria-label="Next"
                      >
                        <i className="fa-solid fa-angles-right" />
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsContents;
