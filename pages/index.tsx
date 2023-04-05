import Head from "next/head";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Selena Tsoukala</title>
        <meta name="description" content="Architect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Selena Tsoukala</h1>
          Architect
        </div>
      </main>
    </>
  );
}
