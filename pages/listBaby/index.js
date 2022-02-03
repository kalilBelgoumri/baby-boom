import Layout from "../../components/Layout";
import Head from "next/head";
import CardMedia from "../../components/CardMedia";
import Router from "next/router";
import ServiceResult from "../../components/ServiceResult";
import VaccinesIcon from "@mui/icons-material/Vaccines";

export default function Baby({ results }) {
  const test = [
    {
      id: 1,
      firstname: "Christine",
      city: "Lyon 3",
      experience: "1 ans",
      vaccined: false,
      car: true,
      picture: "/assets/users/avatar-16.jpg",
    },

    {
      id: 2,
      firstname: "Sandra",
      city: "Lyon 8",
      experience: "2 ans",
      vaccined: true,
      car: true,
      picture: "/assets/users/avatar-19.jpg",
    },
    {
      id: 4,
      firstname: "Cassandre",
      city: "Lyon 2",
      experience: "5 ans",
      vaccined: false,
      car: true,
      picture: "/assets/users/avatar-22.jpg",
    },
    {
      id: 2,
      firstname: "Elisabeth",
      city: "Lyon",
      experience: "2 ans",
      vaccined: true,
      car: true,
      picture: "/assets/users/avatar-37.jpg",
    },
    {
      id: 2,
      firstname: "Audrey",
      city: "Lyon 4",
      experience: "4 ans",
      vaccined: false,
      car: false,
      picture: "/assets/users/avatar-39.jpg",
    },
    {
      id: 2,
      firstname: "Priscilla",
      city: "Lyon 1",
      experience: "3 ans",
      vaccined: true,
      car: true,
      picture: "/assets/users/avatar-25.jpg",
    },
  ];
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
                      description="Assistante maternelle agréée et titulaire du cap petite enfance, j'ai un agrément pour 4 enfants et un périscolaire. 
                      Je suis disponible."
                      price={"45"}
                      vaccined={result.vaccined ? <VaccinesIcon /> : null}
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
