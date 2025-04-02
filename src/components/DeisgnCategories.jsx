import Image from "next/image";
import Button from "./Button";
import { designCategories } from "@/constants";

function DesignCategories() {
    return (
        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10 max-md:max-w-full">
            We Curate, You Create - Explore 60K+ Designs
          </h2>

          {designCategories.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-wrap gap-4 ${rowIndex === 0 ? "mt-6" : "mt-11 max-md:mt-10"} max-w-full w-[1266px]`}
            >
              {row.map((category, index) => (
                <article key={index} className="flex flex-col flex-1">
                  <a
                    href="#"
                    className="flex overflow-hidden flex-col justify-center px-5 py-4 rounded-md border border-solid border-zinc-300"
                  >
                    <div className="">
                      <Image
                        src={category.image}
                        className="object-contain aspect-square"
                        alt={category.title}
                        height={234}
                        width={240}
                      />
                    </div>
                  </a>
                  <p
                    className={`self-center mt-${category.title === "Nature" ? "6" : "5"} text-sm text-center text-neutral-800`}
                  >
                    {category.title}
                  </p>
                </article>
              ))}
            </div>
          ))}

          <Button text="Explore More Designs" className="mt-11 w-48 max-md:mt-10" />
        </section>
    );
}

export default DesignCategories;