import Footer from "./Footer";
import Head from "next/head";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "../firebase/Firebase";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

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
        <div className="flex">
          <div className="container flex items-center">
            {/* Hamburger Menu */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="flex">
            {!firebase.isLoggedIN() && (
              <div className="flex justify-end">
                <IconButton aria-label="fingerprint" color="secondary">
                  <Fingerprint onClick={() => router.push("/login")} />
                  <div className="text-black text-xs font-bold">Connexion</div>
                </IconButton>
              </div>
            )}

            {firebase.isLoggedIN() && (
              <ul className="flex items-center justify-center  mr-5">
                <p className="text-sm text-center flex mr-5  ">{`${user.displayName}`}</p>
                <div className="flex">
                  <Avatar alt="" src={user.photoURL} />
                </div>
              </ul>
            )}
            {!firebase.isLoggedIN() && (
              <div className="flex items-center justify-center">
                <IconButton aria-label="fingerprint" color="primary">
                  <Fingerprint onClick={() => router.push("/create-account")} />
                  <div className="text-black text-xs font-bold">
                    S'enregister
                  </div>
                </IconButton>
              </div>
            )}
            {firebase.isLoggedIN() && (
              <div className="flex justify-center">
                <IconButton aria-label="fingerprint" color="secondary">
                  <Fingerprint
                    onClick={async () => {
                      await firebase.logout();
                      router.push("/");
                    }}
                  />
                </IconButton>
                <p className="text-black text-xs font-bold">Deconnexion</p>
              </div>
            )}
          </div>
        </div>
        {/* <div className={`"hamburgerOpen flex bg-orange-500 w-full items-center justify-end cursor-pointer"
          ${show && 'hamburgerOpen'}`}
        >
        </div> */}
        {/* Backgound */}
        {/* <Image img src={background} alt="background" property="responsive" /> */}
      </header>
      <main className="flex-1">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
