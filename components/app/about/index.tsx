import React from "react";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/base/text-generate-effect";
import { Phone, Send } from "lucide-react";
import { profile } from "@/data";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section
      className="relative max-w-7xl min-h-screen mx-auto"
      id="about"
    >
      <div className="absolute top-10 w-full flex items-center justify-center">
        <Image
          src="/img/logo.svg"
          alt="facebook"
          width={600}
          height={600}
          className="w-32 md:w-40"
        />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <Image
          src="/img/avatar-1.jpg"
          alt="avatar"
          width={300}
          height={300}
          className="rounded-full w-52 md:w-64"
        />
        <div className="flex justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words={profile.titleCommon}
              className="text-center text-2xl md:text-4xl lg:text-6xl"
            />
            <div className="flex items-center mb-5 gap-1">
              <a href="https://www.facebook.com/thanh.tien.18?mibextid=kFxxJD">
                <Image
                  src="/img/facebook.webp"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-[50px] md:w-20"
                />
              </a>
              <a href="https://zalo.me/0396814752">
                <Image
                  src="/img/zalo.webp"
                  alt="zalo"
                  width={300}
                  height={300}
                  className="w-[30px] md:w-12 mr-3 md:mr-4"
                />
              </a>
              <a href="https://www.linkedin.com/in/thanh-tien-9a20a3201/">
                <Image
                  src="/img/linkedIn.png"
                  alt="facebook"
                  width={300}
                  height={300}
                  className="w-[30px] md:w-12"
                />
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 md:gap-5 w-full pb-5 md:max-w-[500px]">
              <a
                href={`tel:${profile.phoneNumber}`}
                className="w-full"
              >
                <Button className="w-full h-10 md:h-12 text-white bg-gradient-to-r from-[#516dff] from-0% via-[#9e7ee1] via-70% to-[#fa92bd] to-100%">
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay
                </Button>
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.subjectEmail)}&body=${encodeURIComponent(profile.contentEmail)}`}
                className="w-full"
              >
                <Button className="w-full h-10 md:h-12 text-white bg-white/10">
                  <Send className="w-4 h-4 mr-2" />
                  Gửi email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<WorldWrap className="absolute left-[42%] top-[50%] w-[500px] h-[500px] lg:top-[40%] lg:left-[85%] lg:w-[120%] lg:h-[120%] z-[1] opacity-[0.7]" />*/}
    </section>
  );
};

export default About;
