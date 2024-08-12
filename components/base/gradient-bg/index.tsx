import { Spotlight } from "@/components/base/spotlinght";

const BackgroundWrap = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full">
      <div className="relative min-h-screen min-w-screen">
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
          className="h-full w-full
       absolute top-0 left-0 flex items-center justify-center z-0 bg-cover"
          style={{ backgroundImage: `url(/img/bg-mobile.png)` }}
        >
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrap;
