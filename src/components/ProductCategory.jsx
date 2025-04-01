import Button from "./Button";

function ProductCategory({ image, title, subtitle, products }) {
    return (
      <section className="py-12 mt-16 ml-14 max-w-full rounded-lg border border-solid border-zinc-300 w-[1187px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[36%] max-md:ml-0 max-md:w-full">
            <img
              src={image}
              className="object-contain mt-3 w-full aspect-[1.33] max-md:mt-10"
              alt={title}
            />
          </div>
  
          <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-2xl leading-tight text-black">
                {title}
              </h2>
  
              <p className="self-start mt-5 text-sm text-neutral-800">
                {subtitle}
              </p>
  
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {products.map((product, index) => (
                    <article
                      key={index}
                      className="w-3/12 max-md:ml-0 max-md:w-full"
                    >
                      <div
                        className={`flex flex-col grow pb-${product.multiline ? "2.5" : "3.5"} w-full ${product.multiline ? "text-sm leading-5" : "text-sm"} text-center bg-white rounded-md ${product.multiline ? "" : "text-neutral-800"} max-md:mt-6`}
                      >
                        {product.isEmpty ? (
                          <div className="flex shrink-0 bg-stone-50 h-[135px]" />
                        ) : (
                          <a
                            href="#"
                            className="flex overflow-hidden flex-col justify-center px-5 py-1.5 bg-stone-50"
                          >
                            <img
                              src={product.image}
                              className="object-contain aspect-square w-[124px]"
                              alt={product.title}
                            />
                          </a>
                        )}
  
                        <p
                          className={`${product.multiline ? "mt-5" : "self-center mt-5"} text-neutral-800`}
                        >
                          {product.multiline ? (
                            <>
                              {product.title.split(" ")[0]}{" "}
                              {product.title.split(" ")[1]}
                              <br />
                              {product.title.split(" ").slice(2).join(" ")}
                            </>
                          ) : (
                            product.title
                          )}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
  
              <Button
                text="Show Me More"
                className="self-center mt-4 w-[148px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductCategory;