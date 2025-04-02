import Image from "next/image";
import CategoryItem from "./CategoryItem";
import { categories, moreCategories } from "@/constants";

function Nav() {
    return (
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
                        <div className="h-auto w-2 flex items-center">
                          <Image
                            src={"/icons/chevronDown.svg"}
                            className="object-contain shrink-0 aspect-[0.62]"
                            alt="Dropdown arrow"
                            height={100}
                            width={100}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
  
              <CategoryItem
                image="/images/categories/theme.webp"
                title="Theme"
                hasDropdown={true}
              />
            </div>
        </nav>
    );
}
  
export default Nav;