import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Flow from "./components/Flow";
import Features from "./components/Features";
import Modules from "./components/Modules";
import IndiaContext from "./components/IndiaContext";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Challenges />
      <Flow />
      <Features />
      <Modules />
      <IndiaContext />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
