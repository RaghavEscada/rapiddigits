import Image from "next/image";
import { Button } from "@/components/ui/button";
import yo from "@/app/assets/rd.png"

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-center">
        
        {/* Replace *Image* with your actual Image component */}
        <Image src={yo} alt="Description" width={300} height={200} />

        <p className="text-lg mt-4 text-bold">Together, Let’s Turn Numbers into Fun!</p>

        <Button variant="secondary" className="mt-6">Get started</Button>
      </div>

      <div>
        {/* Additional content can go here */}
      </div>
    </section>
  );
}
