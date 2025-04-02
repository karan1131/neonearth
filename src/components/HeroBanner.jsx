import Image from "next/image";

function HeroBanner() {
    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-start self-stretch px-20 py-7 mt-16 w-full min-h-[900px] max-md:px-5 max-md:mt-10">
            <Image
              src="/images/personalized_web_banner.webp"
              className="object-cover absolute inset-0 size-full"
              alt="Room interior"
              height={719}
              width={9999}
            />

            {/* <div className="flex relative flex-col items-start max-w-full w-[1044px]">
              <div className="flex flex-wrap gap-5 justify-between items-start self-end max-w-full w-[720px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2aeadaf6b3bf06bfa9446da43278a4cd130e257?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                  className="object-contain shrink-0 mt-3.5 w-9 aspect-square rounded-[64px] shadow-[0px_0px_16px_rgba(0,0,0,0.5)]"
                  alt="Interactive point"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a398db3eb1d3b875260dfc1a71719e6898e67d15?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                  className="object-contain shrink-0 w-9 aspect-square rounded-[64px] shadow-[0px_0px_16px_rgba(0,0,0,0.5)]"
                  alt="Interactive point"
                />
              </div>

              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bf68d9f6a97895a1a324e8745b0ce7c4b152ca7?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain mt-14 ml-7 w-9 aspect-square rounded-[64px] shadow-[0px_0px_16px_rgba(0,0,0,0.5)] max-md:mt-10 max-md:ml-2.5"
                alt="Interactive point"
              />
            </div> */}
        </div>
    );
}

export default HeroBanner;