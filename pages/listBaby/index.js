import Layout from "../../components/Layout";
import Head from "next/head";
import CardMedia from "../../components/CardMedia";
import Router from "next/router";
import ServiceResult from "../../components/ServiceResult";

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
                <div className="w-screen px-10">
                  <li className="text-center" key={result.id}>
                    <ServiceResult
                      activity="Plomberie"
                      src={result.picture.large}
                      note="4.1"
                      nb="18"
                      name={result.name.first}
                      city={result.location.city}
                      description="Passionné de fuite d'eau depuis mon enfance j'en ai fait mon métier"
                      price={"45"}
                    />
                  </li>
                </div>
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
    `https://randomuser.me/api/?gender=female&results=20&nat=fr`
  ).then((response) => response.json());
  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}
