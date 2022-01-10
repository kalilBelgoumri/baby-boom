import Footer from "./Footer";
import Head from "next/head";
// import background from "../assets/background.jpg";
import { Twirl as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "../firebase/firebase";

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
        <div className="flex items-center shadow-xl bg-stone-100">
          <div className="container flex items-center">
            {/* Hamburger Menu */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="button flex justify-end">
            {!firebase.isLoggedIN() && (
              <button
                onClick={() => router.push("/login")}
                className="text-black text-xs py-2 px-4 bg-[#B538A8] rounded-lg mr-3"
              >
                Connexion
              </button>
            )}
            <div className="displayName flex justify-center items-center ">
              {firebase.isLoggedIN() && (
                <p className="text-md flex">Bonjour {`${user.displayName}`}</p>
              )}
            </div>
            {!firebase.isLoggedIN() && (
              <button
                onClick={() => router.push("/register")}
                className="text-black text-xs py-2 px-4 rounded-lg mr-2 shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 "
              >
                S'enregistrer
              </button>
            )}
            {firebase.isLoggedIN() && (
              <button
                className="py-2 px-5 bg-red-700 rounded-lg"
                onClick={async () => {
                  // Logout
                  await firebase.logout();
                  router.push("/");
                }}
              >
                Logout
              </button>
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
