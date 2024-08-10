import BackgroundWrap from "@/components/base/gradient-bg";
import { FloatingNav } from "@/components/base/floating-navbar";
import { navItems } from "@/data";
import About from "@/components/app/about";
import CertificatesPartners from "@/components/app/certificates-partners";
import { Contact } from "@/components/app/contact";
import Products from "../components/app/products";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundWrap />
      <div className="md:max-w-[70%] mx-auto h-full">
        <FloatingNav navItems={navItems} />
        <div className="w-full">
          <About />
          <CertificatesPartners />
          <Products />
          <Contact />
        </div>
      </div>
    </main>
  );
}
