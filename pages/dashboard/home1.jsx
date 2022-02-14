import { Layout } from "antd";

export default function Menu() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}
