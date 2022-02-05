import Footer from "./Footer";
import Head from "next/head";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "../firebase/Firebase";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import IconMenu from "./SearchTemps.";
import PositionedMenu from "./MenuLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Layout = ({ children, page }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  // const [user, setUser] = useState(null);

  const user = firebase.auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    user.displayName;
    user.email;
    user.photoURL;
    user.emailVerified;
    user.uid;
    console.log(`${user.displayName}`);
  }
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header>
        <div className="flex shadow-2xl justify-between ">
          <div className="container flex items-center cursor-pointer">
            {/* Hamburger Menu */}
            {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

            {/* <Hamburger
              style={{ width: isOpen ? 500 : 0 }}
              onToggle={(toggled) => {
                toggled ? <IconMenu /> : null;
              }}
            /> */}
          </div>
          <div className="flex">
            {!firebase.isLoggedIN() && (
              <div className="flex">
                <IconButton aria-label="fingerprint" color="secondary">
                  <Fingerprint onClick={() => router.push("/login")} />
                  <div className="text-black text-xs font-bold">Connexion</div>
                </IconButton>
              </div>
            )}
            {firebase.isLoggedIN() && (
              <div className="flex items-center mr-5">
                {/* <p className="text-sm text-center mr-5  ">
                  {`${user.displayName}`}
                </p> */}
                <div className="py-2">
                  <Avatar
                    sx={{ width: 50, height: 50, overflow: "hidden" }}
                    src={user.photoURL}
                  />
                </div>
              </div>
            )}
            {!firebase.isLoggedIN() && (
              <div className="flex items-center">
                <IconButton aria-label="fingerprint" color="primary">
                  <Fingerprint onClick={() => router.push("/create-account")} />
                  <div className="text-black text-xs font-bold">
                    S'enregister
                  </div>
                </IconButton>
              </div>
            )}
            {firebase.isLoggedIN() && (
              <div className="flex items-center mr-3">
                <PositionedMenu
                  logout={
                    <IconButton
                      onClick={async () => {
                        await firebase.logout();
                        router.push("/");
                      }}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <div className="flex items-center">
                        <Fingerprint />
                        <p className="text-xs px-3">Logout</p>
                      </div>
                    </IconButton>
                  }
                  profile={
                    <IconButton
                      onClick={() => {
                        router.push("/dashboard");
                      }}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <div className="flex items-center">
                        <AccountCircleIcon />
                        <p className="text-xs px-3">Profile</p>
                      </div>
                    </IconButton>
                  }
                />
              </div>
            )}
          </div>
        </div>
        {/* <div className={`"hamburgerOpen flex bg-orange-500 w-full items-center justify-end cursor-pointer"
          ${show && 'hamburgerOpen'}`}
        >
        </div>  */}
        {/* <Image img src={background} alt="background" property="responsive" /> */}
      </header>
      <main className="flex-1">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
