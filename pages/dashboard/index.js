import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase/Firebase";
import HomeIcon from "@mui/icons-material/Home";
import LayoutUsers from "../../components/LayoutUsers";
import MenuExampleVerticalDropdown from "../../components/indexNew";

export default function dashboard() {
  useEffect(() => {
    if (!firebase.isLoggedIN()) {
      Router.push("/login");
    }
  });

  const user = firebase.auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    user.displayName;
    user.email;
    user.photoURL;
    user.emailVerified;
    user.uid;
    console.log(`${user.displayName}`);
    console.log(`${user.photoURL}`);
  }

  return (
    <>
      <LayoutUsers>
        <Head>
          <title>Dashboard | Baby-Boom</title>
        </Head>
        <main>
          <div className="flex mx-auto">
            <div className="flex flex-col items-center mt-10 mb-10">
              <HomeIcon
                fontSize="large"
                className="cursor-pointer mb-10"
                onClick={() => Router.push("/")}
              />
              <p className="font-bold text-2xl">Préférences du compte</p>
              <MenuExampleVerticalDropdown />
            </div>

            <div className="w-screen flex items-center justify-center mx-auto flex-col sm:w-4/5 md:w-4/5 lg:my-4 lg:px-4 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/3">
              <h1 className="font-bold text-2xl flex mb-10 ">Baby-Boom</h1>
              <div className="displayName flex justify-center  items-center ">
                {firebase.isLoggedIN() && (
                  <div className="flex items-center flex-col">
                    <p className="text-xl">Bonjour {`${user.displayName}`}</p>
                    <img
                      className="rounded-full w-20 mb-5 "
                      src={user.photoURL}
                      alt="test"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </LayoutUsers>
    </>
  );
}
