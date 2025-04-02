function VideoSection() {
    return (
        <section className="mt-16 max-w-full w-[1278px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[50%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1fee1af3fd84f68de51e722c4cccc554715b582?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain w-full aspect-[2.12] max-md:mt-3 max-md:max-w-full"
                alt="Promotional image"
              />
            </div>

            <div className="ml-5 w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-center py-16 pr-5 pl-16 w-full text-3xl text-center min-h-[349px] max-md:px-5 max-md:mt-3 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/221088f79539fa1b3fb869e8635549234278460b?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                  className="object-cover absolute inset-0 size-full"
                  alt="Background pattern"
                />

                <h2 className="relative self-start text-[32px] leading-tight text-black max-md:max-w-full ml-15">
                  Create a Picture-Perfect Home
                </h2>

                <h3 className="relative mt-4 ml-12 text-[32px] leading-tight text-black">
                  With Exclusive Savings
                </h3>

                <p className="relative self-end mt-7 mr-7 text-[48px] font-bold leading-tight text-black max-md:mr-2.5 max-md:text-4xl">
                  15% OFF Sitewide
                </p>

                <p className="relative mt-4 ml-6 text-sm text-neutral-800">
                  + $15 Worth Wallet Points For Next Purchase
                </p>

                <div className="flex relative mt-5 ml-6 max-w-full text-sm w-[250px]">
                  <div className="px-2 py-2 rounded-l-md border-t border-b border-l border-pink-600 text-neutral-800 max-md:mr-0">
                    Code: <span className="text-pink-600">NEON15</span>
                  </div>

                  <a
                    href="#"
                    className="px-2 py-2 text-white bg-pink-600 rounded-md border border-pink-600 border-solid max-md:px-5"
                  >
                    Claim Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default VideoSection;