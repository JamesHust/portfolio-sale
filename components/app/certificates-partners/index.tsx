import React from "react";
import { certificatesPartners } from "@/data";
import { InfiniteMovingCarousels } from "@/components/base/infinite-carousel";

const CertificatesPartners = () => {
  return (
    <section
      id="partners"
      className="pt-48 md:pt-[20vh] overflow-x-hidden"
    >
      <h1 className="heading">
        Certificates
        <span className="text-purple"> & Partners</span>
      </h1>

      <div className="max-w-[91vw] flex flex-col items-center justify-center max-lg:mt-10">
        <div className="w-full md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
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
