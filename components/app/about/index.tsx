import React from "react";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/base/text-generate-effect";
import MagicButton from "@/components/base/magic-button";
import { WorldWrap } from "@/components/base/world";
import { Phone, Send } from "lucide-react";

const About = () => {
  return (
    <section
      className="relative max-w-7xl min-h-[80vh] z-[2] lg:mt-4 mx-auto"
      id="about"
    >
      <div className="absolute top-[30%] z-10 flex flex-col items-center">
        <Image
          src="/img/avatar.png"
          alt="avatar"
          width={300}
          height={300}
          className="rounded-lg w-72"
        />
        <div className="flex justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="I'm Nguyen Van A, Sales Manager at FPT Smart Cloud"
              className="text-center text-2xl md:text-5xl lg:text-6xl"
            />
            <div className="flex items-center md:gap-3 gap-6 mb-5">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/facebook.webp"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-10"
                />
              </div>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/zalo.webp"
                  alt="zalo"
                  width={300}
                  height={300}
                  className="w-6"
                />
              </div>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/linkedIn.png"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full px-3">
              <MagicButton
                title="Call me"
                icon={<Phone className="w-4 h-4" />}
                position="right"
              />
              <MagicButton
                title="Send email"
                icon={<Send className="w-4 h-4" />}
                position="right"
              />
            </div>
          </div>
        </div>
      </div>
      <WorldWrap className="absolute left-[30%] top-[55%] w-[500px] h-[500px] lg:top-[40%] lg:left-[85%] lg:w-[120%] lg:h-[120%] z-[1] opacity-[0.7]" />
    </section>
  );
};

export default About;
