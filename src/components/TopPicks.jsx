import Image from "next/image";

function TopPicks() {
    return (
        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Top Personalization Picks
          </h2>

          <div className="flex flex-wrap gap-6 mt-6 max-w-full text-sm text-center text-neutral-800 w-[1266px]">
            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">
                <Image
                  src="/images/topPicks/rugs.webp"
                  className="object-contain aspect-square"
                  alt="Area Rugs"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Area Rugs</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">
                <Image
                  src="/images/topPicks/prints.webp"
                  className="object-contain aspect-[1.01] max-md:mr-1"
                  alt="Photo And Art Prints"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Photo And Art Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-3.5 bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">
                <Image
                  src="/images/topPicks/poster.webp"
                  className="object-contain aspect-[1.01]"
                  alt="Poster Prints"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Poster Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">              
                <Image
                  src="/images/topPicks/acrylic.webp"
                  className="object-contain aspect-[1.01]"
                  alt="Acrylic Prints"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Acrylic Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-3.5 bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">
                <Image
                  src="/images/topPicks/canvas.webp"
                  className="object-contain aspect-square"
                  alt="Canvas Prints"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Canvas Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 whitespace-nowrap bg-white rounded-md max-md:px-5">
              <div className="h-auto w-[124px]">
                <Image
                  src="/images/topPicks/tapestries.webp"
                  className="object-contain aspect-square"
                  alt="Tapestries"
                  height={124}
                  width={124}
                />
              </div>
              <p className="self-center mt-6">Tapestries</p>
            </article>
          </div>
        </section>
    );
}

export default TopPicks;