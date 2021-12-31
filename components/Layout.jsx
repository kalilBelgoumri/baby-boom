import Footer from "./Footer";
import Head from "next/head";
import background from "../assets/background.jpg";
import Image from "next/image";


const Layout = ({ children, page }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="bg-white w-full h-50 z-10">

     <Image img src={background} alt="background" property="responsive" />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
