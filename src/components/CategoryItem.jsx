function CategoryItem({ image, title, hasDropdown = false }) {
    return (
      <div className="flex flex-col self-stretch my-auto text-sm text-center text-black whitespace-nowrap">
        <img
          src={image}
          className="object-contain w-16 aspect-square ml-auto mr-auto"
          alt={title}
        />
        <div className="flex gap-1.5 mt-3.5">
          <p className="grow">{title}</p>
          {hasDropdown && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09bb758fc354f55c01456cea2b2910394848bbc?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0"
              className="object-contain shrink-0 aspect-[0.54] w-[7px]"
              alt="Dropdown arrow"
            />
          )}
        </div>
      </div>
    );
  }
  
  export default CategoryItem;