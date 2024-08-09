import { WorldWrap } from "@/components/base/world";
import BackgroundWrap from "@/components/base/gradient-bg";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/base/text-generate-effect";
import MagicButton from "@/components/base/magic-button";
import { FloatingNav } from "@/components/base/floating-navbar";
import { navItems } from "@/data";
import Projects from "@/components/base/projects";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundWrap />
      <div className="md:max-w-[70%] mx-auto h-full">
        <FloatingNav navItems={navItems} />
        <div className="w-full">
          <div className="relative max-w-7xl min-h-screen z-[2] lg:mt-4">
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

                  <MagicButton
                    title="Show my work"
                    icon={<></>}
                    position="right"
                  />
                </div>
              </div>
            </div>
            <WorldWrap className="absolute left-[30%] top-[55%] w-[500px] h-[500px] lg:top-[60%] lg:left-[50%] lg:w-[80%] lg:h-[80%] z-[1] opacity-[0.7]" />
          </div>
          <div className="z-[2]">
            <Projects />
          </div>
          {/*<BackgroundWrap />*/}
          {/*<FloatingNav navItems={navItems} />*/}

          {/*<RecentProjects />*/}
          {/*<Clients />*/}
          {/*<Experience />*/}
          {/*<Approach />*/}
          {/*<Footer />*/}
        </div>
      </div>
    </main>
  );
}
