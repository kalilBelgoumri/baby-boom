import Head from "next/head";
import { useRouter } from "next/router";
import firebase from "../firebase/firebase";

const Layout = ({ children, page }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>

      <main className="flex-1">{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
