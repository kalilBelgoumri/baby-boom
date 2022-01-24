import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase/Firebase";
import HomeIcon from "@mui/icons-material/Home";
import LayoutUsers from "../../components/LayoutUsers";
import Upload from "../../components/Upload";


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
          <div className="flex overflow-hidden sm:-mx-4">
            <div className="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <HomeIcon />
              <h1>Préférences du compte</h1>
              <h3>Informations de profil</h3>
              <p>Adresses e-mail</p>
              <p>Numéros de téléphone</p>
              <p>Changer le mot de passe</p>
              <p>Photo de profile</p>
            </div>
            <div className="w-screen flex items-center justify-center flex-col overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/3">
              <h1 className="font-bold text-2xl flex ">Baby-Boom</h1>
              <div className="displayName flex ">
              {firebase.isLoggedIN() && (
                <u>

                <p className="text-md flex">Bonjour {`${user.displayName}`}</p>
               <img src={user.photoURL} alt="test" />
                </u>
              )}
            </div>
            <Upload />
            </div>
          </div>
        </main>
      </LayoutUsers>
    </>
  );
}