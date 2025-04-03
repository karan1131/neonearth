import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center self-stretch px-16 py-4 w-full max-md:px-5 max-md:max-w-full border-b border-b-[#dbdbdb]">
          <div className="flex flex-wrap gap-10 max-w-full w-[1266px]">
            <div className="flex flex-wrap flex-auto gap-10 text-sm text-gray-500 items-center">
              <Link href={'/'}>
                <div className="flex h-auto w-[180px]">
                <Image
                  src="/images/retailer_site_logo.webp"
                  className="object-contain shrink-0 my-auto max-w-full aspect-[5.62]"
                  alt="Neon Earth logo"
                  height={100}
                  width={100}
                  layout="responsive"
                  sizes=""
                  priority={true}
                />
                </div>
              </Link>
              <div className="flex flex-col grow shrink-0 justify-center rounded-md border-solid basis-0 border-[5px] border-zinc-100 w-fit max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-5 justify-between pl-3 bg-white rounded-none max-md:max-w-full">
                  <input className="my-auto" placeholder="Find What Brings You Joy" />
                  <div className="h-auto w-[53px]">
                    <Image
                      src="/icons/searchButton.svg"
                      className="object-contain shrink-0 rounded-none aspect-[1.18]"
                      alt="Search button"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 items-start self-start whitespace-nowrap">
              <div className="flex text-xs leading-none text-center text-white">
                <div className="flex flex-col">
                  <div className="z-10 self-start p-1 ml-3.5 bg-red-600 rounded-lg max-md:ml-2.5">
                    0
                  </div>
                  <div className="h-auto w-[25px]">
                    <Image
                      src="/icons/wishlistIcon.svg"
                      className="object-contain aspect-[1.23]"
                      alt="Cart icon"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="z-10 self-start p-1 ml-3.5 bg-red-600 rounded-lg max-md:ml-2.5">
                      0
                  </div>
                  <div className="h-auto w-[25px]">
                    <Image
                      src="/icons/cartIcon.svg"
                      className="object-contain shrink-0 aspect-[1.11]"
                      alt="Wishlist icon"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4.5 text-sm text-neutral-800">
                <div className="h-auto w-[23px]">
                  <Image
                    src="/icons/userIcon.svg"
                    className="object-contain shrink-0 aspect-[0.92]"
                    alt="User icon"
                    height={100}
                    width={100}
                  />
                </div>
                <p className="my-auto">Join/Login</p>
              </div>
            </div>
          </div>
        </header>
    );
  }
  
  export default Header;