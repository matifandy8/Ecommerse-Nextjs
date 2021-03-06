import type { NextPage } from "next";
import Head from "next/head";
import ProductsScreen from "../components/products";
import { useSession, signIn, signOut } from "next-auth/react";


const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Welcome user
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Eco-Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        
        <ProductsScreen />
      </div>
    </div>
  );
};

export default Home;
