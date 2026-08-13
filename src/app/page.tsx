import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";
import Clients from "@/components/Clients"; 

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Clients /> 
    </main>
  );
}