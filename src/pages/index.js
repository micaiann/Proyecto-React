import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React from "react";
import ShoppingCart from "../components/organisms/ShoppingCart";
import { Inter } from "next/font/google";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";
import GrupoDeImagenes from "@/components/organisms/GrupoDeImagenes";
import BooksContextProvider from "@/context/BooksContextProvider";
import NextJsCarousel from "@/components/molecules/Carousel";
const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BooksContextProvider>
        <header>
          {/* BARRA DE NAVEGACIÓN */}
          <div>
            <Navbar />
          </div>
        </header>

        <main>
          {/* INICIO */}
          <div className={styles.inicio} id="Inicio">
            <h2>Leer hace bien.</h2> </div>
         

          {/* CLÁSICOS */}
          <div id="Libros" ></div>
          <div>
            <ShoppingCart />
          </div>
          

           {/* NOVEDADES */}
          <div>
          <NextJsCarousel/>
          </div>
         

          {/* BENEFICIOS Y LECTURA */}
          <div id="Informacion">
            <h2 className="h2-beneficios-lectura">
              La lectura como un estilo de vida
            </h2>
            <section className="section-beneficios-lectura">
              <div className="divs-beneficios-lectura">
                <GrupoDeImagenes />
              </div>
            </section>
          </div>
        

        </main>

        <footer>
          {/* FOOTER */}
          <div id="Contacto">
            <Footer />
          </div>
        </footer>
      </BooksContextProvider>
    </>
  );
};

export default index;
