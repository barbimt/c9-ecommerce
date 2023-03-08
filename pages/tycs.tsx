import { NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

type Tyc = {
  version: string,
  tycs: [
    { id: number, 
      title: string, 
      description: string 
    }
    ];
};

export interface IProps {
  data: Tyc;
}

const TerminosYCondiciones: NextPage<IProps> = ({ data }) => {
  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>Terminos y Concidiones</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API

export async function getStaticProps() {
  const response = await fetch(process.env.INTERNAL_API_BASE_URL+"/tycs");

  const data = await response.json();

  return {
    props: { data: data },
  };
}

export default TerminosYCondiciones;
