import Layout from "../../components/Layout";
import Head from "next/head";
import CardMedia from "../../components/CardMedia";
import Router from "next/router";
import ServiceResult from "../../components/ServiceResult";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function Baby({ results }) {
  return (
    <>
      <Layout page="Search result">
        <Head>
          <title>List Baby</title>
        </Head>
        <h1 className="text-center mt-5">344 Résultas</h1>
        <ul className="flex flex-col items-center justify-center gap-5">
          {results.map((result, id) => {
            console.log(result);
            return (
              <>
                <div className="w-screen px-10">
                  <li className="text-center" key={result.id}>
                    <ServiceResult
                      activity="Plomberie"
                      src={result.picture}
                      note="4.1"
                      nb="18"
                      name={result.firstname}
                      city={result.city}
                      description={result.description}
                      price={result.price}
                      vaccined={result.vaccined ? <VaccinesIcon /> : null}
                      car={result.car ? <DirectionsCarIcon /> : null}
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
  const data = await fetch(`http://localhost:3002/user`).then((response) =>
    response.json()
  );
  console.log(data);
  return {
    props: {
      results: data,
    },
  };
}

// https://randomuser.me/api/?gender=female&results=20&nat=fr
