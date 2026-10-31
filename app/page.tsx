import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/Hero";
import WhatIsQBCore from "@/components/WhatIsQBCore";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main-content">
        <Hero />
        <WhatIsQBCore />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
