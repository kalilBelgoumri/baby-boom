import Layout from "../../components/Layout";
import Head from "next/head";
import CardMedia from "../../components/CardMedia";
import Router from "next/router";
import UsersResults from "../../components/UsersResults";

export default function Baby({ results }) {
  return (
    <>
      <Layout page="Search result">
        <Head>
          <title>List Baby</title>
        </Head>
        <h1 className="text-center mt-5">344 Résultas</h1>
        <ul className="flex flex-col items-center justify-center gap-5">
          {results.results.map((result) => {
            console.log(result);
            return (
              <>
                <li className="text-center" key={result.id}>
                  <UsersResults
                    className="w-screen px-10 bg-red-800"
                    image={result.picture.large}
                    typo={result.name.last}
                    typo={result.name.first}
                    typoCity={result.location.city}
                  />
                  {/* <CardMedia
                      className="w-full"
                      image={result.picture.large}
                      typo={result.name.last}
                      typo={result.name.first}
                      typoCity={result.location.city}
                    /> */}
                </li>
              </>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const data = await fetch(
    `https://randomuser.me/api/?gender=female&results=10&nat=fr`
  ).then((response) => response.json());
  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}
