import Image from "next/image";

function CategoryItem({ image, title, hasDropdown = false }) {
    return (
      <div className="flex flex-col self-stretch my-auto text-sm text-center text-black whitespace-nowrap">
        <div className="h-auto w-16 mx-auto">
          <Image
            src={image}
            className="object-contain aspect-square"
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div className="flex gap-1.5 mt-3.5">
          <p className="grow">{title}</p>
          {hasDropdown && (
            <div className="h-auto w-[7px] flex items-center">
            <Image
              src="/icons/chevronDown.svg"
              className="object-contain shrink-0 aspect-[0.54]"
              alt="Dropdown arrow"
              height={100}
              width={100}
            />
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default CategoryItem;