import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import airdrop from "../../public/airdrop.svg"
import content from "../../public/content.svg"
import giftcard from "../../public/giftcard.svg"
import star from "../../public/star.svg"
import statics from "../../public/statics.png"
import building from "../../public/building.png"
import { useState } from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import logo from "../../public/logo.svg"
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
  

  const [activeItem, setActiveItem] = useState(null);

  const faqItems = [
    {
      question: 'What is Next.js?',
      answer: 'Next.js is a framework for building server-side rendered React applications.'
    },
    {
      question: 'What are the benefits of using Next.js?',
      answer: 'Next.js provides many benefits including server-side rendering, automatic code splitting, and simplified routing.'
    },
    {
      question: 'How do I get started with Next.js?',
      answer: 'You can get started with Next.js by creating a new project using the `create-next-app` command.'
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <Head>
        <title>P2P App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage">
        <h1>The free and automated P2P allowlist platform</h1>

        <p className="chakra-text css-tjq7t3">
          Tools for teams to build demand fast. Maximum control, minimum
          overhead. Totally free.
        </p>

      </div>
      <div className="button">
        <button>Get Started</button>
      </div>
      <div className="card_main">
        {data.map((item, index) => {
          return (
            <div key={index} className="card_box">
              <div className="img_button">
                {index === 1 ? <Image src={star} alt="star" /> : index === 2 ? <Image src={airdrop} alt="star" /> : index === 3 ? <Image src={giftcard} alt="star" /> : <Image src={content} alt="star" />}
              </div>
              <h1>{item.head}</h1>
              <p >{item.text}</p>
            </div>
          )
        })}

      </div>
     
      <div className="homepage2">
        <div className="card2">
          <span> Maximum visibility</span>
          <p>
            Use your allowlist dashboard to monitor registrations, easily attribute demand back to specific marketing initiatives and identify opportunities to double down.
          </p>
        </div>
        <div className="card2_image">
         
          <Image className="display_none" src={statics} alt="statics" height={500} width={425}/>
        </div>
      </div>
      <div className="homepage2">
      <div className="card3_image">
          <Image className="display_none"  src={building} alt="statics" height={469} width={500}/>
        </div>
        <div className="card2">
          <span>Battle-tested, multi-chain infrastructure</span>
          <p>
          Built on Alchemy is legendary developer platform, your project will seamlessly scale with demand. Spearmint is available for teams building on Ethereum, Polygon, Arbitrum and Optimism.
          </p>
        </div>
       
      </div>
      <div className="subHead">
        <div style={{marginTop:"3%"}}>
         <bold>WE ARE HERE TO HELP</bold>
         </div>
        <div className="heading1">
        {/* <h1>Frequently asked questions</h1> */}
        </div>

        <div className="faq">
          {/* <hr/> */}
          {/* <Accordion>
      {faqItems.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()} onClick={() => setActiveItem(index)}>
          <Card>
            <Accordion.Header>
              <Button variant="link" className="text-start">
                {item.question}
              </Button>
            </Accordion.Header>
            <Accordion.Body>
              {item.answer}
            </Accordion.Body>
          </Card>
        </Accordion.Item>
      ))}
    </Accordion> */}
        </div>
       
      </div>
      <footer className="footer">
      <div className="css-1lekzkb" style={{justifyContent:"center"}}>
           <a>
               <Image src={logo} width={145} height={28} alt="p2p" />
               
           </a>
           </div>
          
      </footer>
    </>
  );
}
