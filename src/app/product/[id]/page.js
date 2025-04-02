import React from "react";
import NotificationBar from "@/components/NotificationBar";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Product() {
    return (
      <main className="flex flex-col items-center bg-white">
        <NotificationBar/>
        <Header />
        <Nav />
        <Footer />
      </main>
    );
}