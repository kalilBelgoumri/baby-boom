import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import Search from "../components/Search";
import background from "../assets/background.jpg";
import Image from "next/image";

export default function Home() {
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
  ];

  return (
    <>
      <Layout page="Home flex relative">
        <div className="flex justify-center">
          <div className="absolute z-50 mt-10 w-[80%] md:w-[70%]">
            <Search />
          </div>
          <Image
            className="z-10"
            src={background}
            alt="background"
            property="responsive"
          />
        </div>
        <ul className="flex w-full gap-2 overflow-x-auto mt-10 mb-10 snap-x">
          {city.map((citys) => {
            return (
              <div className="flex flex-shrink-0 relative ml-3 snap-center">
                <li key={citys.id}></li>
                <img
                  className="rounded-lg object-cover object-bottom w-48  md:w-52"
                  src={citys.image}
                  alt="paris"
                ></img>
              </div>
            );
          })}
        </ul>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          amet, magnam voluptatibus quasi non molestias maiores consequuntur
          quisquam ipsa iste quam, esse voluptas inventore, unde facilis
          provident qui quidem! Ad.
        </p>
        {/* <div className="card flex justify-around mt-10">
          <CardIndex img={lyon} />
          <CardIndex img={marseille} />
          <CardIndex img={marseille} />
          <CardIndex img={paris} />
        </div> */}
      </Layout>
    </>
  );
}
