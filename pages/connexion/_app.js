import "../styles/globals.css";
import "../styles/sideNavBar.css";

import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
