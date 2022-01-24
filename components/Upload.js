import { useState } from "react";
import "firebase/auth";
import "firebase/storage";
import firebase from "firebase/app";
import Loader from "../components/loader";
import { height, width } from "@mui/system";
import Layout from "antd/lib/layout/layout";

// Uploads images to Firebase Storage
export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);

  const storage = firebase.storage();
  const auth = firebase.auth();
  const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
  const user = firebase.auth().currentUser;

  // Creates a Firebase Upload Task
  const uploadFile = async (e) => {
    // Get the file
    const file = Array.from(e.target.files)[0];

    // Makes reference to the storage bucket location
    const ref = storage.ref("uploads/" + user.uid + "/avatar.jpg");
    setUploading(true);

    // avatarStgRef.put(file).then(function (snapshot) {
    //   snapshot.ref.getDownloadURL().then(function (url) {
    //     // Now I can use url
    //     user
    //       .updateProfile({
    //         photoURL: url, // <- URL from uploaded photo.
    //       })
    //       .then(function () {
    //         firebase
    //           .database()
    //           .ref("Usuarios/" + user.uid)
    //           .set({
    //             photoUri: url, // <- URL from uploaded photo.
    //           });
    //       });
    //   });
    // });

    // Starts the upload
    const task = ref.put(file);

    // Listen to updates to upload task
    task.on(STATE_CHANGED, (snapshot) => {
      const pct = (
        (snapshot.bytesTransferred / snapshot.totalBytes) *
        100
      ).toFixed(0);
      setProgress(pct);
    });

    // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
    task
      .then((d) => ref.getDownloadURL())
      .then((url) => {
        setDownloadURL(url);

        // Now I can use url
        user.updateProfile({
          photoURL: url, // <- URL from uploaded photo.
        })
        setUploading(false);
        console.log(url);
      });
  };

  return (
    <div className="box">
      <Loader show={uploading} />
      {uploading && <h3>{progress}%</h3>}

      {!uploading && (
        <>
          <label className="btn">
            📸 Upload Img
            <input
              type="file"
              onChange={uploadFile}
              accept="image/x-png,image/gif,image/jpeg"
            />
          </label>
        </>
      )}
      <div className="div flex items-center justify-center flex-col mt-20">
        Bonjour Sarah
        {downloadURL && (
          <img className="rounded-full w-20 h-20 mx-auto" src={downloadURL} />
        )}
        <div className="flex mt-10 mb-10"></div>
      </div>
    </div>
  );
}
