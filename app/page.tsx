import BackgroundWrap from "@/components/base/gradient-bg";
import About from "@/components/app/about";
import { Contact } from "@/components/app/contact";
import Products from "../components/app/products";
import Videos from "@/components/app/videos";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundWrap />
      <div className="absolute h-screen overflow-y-auto w-full">
        <div className="w-full md:w-[70%] mx-auto">
          <About />
          <Products />
          <Videos />
          {/*<CertificatesPartners />*/}
          <Contact />
        </div>
      </div>
    </main>
  );
}
