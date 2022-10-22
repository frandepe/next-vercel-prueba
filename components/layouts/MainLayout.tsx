import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

type PropChildren = {
  children: ReactNode;
};

export const MainLayout: FC<PropChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Franco</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1>Home page</h1>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
