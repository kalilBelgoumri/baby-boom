import Head from "next/head";
import { Form, Modal, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import firebase from "../firebase/Firebase";
import Router from "next/router";
import { useState, useEffect } from "react";
import background from "../assets/login.webp";
import Image from "next/image";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Checkbox from "@mui/material/Checkbox";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CardLogin from "../components/CardLogin";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(`checked = ${event.target.checked}`);
  };
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
      <div className="flex items-center mt-10">
        <div className="">
          <HomeRoundedIcon className="cursor-pointer" fontSize="large" />
        </div>
        <div className="mx-auto">
          <h1 className="text-center">Connexion</h1>
        </div>
      </div>
      <main className="flex gap-5 flex-col items-center justify-center h-screen md:flex-row">
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
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
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
              className="cursor-pointer text-white"
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
          <div className="noRegistrer flex justify-center flex-row">
            <p> Pas encore enrigistrer ? </p>

            <p
              className="text-red-500 text-center font-bold ml-3 cursor-pointer"
              onClick={() => Router.push("/create-account")}
            >
              Cliquer ici
            </p>
          </div>
        </Form>
        <CardLogin
          avatar={<PersonAddAltRoundedIcon fontSize="large" />}
          typo1="Pas encore de compte ? inscrivez vous vite !"
          typo2="  Des centaines d'annonces proches de chez vous
          "
          typo3="Inscription et consultation 100% gratuite"
          typo4="Création du compte en moins d'une minute"
        />
        {/* 
            <div className="w-screen h-screen">
              <Image src={background} layout="responsive" id="background" />
            </div>
           */}
      </main>
    </>
  );
}
