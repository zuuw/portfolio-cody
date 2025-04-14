import Codytext from "@/components/3d-text/CodyM";
import ModelRender from "@/components/ModelRender";
import HomeRedirect from "@/components/buttons/HomeRedirect";
import ModelMe from "@/components/models/cody-head";
// import Modelcody  from "@/components/models/cody-head";
// import Model from "@/components/models/mainmodel";
import Image from "next/image";

export default function Home() {
  return (

    <main className="relative h-screen w-screen overflow-hidden">
      <Image
      priority
      sizes="100vw"
       src='/background/RockymountainsbgAI.png' alt="background-image"
       fill
       className={"w-full h-full object-cover object-center opacity-50"}/>
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/12 z-50">
  <HomeRedirect />
  </div>
      <div className="w-full h-screen">
        <ModelRender>
          <Codytext />
        </ModelRender>
      </div>



    </main>
  );
}
