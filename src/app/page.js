import Image from 'next/image'
import Navbar from "@/app/component/Navbar";
import Hero from "@/app/component/Hero";
import Footer from "@/app/component/Footer";

export default function Home() {
  return (
      <>
      <Navbar />
          <Hero />
          <Footer />
       </>
          )

}
