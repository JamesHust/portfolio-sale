import React from "react";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/base/text-generate-effect";
import MagicButton from "@/components/base/magic-button";
import { WorldWrap } from "@/components/base/world";
import { Phone, Send } from "lucide-react";
import { profile } from "@/data";

const About = () => {
  return (
    <section
      className="relative max-w-7xl min-h-[85vh] z-[2] lg:mt-4 pb-40 mx-auto"
      id="about"
    >
      <div className="absolute top-[20%] left-0 right-0 z-10 flex flex-col items-center">
        <Image
          src="/img/avatar.png"
          alt="avatar"
          width={300}
          height={300}
          className="rounded-lg w-56 md:w-72"
        />
        <div className="flex justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words={profile.titleCommon}
              className="text-center text-2xl md:text-4xl lg:text-6xl px-3"
            />
            <div className="flex items-center md:gap-4 gap-3 mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/facebook.webp"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-10 md:w-24"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/zalo.webp"
                  alt="zalo"
                  width={300}
                  height={300}
                  className="w-6 md:w-7"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src="/img/linkedIn.png"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-6 md:w-7"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full px-3 pb-5">
              <a href={`tel:${profile.phoneNumber}`}>
                <MagicButton
                  title="Call me"
                  icon={<Phone className="w-4 h-4" />}
                  position="right"
                  className="min-w-[160px] max-w-[250px]"
                />
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.subjectEmail)}&body=${encodeURIComponent(profile.contentEmail)}`}
              >
                <MagicButton
                  title="Send email"
                  icon={<Send className="w-4 h-4" />}
                  position="right"
                  className="min-w-[160px] max-w-[250px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <WorldWrap className="absolute left-[42%] top-[50%] w-[500px] h-[500px] lg:top-[40%] lg:left-[85%] lg:w-[120%] lg:h-[120%] z-[1] opacity-[0.7]" />
    </section>
  );
};

export default About;
