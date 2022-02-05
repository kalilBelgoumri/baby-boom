import Head from "next/head";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import firebase from "../firebase/Firebase";
import Router from "next/router";
import { useState } from "react";
import background from "../assets/login.jpg";
import Image from "next/image";

export default function signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  //   const onSubmit = event => {
  //   setError(null)
  //   if(password === confirmPassword) {
  //     console.log("error");
  //   } else {
  //     console.log("ok");
  //   }
  //   useEffect(() => {
  //     if (firebase.isLoggedIN()) {
  //       Router.push("/dashboard");
  //     }

  //   });
  // }

  const onSubmit = (event) => {
    setError(null);
    if (password === confirmPassword)
      createUserWithEmailAndPassword(email, password, confirmPassword)
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };
  async function doSignup(values) {
    console.log(values); // Expected output {name: "Tuhin", email: "me@thetuhin.com", password: "123456789"}
    message.loading({ key: "signup", content: "Signing up !" }); // Showing logging in message
    try {
      await firebase.register(values);
      message.success({ key: "signup", content: "Signed up 🎉" }); // if success
      Router.push("/login");
    } catch (error) {
      // if error
      message.error({
        key: "signup",
        content: error.message || "Something went wrong !",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Create-Account | Baby-Boom</title>
      </Head>
      <div className=" mb-10  ">
        <Image
          src={background}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          id="background"
          height={100}
          width={100}
        />
      </div>
      <main className="fullscreenflexmiddle flex flex-col justify-center items-center">
        <h2 style={{ fontSize: 25, marginBottom: 30 }}>Crée votre compte</h2>
        <Form
          onSubmit={onSubmit}
          name="signup"
          style={{ width: "100%", maxWidth: 350 }}
          initialValues={{ remember: true }}
          onFinish={doSignup} // When click the Signup Button
        >
          <Form.Item name="name" rules={[{ required: true, message: "" }]}>
            <Input size="large" prefix={<UserOutlined />} placeholder="Nom" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: "" }]}>
            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "" }]}>
            <Input
              size="large"
              values={password}
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            value={password}
            name="confirmPassword"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              values={confirmPassword}
              size="large"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="rounded-xl"
              size="large"
              type="primary"
              htmlType="submit"
              block
            >
              S'enregistrer
            </Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
