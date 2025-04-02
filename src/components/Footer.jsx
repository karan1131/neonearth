import Image from "next/image";
import { footerSections, paymentMethods } from "@/constants";

function Footer() {
    return (
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
    );
}

export default Footer;