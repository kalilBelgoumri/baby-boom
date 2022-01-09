import Head from "next/head";
import { Form, Modal, Checkbox, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import firebase from "../firebase/firebase";
import Router from "next/router";
import { useState, useEffect } from "react";
import background from "../assets/login.jpg";
import Image from "next/image";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  // Reset Password
  function sendPasswordReset() {
    // [START auth_send_password_reset]
    firebase.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        message.success({
          key: "Password",
          content:
            " Veuillez reinitialiser votre mot de passe recue dans votre boite email ! Merci de verifer votre dossier Spam  :)",
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  useEffect(() => {
    if (firebase.isLoggedIN()) {
      Router.push("/dashboard");
    }
  }, []);

  function onChangeChecked(e) {
    console.log(`checkedOk = ${e.target.checked}`);
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

  // function handleFormSubmit ()  {

  //   localStorage.setItem('rememberMe',rememberMe);
  //   localStorage.setItem('email', rememberMe ? email : '');
  //   localStorage.setItem('passsword', rememberMe ? password : '');

  // };

  useEffect(() => {
    // storing input name
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [email, password]);

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
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Email"
              values={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          {/* Checkbox */}
          <div className="chekbox flex justify-end">
            <input
              type="checkbox"
              name="rememberMe"
              onChange={((e) => setChecked(e.target.checked), onChangeChecked)}
              value={checked}
              checkedOk={checked}
            />
            Enregistrer
          </div>
          {/* Password */}
          <Form.Item name="password" rules={[{ required: true, message: "" }]}>
            {/* Password */}
            <Input.Password
              values={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <p
              type="primary"
              className="cursor-pointer"
              onClick={() => setVisible(true)}
            >
              Mot de passe oublié ?
            </p>
          </div>
          <Modal
            title="Merci de renseigner votre adresse email pour la reinitialisation de votre mot de passe ! "
            values={email}
            centered
            visible={visible}
            onChange={setEmail}
            onOk={(() => setVisible(false), sendPasswordReset)}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            <Form.Item name="email" rules={[{ required: true, message: "" }]}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="large"
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            </Form.Item>
          </Modal>
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
          <div className="noRegistrer flex justify-center items-center">
            <p>Pas encore enrigistrer ?</p>
            <p className="text-red-500 font-bold ml-3 cursor-pointer" onClick={() => Router.push("/create-account")}> Cliquer ici </p>
          </div>
        </Form>
      </main>
    </>
  );
}
