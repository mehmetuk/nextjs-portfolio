import Hero from "@/components/Hero";
import Fast from "@/components/Fast";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="mt-24">
     <Hero/>
     <Fast/>
     <AboutMe/>
    </div>
  );
}
