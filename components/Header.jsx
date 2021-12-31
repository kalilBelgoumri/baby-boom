import Link from "next/link";
import Head from "next/head";

const Header = ({ name }) => {
  return (
    <div className="p-10 flex justify-center px-5">
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className="flex text-xl text-black font-bold rounded-xl border-4 border-gray-700">
        <li className="hover:text-red-700 transform transition-all delay-200">
          <Link href="/"> Accueil </Link>
        </li>
        <li className="hover:text-red-700 transform transition-all delay-200">
          <Link href="/projects"> Mes réalisations </Link>
        </li>
        <li className="hover:text-red-700 transform transition-all delay-200">
          <Link href="/Contact"> Me contacter </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
