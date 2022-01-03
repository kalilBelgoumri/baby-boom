import Footer from "./Footer";
import Head from "next/head";
// import background from "../assets/background.jpg";
import Image from "next/image";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children, page }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);

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
            <button
              onClick={() => router.push("/logIn")}
              className="text-black text-xs py-2 px-4 bg-[#B538A8] rounded-lg mr-3"
            >
              Connexion
            </button>
            <button
              onClick={() => router.push("/register")}
              className="text-black text-xs py-2 px-4 rounded-lg mr-2 shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 "
            >
              S'enregistrer
            </button>
          </div>
        </div>
        {/* <div className={`"hamburgerOpen flex bg-orange-500 w-full items-center justify-end cursor-pointer"
          ${show && 'hamburgerOpen'}`}
        >
        </div> */}
        {/* Backgound */}
        {/* <Image img src={background} alt="background" property="responsive" /> */}
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
