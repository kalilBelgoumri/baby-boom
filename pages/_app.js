import "../styles/globals.css";
import "../styles/theme.js";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import firebase from "../firebase/Firebase";
import { Spin } from "antd";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(async () => {
    await firebase.isInitialized();
    setFirebaseInitialized(true);
  }, []);

  return (
    <>
      <Layout>
        {!firebaseInitialized ? (
          <div className="fullscreenflexmiddle">
            <Spin />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}

export default MyApp;
