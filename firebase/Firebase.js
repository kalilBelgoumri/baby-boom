import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGNG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGNG_APP_ID,
};

class getFirebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    }
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async login({ email, password }) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return await this.auth.signOut();
  }

  async register({ name, photoURL, email, password }) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return this.db.collection("users").doc(cred.user.uid).set({
          name,
          password,
        });
      });
    await this.auth.currentUser.sendEmailVerification();
    return this.auth.currentUser.updateProfile({
      displayName: name,
      displayphotoURL: photoURL,
    });
  }
  user = (uid) => this.db.doc(`users/${uid}`);

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  isLoggedIN() {
    if (this.auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  async deleteAccount() {
    if (this.auth.currentUser) {
      await this.auth.currentUser.delete();
      return true;
    } else {
      return false;
    }
  }

  getProfile() {
    if (this.auth.currentUser) {
      return {
        name: this.auth.currentUser.displayName,
        email: this.auth.currentUser.email,
        verified: this.auth.currentUser.emailVerified,
      };
    } else {
      return {
        name: null,
        email: null,
      };
    }
  }

  async sendVerification() {
    try {
      if (this.auth.currentUser) {
        await this.auth.currentUser.sendEmailVerification();
        return true;
      } else {
        throw "";
      }
    } catch (error) {
      return false;
    }
  }
}

export default new getFirebase();
