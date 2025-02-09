'use client';
/* eslint-disable */

import { useRef, useEffect } from "react";
import NavBar from "./utils/navBar";
import Lottie from "lottie-react";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import MyFooter from "./utils/myFooter";
import Section4 from "./components/section4";

import animationData from "../../public/Animation7.json";

export const runtime ="edge"
export default function Home() {
 const lottieRef = useRef(null);
 
   useEffect(() => {
     if (lottieRef.current) {
       lottieRef.current.setSpeed(0.5);
     }
   }, []);

  return (
    <>
    <div id="section-1">
      <br/>
    </div>
      <header >
        <NavBar />
      </header>
      <div className="relative">
        {/* Indicadores no lado direito */}
        <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              // href={`#section-${index + 1}`}
              className="w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors border-2 border-white"
              aria-label={`Ir para seção ${index + 1}`}
            />
          ))}
        </nav>

        {/* Seções da página */}
        <div className="min-h-[60vh] flex items-center justify-center">
       <Section1/>
        </div>

        {/* Texto 'use client' à direita */}
          

        <div id="section-2" className="max-h-[80vh] flex items-center justify-center ">
          {/* <h1 className="text-4xl font-bold">Div 3</h1> */}
          <Section2/>
        </div>
        <div id="section-3" className="max-h-[80vh] flex items-center justify-center">
          {/* <h1 className="text-4xl font-bold">Div 4</h1> */}
          <Section3/>
          <Lottie
          animationData={animationData}
          loop={true}
          lottieRef={lottieRef}
          style={{
            marginTop: "50vh",
            width: "110vw",
            marginLeft: "-10vw",
            height: "auto",
            filter: "grayscale(100%)",
            backgroundColor: "transparent",
            position: "absolute",
          }}
        />
        </div>
        <div id="section-4" className="max-h-[80vh] flex items-center justify-center">
          {/* <h1 className="text-4xl font-bold">Div 5</h1> */}
          
          <Section4/>
        </div>
        <div id="section-5" className="max-h-[80vh] flex items-center justify-center" style={{
          marginTop: '-50vh',
        }}>
         
          {/* <Section5/> */}
          <MyFooter/>
        </div>
        <div id="section-6" className="max-8-[80vh] flex items-center justify-center" style={{
        }}>
          {/* <h1 className="text-4xl font-bold">Div 5</h1> */}
          {/* <Lottie
          animationData={animationData}
          loop={true}
          lottieRef={lottieRef}
          style={{
            marginTop: "33vh",
            width: "110vw",
            marginLeft: "-10vw",
            height: "auto",
            filter: "grayscale(100%)",
            backgroundColor: "transparent",
            position: "absolute",
          }}
        /> */}
      {/* <MyFooter/> */}
        </div>
      </div>
      
    </>
  );
}
