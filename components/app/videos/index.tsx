"use client";
import React from "react";
import { videos } from "@/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Videos = () => {
  return (
    <section
      id="videos"
      className="pt-24 overflow-x-hidden px-3 md:pt-[30vh]"
    >
      <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-5xl text-white">
        Videos
        {/*<span className="text-purple"> & Partners</span>*/}
      </h1>

      <div className="mt-4">
        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((vd) => (
              <CarouselItem key={vd.id}>
                <div className="flex items-center justify-center">
                  <iframe
                    src={vd.src}
                    className="w-full h-[25vh] md:h-[80vh] rounded-lg"
                  ></iframe>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -top-8 left-2" />
          <CarouselNext className="absolute -top-8 right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Videos;
