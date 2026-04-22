import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Approach from "@/components/Approach";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Vision />
      <Approach />
      <Values />
      <Footer />
    </main>
  );
}
