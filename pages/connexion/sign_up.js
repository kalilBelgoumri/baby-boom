import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo)
    createUserWithEmailAndPassword(email, passwordOne)
    .then((authUser) => {
      console.log("Success. The user is created in firebase");
      router.push("/");
    })
    .catch((error) => {
      setError(error.message);
    });
    else setError("Password do not match");
    event.preventDefault();
    
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <Alert color="danger">{error}</Alert>}
      <label for="signUpEmail" sm={4}>
        Email
      </label>
      <div>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          id="signUpEmail"
          placeholder="Email"
        />
      </div>

      <label for="signUpPassword" sm={4}>
        Password
      </label>
      <div>
        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          onChange={(event) => setPasswordOne(event.target.value)}
          id="signUpPassword"
          placeholder="Password"
        />
      </div>
      <label for="signUpPassword2" sm={4}>
        Confirm Password
      </label>
      <div>
        <input
          type="password"
          name="password"
          value={passwordTwo}
          onChange={(event) => setPasswordTwo(event.target.value)}
          id="signUpPassword2"
          placeholder="Password"
        />
      </div>

      <div>
        <button onClick={() => onSubmit}
        >Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
