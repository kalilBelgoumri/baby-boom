import "../styles/globals.css";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import firebase from "../firebase/Firebase";
import { Spin } from "antd";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(async () => {
    await firebase.isInitialized();
    setFirebaseInitialized(true);
  }, []);

  return (
    <>
      {!firebaseInitialized ? (
        <div className="fullscreenflexmiddle">
          <Spin />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
