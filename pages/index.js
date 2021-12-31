import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import Card from "../components/Card";

export default function Home({ data }) {
  return (
    <>
      <Layout page='Home'>
        <h1 className="text-center"> test</h1>
      </Layout>
    </>
  );
}
