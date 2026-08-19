import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIsQBCore from "@/components/WhatIsQBCore";
import CrossPlatform from "@/components/CrossPlatform";
import Specification from "@/components/Specification";
import DomainArchitecture from "@/components/DomainArchitecture";
import Platforms from "@/components/Platforms";
import WhyUGC from "@/components/WhyUGC";
import Principles from "@/components/Principles";
import Roadmap from "@/components/Roadmap";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhatIsQBCore />
        <CrossPlatform />
        <Specification />
        <DomainArchitecture />
        <Platforms />
        <WhyUGC />
        <Principles />
        <Roadmap />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
