import { WorldWrap } from "@/components/base/world";
import BackgroundWrap from "@/components/base/gradient-bg";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/base/text-generate-effect";
import MagicButton from "@/components/base/magic-button";
import { FloatingNav } from "@/components/base/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundWrap />
      <div className="max-w-[70%] mx-auto h-full">
        <FloatingNav navItems={navItems} />
        <div className="max-w-7xl w-full">
          <div className="flex flex-col items-center justify-center relative z-[2] lg:mt-4">
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

                <MagicButton
                  title="Show my work"
                  icon={<></>}
                  position="right"
                />
              </div>
            </div>
          </div>
          {/*<BackgroundWrap />*/}
          {/*<FloatingNav navItems={navItems} />*/}
          <WorldWrap
            className="absolute left-[30%] top-[70%] w-[500px] h-[500px] lg:top-[60%] lg:left-[50%] lg:w-[80%] lg:h-[80%] z-[1]" />
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
