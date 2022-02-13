import Head from "next/head";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import firebase from "../firebase/Firebase";
import Router from "next/router";
import { useState } from "react";
import background from "../assets/login.jpg";
import Image from "next/image";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    setError(null);
  };

  async function doSignup(values) {
    console.log(values);
    message.loading({ key: "signup", content: "S igning up !" });
    try {
      await firebase.register(values);
      message.success({ key: "signup", content: "Signed up 🎉" });
      Router.push("/login");
    } catch (error) {
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
        {/* <Image
          src={background}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          id="background"
          height={100}
          width={100}
        /> */}
      </div>
      {error}
      <main className="fullscreenflexmiddle flex flex-col justify-center items-center">
        <h2 style={{ fontSize: 25, marginBottom: 30 }}>Crée votre compte</h2>
        <Form
          onSubmit={onSubmit}
          name="signup"
          style={{ width: "100%", maxWidth: 350 }}
          initialValues={{ remember: true }}
          onFinish={doSignup} // When click the Signup Button
        >
          <Form.Item
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            rules={[{ required: true, message: "" }]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Pseudo"
            />
          </Form.Item>

          <Form.Item
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rules={[{ required: true, message: "" }]}
          >
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
