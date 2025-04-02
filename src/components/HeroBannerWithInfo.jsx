import React from "react";
import Image from "next/image";
import { features } from "@/constants";

function HeroBannerWithInfo() {
    return (
        <section className="shadow-sm">
          <div className="h-auto w-full max-md:max-w-full">
            <Image
              src="/images/banner1.webp"
              className="self-stretch aspect-[3.5]"
              alt="Hero banner"
              height={100}
              width={9999}
            />
          </div>

          <div className="flex flex-col justify-center items-center self-stretch px-16 py-4 mt-2 w-full text-sm bg-white bg-opacity-0 shadow-[0px_2px_4px_rgba(0,0,0,0.075)] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center max-w-full w-[1106px]">
              <div className="flex gap-4 self-stretch">
                <div className="h-auto w-16">
                  <Image
                    src={features[0].icon}
                    className="object-contain shrink-0 aspect-[1.1]"
                    alt="Rating icon"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="my-auto">
                  <div className="flex gap-2.5 leading-loose text-black whitespace-nowrap max-md:mr-1">
                    <p className="grow my-auto"><b>{features[0].title}</b></p>
                    <div className="h-auto w-[137px]">
                      <Image
                        src={features[0].rating}
                        className="object-contain shrink-0 max-w-full aspect-[4.57]"
                        alt="Star rating"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                  <p className="mt-1.5 text-neutral-800">{features[0].subtitle}</p>
                </div>
              </div>

              <div className="flex shrink-0 self-stretch w-0.25 shadow-sm bg-white bg-opacity-0 h-[58px]" />

              {features.slice(1).map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 self-stretch my-auto leading-6 text-black whitespace-nowrap"
                >
                  <div className="h-auto w-[42px]">
                    <Image
                      src={feature.icon}
                      className="object-contain shrink-0 aspect-square"
                      alt={feature.title.replace("\n", " ")}
                      height={100}
                      width={100}
                    />
                  </div>
                  <p>
                    {feature.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        <b>{line}</b>
                        {i < feature.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
  }
  
  export default HeroBannerWithInfo;