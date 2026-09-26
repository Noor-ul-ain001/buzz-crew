import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <About />
        <Services />
        <Process />
        <Industries />
        <Clients />
        <Testimonials />
        <Journey />
      </main>
      <Contact />
    </>
  );
}
