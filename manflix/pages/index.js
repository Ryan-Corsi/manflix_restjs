import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Register from ".//Register";
import Menu from ".//Menu";
import UserRegister from ".//UserRegister";
import Filmes from ".//Filmes";
export default function Home() {
  return (
    
    <div className={styles.main}>
      <Head>
        <title>Manflix</title>
      </Head>

      

      {/* <div
        className={
          styles.logoPanel + " flex align-items-center justify-content-center"
        }
        
      > 
      
       <Image
          src="/image/manflix-bg.png"
          alt="Star Wars Image"
          width="370px"
          height="250px"
        /> *
      </div>

      <div
        className={
          styles.contentPanel +
          " flex align-items-center justify-content-center"
        }
      >  */}

      {/* <Register/> */}
      <Menu/>
      {/* <UserRegister/> */}
      {/* <Filmes/> */}
    
    </div>
  );
}
