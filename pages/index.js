import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";


const PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const HASH = "8ca5a76989d8537214e5029f536380d3";

export default function Home({ data }) {
  const [movies, setMovies] = useState([]);
  async function saveMovie(e) {
    e.preventDefault();
    setMovies([...movies, formData]);
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
console.log(data)
    return await response.json();
  }
  return (
    <div>
      <Layout page="Home">
        <Head>
          <title>Movie List Marvel</title>
        </Head>
        <div>
          <ul>
            {data && data.map((items) => {
                return <li key="items.id">{items.data}</li>;
              })}
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {

  try {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
    );
    const result = await res.json();
    console.log(result.data);
    return {
      props: { res: result },
    };
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      data: movies,
    },
  };
}
