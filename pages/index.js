import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import group from "../assets/group.svg";
import messages from "../assets/messages.png";
import { useRouter } from "next/router";
import CardMedia from "../components/CardMedia";
import Image from "next/image";
import background from "../public/assets/background.jpg";

import "firebase/firestore";

export default function Home() {
  const router = useRouter();
  const uniqid = require("uniqid");
  console.log(uniqid());

  // Card city
  const city = [
    {
      id: 1,
      title: "paris",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 2,
      title: "lyon",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 3,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 4,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 5,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 6,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 7,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 8,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
    {
      id: 9,
      title: "marseille",
      image: "https://i.ibb.co/TWnKkmL/11098467.jpg",
    },
  ];

  return (
    <>
      <Layout page="Home flex">
        <header>
          <div className="flex justify-center">
            <div className="absolute z-50 mt-10 w-[80%] md:w-[70%] ">
              <Search className="border-2 border-emerald-600 border-double" />
            </div>
            <Image className="z-10" src={background} alt="test" />
          </div>
        </header>
        <main>
          <ul className="flex w-full gap-2 overflow-x-auto mt-10 mb-10 snap-x">
            {city.map((citys) => {
              return (
                <div className="flex flex-shrink-0 relative ml-3 snap-center">
                  <li key={citys.uniqid}></li>
                  <img
                    className="rounded-lg cursor-pointer hover:transition-opacity delay-300 object-cover object-bottom w-40 h-36
                    md:w-56 md:h-56 lg:w-60 lg:h-60"
                    src={citys.image}
                    alt="paris"
                  ></img>
                </div>
              );
            })}
          </ul>
          <p className="text-center text-xl sm:text-3xl">
            Votre recherche de Baby-sitter simplifié
          </p>
          <div className="flex justify-center items-center mb-10">
            <Image src={group} height="100" width="100" />
          </div>
          <p className="text-center text-xl sm:text-3xl mb-10 font-body">
            Publier une annonce gratuitement
          </p>
          <p className="text-center text-xl sm:text-3xl mb-10">
            Partager ce dont vous avez besoin pour que les bonnes personnes vous
            trouvent
          </p>
          <div className="flex justify-center items-center mb-10">
            <Image src={messages} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={() => router.push("/Baby")}
              className="text-black text-lg h-16 py-2 px-8 cursor-pointer bg-[#B538A8] rounded-lg mb-5 font-body"
            >
              Trouver votre Baby-Sitter
            </button>
            <button
              onClick={() => router.push("/Baby")}
              className="text-black text-lg h-16 py-2 px-16 cursor-pointer rounded-lg shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 mb-5"
            >
              Je suis baby-sitter
            </button>
          </div>

          <p className="text-center text-xl sm:text-3xl mb-10 mt-10">
            Nos BABY-STTERS
          </p>

          {/* Baby-sitters */}
          <div className="flex gap-5 snap-x overflow-x-auto px-4 mb-10">
            <div className="snap-start relative flex gap-5">
              <CardMedia
                image="https://i.ibb.co/TWnKkmL/11098467.jpg"
                typo="Francoise 42 ans"
                typoCity="Lyon"
              />
              <CardMedia
                image="https://i.ibb.co/TWnKkmL/11098467.jpg"
                typo="Sandra 28 ans"
                typoCity="Paris"
              />
              <CardMedia
                image="https://i.ibb.co/TWnKkmL/11098467.jpg"
                typo="Christelle 33 ans"
                typoCity="Marseille"
              />
              <CardMedia
                image="https://i.ibb.co/TWnKkmL/11098467.jpg"
                typo="Christelle 33 ans"
                typoCity="Marseille"
              />
            </div>
          </div>
          <div className="flex snap-x overflow-x-auto mb-10">
            <div className="snap-start relative flex gap-3 object-cover object-bottom px-5">
              <CardMedia
                image="assets/christelle.jpg"
                typo="Francoise 42 ans"
                typoCity="Lyon"
              />
              <CardMedia
                image="assets/victoria.jpg"
                typo="Sandra 28 ans"
                typoCity="Paris"
              />
              <CardMedia
                image="assets/christelle.jpg"
                typo="Christelle 33 ans"
                typoCity="Marseille"
              />
              <CardMedia
                image="assets/victoria.jpg"
                typo="Christelle 33 ans"
                typoCity="Marseille"
              />
            </div>
            <button onClick={() => createUser({ name: "Brad Garropy" })}>
              Create
            </button>
          </div>
        </main>
      </Layout>
    </>
  );
}
