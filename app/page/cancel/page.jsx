'use client'
import Image from "next/image";
import ConfettiButton from "@/components/Contetti";
import { useState} from "react";

export default function Cancel() {


  return (<>
      
    <main className="flex  h-screen flex-col items-center justify-center  bg-[#E8E8E8] bg-cover bg-center " style={{backgroundImage:"url('/Pink Floral Watercolor Wedding Invitation (1).png')"}} >
     
    <>
  {/* Hello world */}
  <iframe
    src="https://giphy.com/embed/l378ayM0PpEP72zVC"
    width={480}
    height={480}
    style={{}}
    frameBorder={0}
    className="giphy-embed"
    allowFullScreen=""
  />
  <p>
    <a href="https://giphy.com/gifs/art-design-illustration-l378ayM0PpEP72zVC">
      via GIPHY
    </a>
  </p>
</>

     
    </main>
  </>

  );
}
