import Image from "next/image";

function NotificationBar() {
    return (
        <section className="hidden md:flex flex-col justify-center items-center self-stretch px-16 py-2 w-full text-sm text-black bg-orange-100 max-md:px-5 max-md:max-w-full border-b border-b-[#dbdbdb]">
            <div className="flex gap-3 max-w-full">
            <div className="flex flex-auto gap-1 self-start px-3 py-0.5">
                <div className="w-[25px] h-[25px]">
                <Image
                src="/icons/shippingIcon.svg"
                className="object-contain shrink-0 aspect-[0.92]"
                alt="Shipping icon"
                height={100}
                width={100}
                />
                </div>
                <p className="basis-auto flex items-center">Free Shipping Above $60</p>
            </div>
            <div className="flex flex-auto gap-1 self-start px-3 py-0.5">|</div>
            <div className="flex flex-auto gap-1 self-start px-3 py-0.5">
                <div className="w-[25px] h-[25px]">
                <Image
                    src="/icons/discountIcon.svg"
                    className="object-contain shrink-0 aspect-[1.11]"
                    alt="Discount icon"
                    height={100}
                    width={100}
                />
                </div>
                <p className="flex-auto flex items-center">Up to 20% OFF Sitewide. Use Code: REFRESH</p>
            </div>
            </div>
        </section>
    )
}

export default NotificationBar;