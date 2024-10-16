import Image from "next/image";
import {Button} from "@/components/ui/button"
import { kMaxLength } from "buffer";

export default function Home() {
  return (

    

    <div>
      <h1 className="text-3xl font-bold text-center pb-10">*Image*</h1>

      <Button variant="secondary">Get started</Button>
    </div>
    
  );
}