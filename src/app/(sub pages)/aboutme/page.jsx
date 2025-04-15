import AvatarScene from "@/components/AvatarScene";
import Image from "next/image";
export default function AboutMe() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
        <Image
      priority
      sizes="100vw"
       src='/background/RockymountainsbgAI.png' alt="background-image"
       fill
       className={"w-full h-full object-cover object-center opacity-80"}/>
      <div className="sticky top-0 h-screen">
        <AvatarScene />
      </div>

      {/* Add other about me content */}
      <div className="mt-[120vh] text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-xl mx-auto">
          Hey, I'm Cody — I design web apps, work with 3D interfaces, and love building interactive experiences.
        </p>
      </div>
    </main>
  );
}
