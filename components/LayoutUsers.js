import Head from "next/head";
import background from "../assets/login.jpg";
import Image from "next/image";



const LayoutUsers = ({ children, page }) => {

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <div className="background">
        <Image
          className="object-cover object-center"
          src={background}
          width="500" height="200" layout="responsive"
        />
      </div>
      <main className="flex-1">{children} </main>
 
    </div>
  );
};

export default LayoutUsers;
