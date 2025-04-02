'use client';

import React from "react";
import NotificationBar from "@/components/NotificationBar";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import HeroBannerWithInfo from "@/components/HeroBannerWithInfo";
import PersonalisedProducts from "@/components/PersonalisedProducts";
import ProductCategory from "@/components/ProductCategory";
import DesignCategories from "@/components/DeisgnCategories";
import HeroBanner from "@/components/HeroBanner";
import TopPicks from "@/components/TopPicks";
import VideoSection from "@/components/VideoSection";
import TrendingProducts from "@/components/TrendingProducts";
import Blogs from "@/components/Blogs";
import SeoContent from "@/components/SEOContent";
import Footer from "@/components/Footer";
import { productCategories, tapestryCategory } from "@/constants";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">
      <NotificationBar/>
      <Header />
      <Nav />
      <HeroBannerWithInfo />
      <PersonalisedProducts />
      <DesignCategories />
      <HeroBanner />
      <TopPicks />
      <TrendingProducts />
      <VideoSection />

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

      <Blogs />
      <SeoContent />
      <Footer />
    </main>
  );
}
