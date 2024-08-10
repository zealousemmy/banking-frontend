"use client";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { formatAmount, formatDate, formatTime } from "@/hooks/formatAmount";
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
import { uploadImage } from "@/hooks/imageUpload";

const AccountContents = () => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const authenticated = getCookie("elite-trust-finance-usertoken");
  const dispatch = useDispatch();

  const { profile, gettingProfile } = useSelector(profileSelector);
  const { transactions, gettingTransactions } =
    useSelector(transactionSelector);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getTransfers());
  }, []);

  // useLayoutEffect(() => {
  //   const isAuth = authenticated;
  //   if (!isAuth) {
  //     redirect("/login");
  //   }
  // }, []);

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

  const handleFileChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);

      try {
        const result = await uploadImage(selectedFile, profile._id);
        console.log("Image uploaded successfully:", result);
        dispatch(getProfile());
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    }
  };

  return (
    <section className="dashboard-section body-collapse account">
      <div className="overlay pt-120">
        <div className="container-fruid">
          <div className="main-content">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="owner-details">
                  <div className="profile-area">
                    <div className="profile-img">
                      {!profile?.image ? (
                        <div className="userProfileImageText">
                          <h3>{userInitials}</h3>
                        </div>
                      ) : (
                        <img
                          src={`${profile?.image}`}
                          alt="image"
                        />
                      )}
                    </div>
                    <div className="name-area">
                      <h6>{profile?.userName}</h6>
                      <p className="active-status">{profile?.accountStatus}</p>
                    </div>
                  </div>
                  <div className="owner-info">
                    <ul>
                      <li>
                        <p>Account No:</p>
                        <span className="mdr">{profile?.accountNo}</span>
                      </li>
                      <li>
                        <p>Joined:</p>
                        <span className="mdr">
                          {formatDate(profile?.createdAt)}
                        </span>
                      </li>
                      <li>
                        <p>Confirm status:</p>
                        <span className="mdr">80%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="owner-action">
                    <a href="javascript:void(0)" onClick={handleLogout}>
                      <img
                        src="/dash-assets/images/icon/logout.png"
                        alt="image"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-8">
                <div className="tab-main">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="account-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#account"
                        type="button"
                        role="tab"
                        aria-controls="account"
                        aria-selected="true"
                      >
                        Account
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="security-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#security"
                        type="button"
                        role="tab"
                        aria-controls="security"
                        aria-selected="false"
                      >
                        Security
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-40">
                    <div
                      className="tab-pane fade show active"
                      id="account"
                      role="tabpanel"
                      aria-labelledby="account-tab"
                    >
                      <div className="upload-avatar">
                        <div className="avatar-left d-flex align-items-center">
                          <div className="profile-img">
                            {!profile?.image ? (
                              <div className="userProfileImageText2">
                                <h3>{userInitials}</h3>
                              </div>
                            ) : (
                              <img
                              src={`${profile?.image}`}
                                alt="image"
                              />
                            )}
                          </div>
                          {/* <div className="profile-img">
                            <img
                              src="/dash-assets/images/owner-profile-2.png"
                              alt="image"
                            />
                          </div> */}
                          <div className="instraction">
                            <h6>Your Avatar</h6>
                            <p>Profile picture size: 400px x 400px</p>
                          </div>
                        </div>
                        <div className="avatar-right">
                          <div className="file-upload">
                            <div className="right-area">
                              <label className="file">
                                <input onChange={handleFileChange} type="file" />
                                <span className="file-custom" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form action="#">
                        <div className="row justify-content-center">
                          <div className="col-md-6">
                            <div className="single-input">
                              <label htmlFor="fName">First Name</label>
                              <input
                                type="text"
                                id="fName"
                                placeholder={profile?.firstName}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-input">
                              <label htmlFor="lName">Last Name</label>
                              <input
                                type="text"
                                id="lName"
                                placeholder={profile?.lastName}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="single-input">
                              <label htmlFor="email">Email</label>
                              <div className="row input-status d-flex align-items-center">
                                <div className="col-6">
                                  <input
                                    type="text"
                                    id="email"
                                    placeholder={profile?.email}
                                  />
                                </div>
                                <div className="col-6">
                                  <span className="confirm">
                                    <img
                                      src="/dash-assets/images/icon/confirm.png"
                                      alt="icon"
                                    />
                                    email confirm
                                  </span>
                                </div>
                                {/* <div className="col-6">
                                  <span className="pending">
                                    <img
                                      src="/dash-assets/images/icon/pending.png"
                                      alt="icon"
                                    />
                                    E-mail confirmation in pending
                                  </span>
                                </div> */}
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-12">
                            <div className="single-input">
                              <label htmlFor="phone">Phone</label>
                              <div className="row input-status d-flex align-items-center">
                                <div className="col-6">
                                  <input
                                    type="text"
                                    id="phone"
                                    placeholder="(316) 555-0116"
                                  />
                                </div>
                                <div className="col-6">
                                  <span className="confirm">
                                    <img
                                      src="/dash-assets/images/icon/confirm.png"
                                      alt="icon"
                                    />
                                    Phone number confirm
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-md-12">
                            <div className="single-input file">
                              <label>ID Confirmation documents</label>
                              <div className="row input-status d-flex align-items-center">
                                <div className="col-6">
                                  <div className="file-upload">
                                    <div className="right-area">
                                      <label className="file">
                                        <input type="file" />
                                        <span className="file-custom" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <span className="notconfirm">
                                    <img
                                      src="/dash-assets/images/icon/not-confirm.png"
                                      alt="icon"
                                    />
                                    Person not confirmed
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div className="col-md-12">
                            <div className="single-input">
                              <label htmlFor="address">Address</label>
                              <input
                                type="text"
                                id="address"
                                placeholder={profile?.address}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="btn-border">
                              <button className="cmn-btn">Account</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="security"
                      role="tabpanel"
                      aria-labelledby="security-tab"
                    >
                      <div className="change-pass mb-40">
                        <div className="row">
                          <div className="col-sm-6">
                            <h5>Change Password</h5>
                            <p>
                              You can always change your password for security
                              reasons or reset your password in case you forgot
                              it.
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <form action="#">
                              <div className="row justify-content-center">
                                <div className="col-md-12">
                                  <div className="single-input">
                                    <label htmlFor="current-password">
                                      Current password
                                    </label>
                                    <input
                                      type="text"
                                      id="current-password"
                                      placeholder="Current password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="single-input">
                                    <label htmlFor="new-password">
                                      New password
                                    </label>
                                    <input
                                      type="text"
                                      id="new-password"
                                      placeholder="New password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="single-input">
                                    <label htmlFor="confirm-password">
                                      Confirm New password
                                    </label>
                                    <input
                                      type="text"
                                      id="confirm-password"
                                      placeholder="Confirm New password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="btn-border w-100">
                                    <button className="cmn-btn w-100">
                                      Update password
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountContents;
