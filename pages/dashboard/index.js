import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashbboard";
import firebase from "../../firebase/Firebase";
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { data } from "autoprefixer";

export default function index() {
  const [, forceUpdate] = React.useState();
  const [name, setCustomerName] = useState("");
  const [password, setCustomerPassword] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const db = app.firestore();
  const user = firebase.auth.currentUser;

  // Get infos from firebase
  // const docRef = db
  //   .collection("users")
  //   .doc(user.uid)
  //   .onSnapshot((doc) => {
  //     console.log("Current data: ", doc.data());
  //   });

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const myData = doc.data();
          setNotesArray(myData);
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
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
        console.log("ok bien envoyer");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
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
            {" "}
            {notesArray.name} {notesArray.password}{" "}
          </li>
        </div>
      </form>
    </div>
  );
}
