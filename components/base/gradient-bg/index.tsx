import { Spotlight } from "@/components/base/spotlinght";

const BackgroundWrap = () => {
  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div
        className="min-h-screen w-full bg-black-100 bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center z-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    </div>
  );
};

export default BackgroundWrap;
