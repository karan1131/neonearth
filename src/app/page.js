'use client';

import React from "react";
import Image from "next/image";
import CategoryItem from "@/components/CategoryItem";
import Button from "@/components/Button";
import ProductCategory from "@/components/ProductCategory";
import { categories, moreCategories, features, products, designCategories, trendingProducts, productCategories, tapestryCategory, blogPosts, footerSections, paymentMethods } from "@/constants";
import SeoContent from "@/components/SEOContent";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">

      <section className="hidden md:flex flex-col justify-center items-center self-stretch px-16 py-2 w-full text-sm text-black bg-orange-100 max-md:px-5 max-md:max-w-full border-b border-b-[#dbdbdb]">
        <div className="flex gap-3 max-w-full">
          <div className="flex flex-auto gap-1 self-start px-3 py-0.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed9bf84d77012275585fcf16f44a1004c0f05e0?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              className="object-contain shrink-0 aspect-[0.92] w-[23px]"
              alt="Shipping icon"
            />
            <p className="basis-auto">Free Shipping Above $60</p>
          </div>
          <div className="flex flex-auto gap-1 self-start px-3 py-0.5">|</div>
          <div className="flex flex-auto gap-1 self-start px-3 py-0.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0313d2f41f0b890e8ab5e819dd727723a462fdeb?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              className="object-contain shrink-0 w-5 aspect-[1.11]"
              alt="Discount icon"
            />
            <p className="flex-auto">Up to 20% OFF Sitewide. Use Code: REFRESH</p>
          </div>
        </div>
      </section>

      <header className="flex flex-col justify-center items-center self-stretch px-16 py-4 w-full max-md:px-5 max-md:max-w-full border-b border-b-[#dbdbdb]">
        <div className="flex flex-wrap gap-10 max-w-full w-[1266px]">
          <div className="flex flex-wrap flex-auto gap-10 text-sm text-gray-500">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a233276579df5a0d34a7c6c14aa2b631507c67a?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              className="object-contain shrink-0 my-auto max-w-full aspect-[5.62] w-[180px]"
              alt="Neon Earth logo"
            />
            <div className="flex flex-col grow shrink-0 justify-center p-1.5 rounded-md border-solid basis-0 border-[5px] border-zinc-100 w-fit max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-5 justify-between pl-3 bg-white rounded-none max-md:max-w-full">
                <p className="my-auto">Find What Brings You Joy</p>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3a105e2868162f1ffc6565b38a1a03956f46d?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                  className="object-contain shrink-0 rounded-none aspect-[1.18] w-[53px]"
                  alt="Search button"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 items-start self-start whitespace-nowrap">
            <div className="flex text-xs leading-none text-center text-white">
              <div className="flex flex-col">
                <div className="z-10 self-start p-1 ml-3.5 bg-red-600 rounded-lg max-md:ml-2.5">
                  0
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb0bf11de8657cbe733fbeadd4764b205747b36?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                  className="object-contain aspect-[1.23] w-[27px]"
                  alt="Cart icon"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e816e7409973276a8562e1ae24b837d612f489b?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain shrink-0 w-10 aspect-[1.11]"
                alt="Wishlist icon"
              />
            </div>
            <div className="flex gap-2 mt-3 text-sm text-neutral-800">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b7b0ec69d8cfb27449e41574f34258d2c698ff?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain shrink-0 aspect-[0.92] w-[23px]"
                alt="User icon"
              />
              <p className="my-auto">Join/Login</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="flex flex-col justify-center items-center self-stretch px-16 py-px w-full max-md:px-5 max-md:max-w-full border-b border-b-[#dbdbdb]">
          <div className="flex gap-5 justify-between items-center max-w-full w-[1234px] overflow-auto">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                image={category.image}
                title={category.title}
                hasDropdown={category.hasDropdown}
              />
            ))}

            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2b0e462e9d70b9d606fee6516e9bb4054e22342?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              className="object-contain shrink-0 self-stretch max-w-full aspect-[0.97] w-[124px]"
              alt="Divider"
            />

            <div className="self-stretch my-auto">
              <div className="flex gap-5 justify-between">
                {moreCategories.map((category, index) => (
                  <img
                    key={index}
                    src={category.image}
                    className="object-contain shrink-0 w-16 aspect-square"
                    alt={category.title}
                  />
                ))}
              </div>
              <div className="flex gap-5 justify-between items-start mt-3.5 w-full text-sm text-center text-black max-md:mr-2.5">
                {moreCategories.map((category, index) => (
                  <div key={index} className="flex gap-1">
                    <p className="grow">{category.title}</p>
                    {category.hasDropdown && (
                      <img
                        src={
                          index === 0
                            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/51b76a879d233c098af095fe29dce359f7a947e9?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                            : index === 1
                              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e9d143c772fcffcef4591977a0cf4f6fafdee97f?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                              : "https://cdn.builder.io/api/v1/image/assets/TEMP/20bbb4b6f4fc3c534fcb08c9319e47ee85add95e?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                        }
                        className="object-contain shrink-0 w-2 aspect-[0.62]"
                        alt="Dropdown arrow"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <CategoryItem
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/83e0f50b63bb3994287877a8835e6fa4f12a6290?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              title="Theme"
              hasDropdown={true}
            />
          </div>
        </nav>

        <section className="shadow-sm">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c73a25f34a54899bf701f48d36af4a179948a2c?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
            className="self-stretch w-full aspect-[3.5] max-md:max-w-full"
            alt="Hero banner"
          />

          <div className="flex flex-col justify-center items-center self-stretch px-16 py-4 mt-2 w-full text-sm bg-white bg-opacity-0 shadow-[0px_2px_4px_rgba(0,0,0,0.075)] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center max-w-full w-[1106px]">
              <div className="flex gap-4 self-stretch">
                <img
                  src={features[0].icon}
                  className="object-contain shrink-0 w-16 aspect-[1.1]"
                  alt="Rating icon"
                />
                <div className="my-auto">
                  <div className="flex gap-2.5 leading-loose text-black whitespace-nowrap max-md:mr-1">
                    <p className="grow my-auto"><b>{features[0].title}</b></p>
                    <img
                      src={features[0].rating}
                      className="object-contain shrink-0 max-w-full aspect-[4.57] w-[137px]"
                      alt="Star rating"
                    />
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
                  <img
                    src={feature.icon}
                    className="object-contain shrink-0 aspect-square w-[42px]"
                    alt={feature.title.replace("\n", " ")}
                  />
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
                    <img
                      src={product.image}
                      className="object-contain self-stretch w-full rounded-md aspect-square"
                      alt={product.title}
                    />
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
                    <img
                      src={category.image}
                      className="object-contain aspect-square w-[200px]"
                      alt={category.title}
                    />
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

        <div className="flex overflow-hidden relative flex-col justify-center items-start self-stretch px-20 py-7 mt-16 w-full min-h-[900px] max-md:px-5 max-md:mt-10">
            <img
              src="/images/personalized_web_banner.webp"
              className="object-cover absolute inset-0 size-full"
              alt="Room interior"
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

        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Top Personalization Picks
          </h2>

          <div className="flex flex-wrap gap-6 mt-6 max-w-full text-sm text-center text-neutral-800 w-[1266px]">
            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0423819d85f91a1b4bf31c0c59a6017b2c986a?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-square w-[124px]"
                alt="Area Rugs"
              />
              <p className="self-center mt-6">Area Rugs</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c609de5990bb06c314c2b8d96d18fef1260b4fa3?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-[1.01] w-[124px] max-md:mr-1"
                alt="Photo And Art Prints"
              />
              <p className="self-center mt-6">Photo And Art Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-3.5 bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1552ce3175287f1dd589917ec9cc16a55d605c3?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-[1.01] w-[124px]"
                alt="Poster Prints"
              />
              <p className="self-center mt-6">Poster Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a68a557ad05fa215689b5a6c750922c10352cce?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-[1.01] w-[124px]"
                alt="Acrylic Prints"
              />
              <p className="self-center mt-6">Acrylic Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-3.5 bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b849dd4228bf8e964ecfecb156e3b9343b2360b3?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-square w-[124px]"
                alt="Canvas Prints"
              />
              <p className="self-center mt-6">Canvas Prints</p>
            </article>

            <article className="flex flex-col flex-1 px-8 pt-px pb-2.5 whitespace-nowrap bg-white rounded-md max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa57b9d02b01e2219d6e79166809800d5b12afd5?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain aspect-square w-[124px]"
                alt="Tapestries"
              />
              <p className="self-center mt-6">Tapestries</p>
            </article>
          </div>
        </section>

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
                <img
                  src={product.image}
                  className="object-contain w-full rounded-md aspect-square"
                  alt={product.title}
                />
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
                <img
                  src={product.image}
                  className="object-contain w-full rounded-md aspect-square"
                  alt={product.title}
                />
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

        {productCategories.map((category, index) => (
          <ProductCategory
            key={index}
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
            products={category.products}
          />
        ))}

        <ProductCategory
          image={tapestryCategory.image}
          title={tapestryCategory.title}
          subtitle={tapestryCategory.subtitle}
          products={tapestryCategory.products}
        />

        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Our Blogs in the Buzz
          </h2>

          <div className="mt-6 max-w-full w-[1266px]">
            <div className="flex gap-5 max-md:flex-col">
              {blogPosts.map((post, index) => (
                <article key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start pt-16 pb-7 w-full text-xs bg-white rounded-md max-md:mt-6">
                    <time className="text-stone-500">{post.date}</time>

                    <h3 className="mt-4 text-lg leading-6 text-neutral-800">
                      {post.title.includes(":") ? (
                        <>
                          {post.title.split(":")[0]}:<br />
                          {post.title.split(":")[1]}
                        </>
                      ) : (
                        <>
                          {post.title.split("with")[0]}with
                          <br />
                          {post.title.split("with")[1]}
                        </>
                      )}
                    </h3>

                    <p className="self-stretch mt-5 leading-5 text-neutral-800">
                      {post.excerpt.includes("blooming") ? (
                        <>
                          {post.excerpt.split("blooming")[0]}blooming
                          <br />
                          {post.excerpt.split("blooming")[1]}
                        </>
                      ) : (
                        <>
                          {post.excerpt.split("by")[0]}by
                          <br />
                          {post.excerpt.split("by")[1]}
                        </>
                      )}
                    </p>

                    <a
                      href="#"
                      className="mt-4 text-center text-pink-600 underline"
                    >
                      Tell Me More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Button text="Read All" className="mt-4 w-[102px]" />
        </section>

        <SeoContent />

        <footer>
          <div className="flex flex-col justify-center items-center self-stretch px-16 py-16 mt-16 w-full text-white bg-black border-t border-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between items-start max-w-full w-full">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col self-stretch">
                  <h3
                    className={`self-start text-lg leading-tight ${index === 0 ? "text-white" : "text-stone-500"}`}
                  >
                    {section.title}
                  </h3>

                  {section.isMain && (
                    <p className="mt-6 text-sm leading-7">{section.content}</p>
                  )}

                  {section.links &&
                    section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className={`${linkIndex === 0 ? "mt-6" : "mt-4"} ${index === 3 && linkIndex === 0 ? "" : "self-start"} text-sm`}
                      >
                        {link}
                      </a>
                    ))}

                  {section.contact && (
                    <>
                      <a
                        href={`mailto:${section.contact.email}`}
                        className="mt-6 max-md:mr-0.5 text-sm"
                      >
                        {section.contact.email}
                      </a>
                      <img
                        src={section.contact.socialImage}
                        className="object-contain mt-3 w-40 aspect-[4.72]"
                        alt="Social media icons"
                      />
                      <a
                        href={`tel:${section.contact.phone.replace(/[^0-9]/g, "")}`}
                        className="self-start mt-3.5 text-sm"
                      >
                        {section.contact.phone}
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col self-stretch px-3.5 pb-12 w-full bg-black border-t border-stone-500 max-md:max-w-full">
            {/* <div className="flex z-10 flex-wrap gap-5 justify-between mt-0 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebb357cda5f5c7b9a61e39e4ddc820baec7d6c4?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                className="object-contain shrink-0 w-20 aspect-square"
                alt="Neon Earth logo"
              />
              <button
                aria-label="Back to top"
                className="flex shrink-0 self-end mt-9 rounded-2xl border border-solid bg-zinc-800 border-zinc-100 h-[30px] w-[30px]"
              />
            </div> */}

            <div className="flex flex-wrap gap-5 justify-between self-center mt-1 max-w-full w-[1258px]">
              <p className="self-start text-xs text-stone-500">
                Copyright ©2025 neonearth. All Rights Reserved.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-auto gap-2 px-2.5">
                  <div className="flex text-xs text-stone-500">
                    <p className="grow my-auto max-md:-mr-0.5">Payment Methods</p>
                    <img
                      src={paymentMethods[0].image}
                      className="object-contain shrink-0 aspect-[1.36] w-[45px]"
                      alt="Payment method"
                    />
                  </div>

                  <div className="flex flex-auto gap-2">
                    {paymentMethods.slice(1).map((method, index) => (
                      <img
                        key={index}
                        src={method.image}
                        className="object-contain shrink-0 aspect-[1.36] w-[45px]"
                        alt="Payment method"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex self-start text-xs text-stone-500">
                  <p className="grow self-end mt-3 max-md:-mr-0.5">Secured by</p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfa047c8e7e3ac4fd008c0ef643ee80eeed540?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
                    className="object-contain shrink-0 aspect-[2.83] w-[68px]"
                    alt="Security certification"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>

    </main>
  );
}
