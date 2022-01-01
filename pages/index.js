import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import background from "../assets/background.jpg";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <>
      <Layout page="Home flex relative">
        <div className="test flex justify-center">
          <div className="absolute z-50 mt-10 ">
            <Search />
          </div>
          <Image
            className="z-10"
            img
            src={background}
            alt="background"
            property="responsive"
          />
        </div>
      </Layout>
    </>
  );
}
