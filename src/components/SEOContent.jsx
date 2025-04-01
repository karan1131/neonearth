import React, { useState } from "react";

function SeoContent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col pt-14 pb-1 mt-16 max-w-full border-t border-zinc-300 w-[1290px] max-md:mt-10">
      <h1 className="self-center text-3xl leading-tight text-center text-black max-md:max-w-full">
        Buy Customized Home Decor for Every Corner of Your Living Space
      </h1>

      <div className="flex flex-col items-start pr-9 pl-3 mt-9 w-full text-sm max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-1.5 self-stretch mr-6 max-md:mr-2.5">
          <p className="grow text-neutral-800 max-md:max-w-full">
            Neon Earth, a leading US-based e-commerce company, specializes in
            selling customized and personalized{" "}
          </p>
          <div className="flex gap-px">
            <p className="grow text-pink-600">Wall Arts,</p>
            <p className="text-neutral-800"> wallpapers,</p>
          </div>
          <div className="flex gap-1 text-pink-600">
            <p>Rugs,</p>
            <p>Pillows, </p>
            <p>Tapestries, </p>
            <p>Curtains, </p>
            <p className="basis-auto text-neutral-800">wall prints & frames,</p>
            <p>Pet</p>
          </div>
        </div>

        <div className="flex gap-1.5 mt-2">
          <div className="flex gap-1.5 text-pink-600">
            <p>Zone, </p>
            <p>Bags, </p>
            <p className="text-neutral-800">and many </p>
          </div>
          <div className="flex gap-0.5 self-start whitespace-nowrap">
            <p className="grow text-pink-600">More</p>
            <p className="text-neutral-800">.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 self-stretch mt-3 max-md:mr-2.5">
          <p className="flex-auto text-neutral-800 max-md:max-w-full">
            Shape your design just the way you want. Whether it's an image,
            picture, or text, just upload your choice, scale it as you like, and
            we'll print it for you. Plus, for even more options,{" "}
          </p>
          <div className="flex gap-0.5">
            <p className="grow text-pink-600">explore</p>
            <p className="my-auto text-neutral-800"> our</p>
          </div>
        </div>

        <p className="mt-2 text-neutral-800 max-md:max-w-full">
          range of templates. Everything can be personalized to fit your style –
          choose the size, fabric and color that suits you best.
        </p>

        <h2 className="mt-6 text-2xl leading-tight text-black max-md:max-w-full">
          Customizable Products offered by Neon Earth
        </h2>

        <p className="self-stretch mt-3.5 leading-5 text-neutral-800 max-md:mr-2.5 max-md:max-w-full">
          Explore our wide selection of customizable home decor and lifestyle
          products, catering to your preferred theme – be it kids, vintage,
          abstract, minimalist, traditional, space, nature, food and
          <br />
          drink, trending, or more.
        </p>

        <div className="flex flex-wrap mt-6 text-neutral-800">
          <p className="font-bold">
            Wall Murals:<span className="font-normal"> Choose </span>
          </p>
          <p className="text-pink-600 basis-auto">custom wall murals</p>
          <p className="basis-auto max-md:max-w-full">
            {" "}
            that evoke positive emotions or reflect the ambiance you want to
            create in a particular space.{" "}
          </p>
        </div>

        <div className="flex flex-wrap mt-3 text-neutral-800">
          <p className="font-bold">
            Wallpapers:<span className="font-normal"> Tailor each </span>
          </p>
          <p className="text-pink-600 basis-auto">custom wallpapers</p>
          <p className="basis-auto max-md:max-w-full">
            {" "}
            to complement the specific decor of individual rooms, ensuring a
            cohesive and well-coordinated overall aesthetic.{" "}
          </p>
        </div>

        <div className="flex flex-wrap mt-3 text-neutral-800">
          <p className="font-bold">Tapestries: </p>
          <p className="text-pink-600 basis-auto">Custom tapestries</p>
          <p className="basis-auto max-md:max-w-full">
            {" "}
            elevate your home, serving as personalized wall hangings or beach
            blankets.{" "}
          </p>
        </div>

        <div className="flex flex-wrap mt-3 text-neutral-800">
          <p className="grow font-bold">
            Pillows:
            <span className="font-normal">
              {" "}
              Elevate your comfort and décor with our{" "}
            </span>
          </p>
          <p>throw pillows</p>
          <p className="basis-auto">
            , perfect for adding a cozy touch to any space.{" "}
          </p>
        </div>

        <div className="flex flex-wrap mt-3 text-neutral-800">
          <p className="grow font-bold">
            Cushion Pillows & Covers:
            <span className="font-normal"> Refresh and protect your </span>
          </p>
          <p>cushion pillows</p>
          <p className="basis-auto max-md:max-w-full">
            {" "}
            effortlessly with our stylish covers, ensuring both comfort and
            durability.{" "}
          </p>
        </div>

        <div className="flex flex-wrap gap-px mt-3 text-neutral-800">
          <p className="grow font-bold">
            Curtains:
            <span className="font-normal">
              {" "}
              Design curtains that complement your interior decor.{" "}
            </span>
          </p>
          <p className="text-pink-600 basis-auto">Custom curtains</p>
          <p className="basis-auto max-md:max-w-full">
            {" "}
            allow you to control light, showcase unique patterns, and create a
            cohesive design theme in your space.{" "}
          </p>
        </div>

        <div className="flex flex-wrap self-stretch mt-3 text-neutral-800">
          <p className="font-bold max-md:-mr-0.5">Custom Door Mats: </p>
          <p className="grow shrink text-pink-600 w-[126px]">
            Personalized door mats
          </p>
          <p className="grow shrink w-[930px] max-md:max-w-full">
            {" "}
            welcome guests with a touch of your personality. They can be
            customized with names, quotes, or images, adding a warm and inviting
            touch to your
          </p>
        </div>

        <p className="mt-2 text-neutral-800">entrance. </p>

        {expanded ? (
          <div className="mt-4 text-neutral-800">
            <p>
              Our customizable products extend beyond home decor to include
              lifestyle items like custom apparel, accessories, and gifts. Each
              product is crafted with attention to detail and quality materials
              to ensure longevity and customer satisfaction.
            </p>
            <p className="mt-2">
              We pride ourselves on offering a seamless customization
              experience, allowing you to create unique pieces that reflect your
              personal style and preferences.
            </p>
          </div>
        ) : (
          <button
            onClick={() => setExpanded(true)}
            className="mt-8 text-pink-600 underline"
          >
            Read more
          </button>
        )}
      </div>
    </section>
  );
}

export default SeoContent