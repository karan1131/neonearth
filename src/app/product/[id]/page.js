'use client';

import React, { useState } from "react";
import NotificationBar from "@/components/NotificationBar";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ProductSlider from "@/components/ProductSlider";
import ImageUploader from "@/components/ImageUploader";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Product() {
  const [uploadImage, setUploadImage] = useState(null);

  const router = usePathname();
  let name = decodeURI(router?.split('/')[2]) ?? 'Product Name';
    return (
      <main className="flex flex-col items-center bg-white">
        <NotificationBar/>
        <Header />
        <Nav />
        <div className="flex">
          <div className="w-[500px] h-[600px] pt-[20px]">
            <ProductSlider uploadImage={uploadImage} setUploadImage={setUploadImage}/>
          </div>
          <div className="block border border-[#dbdbdb] my-5 mx-10 p-10 w-[500px] rounded-md">
              <p className="text-[20px] pb-[8px] font-semibold">{name}</p>
              <p className="text-[24px] pt-[16px] font-semibold">${17.96}</p>
              <ImageUploader setUploadImage={setUploadImage}/>
          </div>
        </div>
        <Footer />
      </main>
    );
}