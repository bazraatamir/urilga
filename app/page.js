'use client'
import Image from "next/image";
import ConfettiButton from "@/components/Contetti";
import { useState} from "react";
import Link from "next/link";

export default function Home() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleButtonClick = () => {
    setIsConfettiActive(true);
  };

  return (<>
      
    <main className="flex  h-screen flex-col items-center justify-center  bg-[#E8E8E8] bg-cover bg-center " style={{backgroundImage:"url('/Pink Floral Watercolor Wedding Invitation (1).png')"}} >
      <div className="flex w-[100%]  h-screen flex-col items-center justify-center  bg-[#E8E8E8] bg-contain bg-center shadow-lg transition-shadow duration-300 hover:shadow-2xl " style={{backgroundImage:"url('/Pink Floral Watercolor Wedding Invitation (1).png')"}}>
      <div className="w-[95%] h-[80%] lg:w-[40%] lg:h-[90%] flex justify-center relative items-center bg-contain bg-center shadow-lg transition-shadow duration-300 hover:shadow-2xl  " style={{backgroundImage:"url('/Pink Floral Watercolor Wedding Invitation (1).png')"}}>
        
        <img className="h-[80%] shadow-lg transition-shadow duration-300 hover:shadow-2xl relative " src="/Pink Floral Watercolor Wedding Invitation.png"/>
        <div className="absolute w-[80%] h-[68%] flex justify-around items-end " >
          <div className="flex gap-[10px] ">
          <ConfettiButton/>
            <Link href='/page/cancel' className="text-[#A87526] border border-solid border-[#A87526] p-[5px]">
                татгалзах
            </Link>
          </div>

        </div>
      </div>
      </div>
      
     
    </main>
  </>

  );
}
