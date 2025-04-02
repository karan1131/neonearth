import Image from "next/image";
import Button from "./Button";
import { blogPosts } from "@/constants";

function Blogs() {
    return (    
        <section className="flex flex-col items-center">
          <h2 className="mt-16 text-2xl leading-tight text-center text-black max-md:mt-10">
            Our Blogs in the Buzz
          </h2>

          <div className="mt-6 max-w-full w-[1266px]">
            <div className="flex gap-5 max-md:flex-col">
              {blogPosts.map((post, index) => (
                <article key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start pt-16 pb-7 w-full text-xs bg-white rounded-md max-md:mt-6">
                    <div className="h-auto w-full">
                      <Image
                      src={post.image}
                      className="object-contain"
                      alt={post.date}
                      height={156}
                      width={406}
                      />
                    </div>
                    <time className="text-stone-500 mt-2">{post.date}</time>

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
    );
}

export default Blogs;