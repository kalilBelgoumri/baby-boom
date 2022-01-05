import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("Success. The user is created in firebase");
        router.push("/logged_in");
      })
      .catch((error) => {
        setError(error.message);
      });
    event.preventDefault();
  };

  return (
    <div className="text-center" style={{ padding: "40px 0px" }}>
      <h2>Login</h2>

      <div onSubmit={onSubmit}>
        {error && <Alert color="danger">{error}</Alert>}
        <label htmlFor="loginEmail">Email</label>
        <onput
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          id="loginEmail"
          placeholder="Email"
        />
        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id="loginPassword"
          placeholder="Password"
        />
        <button>Login</button>
        No account? <Link href="/connexion/sign_up">Create one</Link>
      </div>
    </div>
  );
}
