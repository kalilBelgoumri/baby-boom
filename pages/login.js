import Head from "next/head";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import firebase from "../firebase/firebase";
import Router from "next/router";
import { useState, useEffect } from "react";
import background from "../assets/login.jpg";
import Image from "next/image";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Checkbox } from "antd";

export default function login() {
  const [colors, setColors] = useState("");
  const [email, setEmail] = useState("");

  function sendPasswordReset() {
    const email = "kalil90100@gmail.com";
    // [START auth_send_password_reset]
    firebase.auth.sendPasswordResetEmail(email)
      .then(() => {
        message.success({ key: "Password", content: "Veuillez reinitialiser votre mot de passe recue dans votre boite email ! :)" });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      }) 
    }

  useEffect(() => {
    if (firebase.isLoggedIN()) {
      Router.push("/dashboard");
    }
  }, []);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  // Login
  async function doLogin(values) {
    console.log(values); // Expected output {email: "me@thetuhin.com", password: "123456789"}
    message.loading({ key: "login", content: "Logging in !" }); // Showing logging in message
    try {
      await firebase.login(values);
      message.success({ key: "login", content: "Logged in 🎉" }); // if success
      Router.push("/dashboard");
    } catch (error) {
      // if error
      message.error({
        key: "login",
        content: error.message || "Something went wrong !",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Login | Baby-Boom</title>
      </Head>
      <div className="background mb-10 ">
        <Image src={background} alt="test" layout="responsive" sizes="100vw" />
      </div>

      <main className="flex flex-col items-center justify-center">
        <Form
          name="login"
          style={{ width: "100%", maxWidth: 350 }}
          initialValues={{ remember: true }}
          onFinish={doLogin} // When click the Login Button
        >
          <Form.Item name="email" rules={[{ required: true, message: "" }]}>
            <Input size="large" prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          {/* Checkbox */}
          <div className="chekbox flex justify-end">
            <Checkbox onChange={onChange}>Enregistrer </Checkbox>
          </div>
          <Form.Item name="password" rules={[{ required: true, message: "" }]}>
            {/* Password */}
            <Input.Password
              size="large"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className="chekbox flex justify-end ">

            <p className="cursor-pointer" values={email} onChange={setEmail} onClick={() => sendPasswordReset() }>
              Mot de passe oublié ?
            </p>
          </div>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button rounded-3xl"
              block
            >
              Connexion
            </Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
