import Image from "next/image";
import Button from "./Button";
import { trendingProducts } from "@/constants";

function TrendingProducts() {
    return (
        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Trending Custom Home Decor
          </h2>

          <div className="flex flex-wrap gap-4 items-start mt-6 max-w-full text-sm text-center text-neutral-800 w-[1290px]">
            {trendingProducts.slice(0, 5).map((product, index) => (
              <article
                key={index}
                className={`flex flex-col flex-1 ${index === 0 || index === 1 ? "self-stretch leading-5" : ""}`}
              >
                <div className="h-auto w-full">
                  <Image
                    src={product.image}
                    className="object-contain rounded-md aspect-square"
                    alt={product.title}
                    height={245}
                    width={245}
                  />
                </div>
                <p
                  className={`${index === 0 || index === 1 ? "mt-5 w-[244px] max-md:mr-1.5" : "self-center mt-5"}`}
                >
                  <b>{product.multiline ? (
                    <>
                      {product.title.split(" - ")[0]} - {index === 0 || index === 1 ? <br /> : ""}
                      {product.title.split(" - ")[1]}
                    </>
                  ) : (
                    product.title
                  )}</b>
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-between mt-5 max-w-full text-sm leading-none text-center text-black whitespace-nowrap w-[1102px]">
            {trendingProducts.slice(0, 5).map((product, index) => (
              <p key={index} className="px-2 py-2.5 rounded-md bg-zinc-100">
                <b>{product.price}</b>
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6 max-w-full text-sm text-center text-neutral-800 w-[1290px]">
            {trendingProducts.slice(5).map((product, index) => (
              <article key={index} className="flex flex-col flex-1">
                <div className="h-auto w-full">
                  <Image
                    src={product.image}
                    className="object-contain w-full rounded-md aspect-square"
                    alt={product.title}
                    height={245}
                    width={245}
                  />
                </div>
                <p className="self-center mt-5"><b>{product.title}</b></p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-between mt-10 max-w-full text-sm leading-none text-center text-black whitespace-nowrap w-[1098px]">
            {trendingProducts.slice(5).map((product, index) => (
              <p key={index} className="px-2 py-2.5 rounded-md bg-zinc-100">
                <b>{product.price}</b>
              </p>
            ))}
          </div>

          <Button text="Create a New Trend" className="mt-10 w-[180px]" />
        </section> 
    );
}

export default TrendingProducts;