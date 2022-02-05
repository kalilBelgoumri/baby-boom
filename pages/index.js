import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import group from "../assets/group.svg";
import messages from "../assets/messages.png";
import { useRouter } from "next/router";
import CardMedia from "../components/CardMedia";
import Image from "next/image";
import background from "../public/assets/background.jpg";
import AlgoliaPlaces from "algolia-places-react";
import Button from "@mui/material/Button";

export default function Home({ results }) {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const uniqid = require("uniqid");
  console.log(uniqid());

  // const searchs = (e) => {
  //   e.preventDefault();
  //   const term = inputSearchRef.current.value;
  //   if (!term) return;
  //   router.push(`/listBaby/?term=${term}`);
  // };

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
  ];
  const checkKeyPress = (e) => {
    const { key, keyCode } = e;
    if (keyCode === 13) {
      router.push(`/listBaby/?Resultat=lyon`);
    }
  };

  return (
    <>
      <Layout page="Home flex">
        <header>
          <div className="flex justify-center">
            <Image className="z-10" src={background} alt="test" />
            <div className="absolute z-50 mt-10 w-[80%] md:w-[70%] ">
              <div className="rounded-xl">
                <AlgoliaPlaces
                  className="rounded-full"
                  onKeyDown={checkKeyPress}
                  placeholder="Chercher votre nounou partous en France ..."
                  onChange={({ suggestion }) =>
                    setUrl(
                      `https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${process.env.NEXT_PUBLIC_APP_ID_API_KEY}&units=metric`
                    )
                  }
                  options={{
                    appid: process.env.NEXT_PUBLIC_APP_ID_API_KEY,
                    apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
                    apiKeyAlgolia: process.env.NEXT_PUBLIC_API_KEY_ALGOLIA,
                    aroundLatLngViaIP: false,
                  }}
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          {/* <ul className="flex w-full gap-2 overflow-x-auto mt-10 mb-10 snap-x">
            {city.map((citys) => {
              return (
                <div
                  key={uniqid()}
                  className="flex flex-shrink-0 relative ml-3 snap-center"
                >
                  <Image
                    className="rounded-lg cursor-pointer hover:transition-opacity delay-300 object-cover object-bottom w-48 h-26
                    md:w-56 md:h-56 lg:w-60 lg:h-60"
                    src={citys.image}
                    title="Paris"
                    alt="paris"
                    Layout="responsive"
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </ul> */}
          <div className="mt-10" />

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
          <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:justify-center md:items-center">
            <div className="px-10 ">
              <Button  size="large" onClick={() => router.push("/Baby")} variant="contained">
                Trouver votre Baby-Sitter
              </Button>
            </div>

            <Button size="large"  onClick={() => router.push("/Baby")} variant="contained">
            Trouver votre Baby-Sitter
            </Button>
          </div>

          <p className="text-center text-xl sm:text-3xl mb-10 mt-10">
            Nos baby-sitters
          </p>

          {/* Baby-sitters */}
          <div className="flex gap-5 md:snap-x overflow-x-auto px-4 mb-10">
            <div className="snap-start relative flex gap-5">
              <ul className="text-center w-full flex items-center justify-center gap-5">
                {results.results.map((result) => {
                  return (
                    <div
                      key={uniqid()}
                      className="flex w-full items-center justify-center"
                    >
                      <li className="text-center">
                        <CardMedia
                          className="w-96"
                          image={result.picture.large}
                          typo={result.name.last}
                          typo={result.name.first}
                          typoCity={result.location.city}
                        />
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex snap-x overflow-x-auto mb-10">
            <div className="snap-start relative flex gap-3 object-cover object-bottom px-5"></div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const data = await fetch(
    `https://randomuser.me/api/?gender=female&results=20&nat=fr`
  ).then((response) => response.json());
  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}
