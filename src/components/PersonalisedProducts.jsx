import Image from "next/image";
import Button from "./Button";
import { products } from "@/constants";

function PersonalisedProducts() {
    return(
        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Personalized Living Starts Here
          </h2>

          <div className="mt-6 max-w-full w-[1274px]">
            <div className="flex gap-5 max-md:flex-col">

              {products.map((product, index) => (
                <article
                  key={index}
                  className="ml-5 w-[19%] max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col items-center w-full text-center max-md:mt-4">
                    <div className="w-full h-auto">
                      <Image
                        src={product.image}
                        className="object-contain self-stretch rounded-md aspect-square"
                        alt={product.title}
                        height={219}
                        width={219}
                      />
                    </div>
                    <p
                      className={`mt-${index === 0 ? "5" : "6"} text-sm ${product.multiline ? "leading-5" : ""} text-neutral-800`}
                    >
                      {product.multiline ? (
                        <>
                          {product.title.split(" - ")[0]} -<br />
                          {product.title.split(" - ")[1]}
                        </>
                      ) : (
                        product.title
                      )}
                    </p>
                    <div
                      className={`flex gap-0.5 px-2.5 py-1.25 mt-${index === 0 || index === 3 ? "5" : "10"} max-w-full leading-none rounded-md bg-zinc-100 w-[125px]`}
                    >
                      <p className="flex items-center text-xs text-stone-500 pr-1">Starting at </p>
                      <p className="text-sm text-black"><b>{product.price}</b></p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Button text="Start Creating" className="mt-8 w-[140px]" />
        </section>
    );
}

export default PersonalisedProducts;