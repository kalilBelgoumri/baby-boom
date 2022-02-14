import Footer from "./Footer";
import Head from "next/head";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "../firebase/Firebase";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import PositionedMenu from "./MenuLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Layout = ({ children, page }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const user = firebase.auth.currentUser;
  // const [user, setUser] = useState(null);

  useEffect(() => {
    user !== null
      ? user.displayName &&
        user.email &&
        user.photoURL &&
        user.emailVerified &&
        user.uid
      : null;
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header>
        <div className="flex justify-end">
          <div className="flex items-center" />
          {!firebase.isLoggedIN() && (
            <div className="flex items-center">
              <PositionedMenu
                connexion={
                  <div className="flex items-center">
                    <IconButton
                      onClick={() => router.push("/login")}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <Fingerprint />
                    </IconButton>
                    <p className="text-sm font-bold text-black">Connexion</p>
                  </div>
                }
                enregistrer={
                  <div className="flex items-center">
                    <IconButton
                      onClick={() => router.push("/create-account")}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <AccountCircleIcon />
                    </IconButton>
                    <p className="text-sm font-bold text-black">
                      S'enregistrer
                    </p>
                  </div>
                }
              />
            </div>
          )}
          {firebase.isLoggedIN() && (
            <div className="flex items-center">
              <div className="mr-5 cursor-pointer flex">
                <NotificationsNoneIcon sx={{ color: "white" }} />
                <div className="px-5">
                  <MailIcon sx={{ color: "white" }} />
                </div>
              </div>
              <div className="py-2">
                <Avatar
                  sx={{ width: 50, height: 50, overflow: "hidden" }}
                  src={user.photoURL}
                />
              </div>
            </div>
          )}
          {firebase.isLoggedIN() && (
            <div className="flex items-center">
              <PositionedMenu
                logout={
                  <div className="flex items-center">
                    <IconButton
                      onClick={async () => {
                        await firebase.logout();
                        router.push("/");
                      }}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <LogoutIcon />
                    </IconButton>
                    <p className="text-sm font-bold text-black">Deconnexion</p>
                  </div>
                }
                profile={
                  <div className="flex items-center">
                    <IconButton
                      onClick={() => {
                        router.push("/dashboard");
                      }}
                      aria-label="fingerprint"
                      color="secondary"
                    >
                      <AccountCircleIcon />
                    </IconButton>
                    <p className="text-sm font-bold text-black">Profile</p>
                  </div>
                }
              />
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
