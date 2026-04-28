import Certification from "@/components/Certification";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PracticeAreas from "@/components/PracticeAreas";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Newsletter />
        <PracticeAreas />
        <Certification />
        <Team />
        <Process />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
