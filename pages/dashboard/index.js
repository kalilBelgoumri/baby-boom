import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashbboard";
import firebase from "../../firebase/Firebase";
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { data } from "autoprefixer";

export default function index() {
  const [name, setCustomerName] = useState("");
  const [password, setCustomerPassword] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const db = app.firestore();
  const user = firebase.auth.currentUser;

  // Get infos from firebase

  useEffect(() => {
    setInterval(() => {
      user
        ? db
            .collection("users")
            .get()
            .then((data) => {
              setNotesArray(
                data.docs.map((note) => {
                  return { ...note.data(), id: note.id };
                })
              );
            })
        : alert("user not logged in");
    });
    return () => clearInterval(); //This is important
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
          <button onClick={submit}>Submit</button>
        </div>
        <ul>
          {notesArray.map((note) => {
            return (
              <li
                key={note.id}
                value={notesArray}
                onChange={(e) => setNotesArray(e.target.value)}
              >
                {note.name} {note.password}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
