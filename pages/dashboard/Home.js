import React from "react";
import firebase from "../../firebase/Firebase";

function Home() {
  const user = firebase.auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    user.displayName;
    user.photoURL;
  }

  return (
    <div className="text-center">
      <h1>Baby Boom</h1>
      <p className="font-bold mt-10 uppercase hidden md:block">
        Bienvenue {user.displayName}
      </p>
      <h2>Membre depuis le ......</h2>
    </div>
  );
}

export default Home;
