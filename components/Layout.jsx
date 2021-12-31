import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children, page }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <Header name={page} />
      <main className="flex-1">{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;
