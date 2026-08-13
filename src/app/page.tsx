import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Recognition from "@/components/Recognition"; 
import Testimonials from "@/components/Testimonials"; 

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Clients />
      <Services />
      <Recognition />
      <Testimonials />
    </main>
  );
}