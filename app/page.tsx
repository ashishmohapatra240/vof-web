import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";
import WhatWeDo from "./components/sections/WhatWeDo";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Testimonials />
      <WhatWeDo />
      <About />
      <Contact />
    </main>
  );
}
