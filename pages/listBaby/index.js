import Layout from "../../components/Layout";
import Head from "next/head";
import ServiceResult from "../../components/ServiceResult";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function Baby({ results }) {
  const uniqid = require("uniqid");
  console.log(uniqid());

  return (
    <>
      <Layout page="Search result">
        <Head>
          <title>List Baby</title>
        </Head>
        <div className="mt-10">
          <h1 className="text-center">344 Résultats</h1>
        </div>
        <ul className="flex flex-col items-center justify-center gap-5">
          {results.map((result) => {
            // console.log(result);
            return (
              <div key={uniqid()} className="w-screen px-10">
                <li className="text-center">
                  <ServiceResult
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
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
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
