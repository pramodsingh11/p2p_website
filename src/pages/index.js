import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import airdrop from "../../public/airdrop.svg"
import content from "../../public/content.svg"
import giftcard from "../../public/giftcard.svg"
import star from "../../public/star.svg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {

      head: "NFT Launch",
      text: "Curate an authentic community around your NFT collection with granular token requirements, custom questions, and more!",
    },
    {
      head: "NFT Launch",
      text: "Curate an authentic community around your NFT collection with granular token requirements, custom questions, and more!",
    },
    {
      head: "NFT Launch",
      text: "Curate an authentic community around your NFT collection with granular token requirements, custom questions, and more!",
    },
    {
      head: "NFT Launch",
      text: "Curate an authentic community around your NFT collection with granular token requirements, custom questions, and more!",
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage">
        <h1>The free and automated web3 allowlist platform</h1>

        <p className="chakra-text css-tjq7t3">
          Tools for teams to build demand fast. Maximum control, minimum
          overhead. Totally free.
        </p>
       
      </div>
      <div className="button">
      <button>Get Started</button>
      </div>
      <div className="card_main">
         {data.map((item,index)=>{
           return(
            <div key={index} className="card_box">
             <div className="img_button">
             {index===1?  <Image src={star} alt="star"/>:index===2? <Image src={airdrop} alt="star"/>:index===3? <Image src={giftcard} alt="star"/>: <Image src={content} alt="star"/>}
             </div>
            <h1>{item.head}</h1>
             <p >{item.text}</p>
             </div>
           )
         })}
          
        </div>
    </>
  );
}
