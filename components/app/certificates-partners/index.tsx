import React from "react";
import { certificatesPartners } from "@/data";
import { InfiniteMovingCarousels } from "@/components/base/infinite-carousel";

const CertificatesPartners = () => {
  return (
    <section
      id="partners"
      className="pt-[24vh] overflow-x-hidden"
    >
      <h1 className="font-bold text-center text-3xl md:text-5xl lg:text-6xl">
        Certificates
        <span className="text-purple"> & Partners</span>
      </h1>

      <div className="max-w-[91vw] flex flex-col items-center justify-center mt-8 md:mt-12">
        <div className="w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCarousels
            items={certificatesPartners}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatesPartners;
