import Head from "next/head";
import background from "../../assets/login.jpg";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase/firebase";
import HomeIcon from "@mui/icons-material/Home";

export default function dashboard() {
  useEffect(() => {
    if (!firebase.isLoggedIN()) {
      Router.push("/login");
    }
  });

  return (
    <>
      <Head>
        <title>Dashboard | Baby-Boom</title>
      </Head>

      <div className="background">
        <Image
          className="bg-cover"
          src={background}
          alt="test"
          layout="responsive"
        />
      </div>
      <main>
        <div className="flex flex-wrap overflow-hidden sm:-mx-4 lg:-mx-4 xl:-mx-6">
          <div className="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/3">
            <HomeIcon />
            <h1>Préférences du compte</h1>
            <h3>Informations de profil</h3>
            <p>Adresses e-mail</p>
            <p>Numéros de téléphone</p>
            <p>Changer le mot de passe</p>
            <p>Photo de profile</p>
          </div>
          <div className="w-screen flex items-center justify-center flex-col overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/3">
            <h1>Baby-Boom</h1>
            <h3>Informations de profil</h3>
            <p>Adresses e-mail</p>
            <p>Numéros de téléphone</p>
            <p>Changer le mot de passe</p>
            <p>Photo de profile</p>
          </div>
        </div>
      </main>
    </>
  );
}
