import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashbboard";
import firebase from "../../firebase/Firebase";
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function index() {
  const [name, setCustomerName] = useState("");
  const [password, setCustomerPassword] = useState("");
  const [usersArray, setUsersArray] = useState([]);
  const db = app.firestore();
  const user = firebase.auth.currentUser;

  // Get infos from firebase

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const myData = doc.data();
          setUsersArray(myData);
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      });
  }, []);

  // Put infos from firebase

  const submit = (e) => {
    e.preventDefault();
    firebase.db
      .collection("users")
      .doc(user.uid)
      .set({ name, password })
      .then(() => {
        // SweetAlert confirm users information.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Dashboard />
      <form onSubmit={submit}>
        <div className="App">
          <div className="App__form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setCustomerPassword(e.target.value)}
            />
            <button>Submit</button>
          </div>
          <li>
            {usersArray.name} {usersArray.password}{" "}
          </li>
        </div>
      </form>
    </div>
  );
}
