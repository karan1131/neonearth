import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header Section */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">NeoEarth</div>
          <nav className="space-x-6 text-lg">
            <a href="#features" className="hover:text-blue-500">Features</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <a href="#signup" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Sign Up</a>
          </nav>
        </div>
      </header> */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 mb-4 sm:mb-0">
            NeoEarth
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6 text-lg flex flex-wrap justify-center sm:justify-end w-full sm:w-auto">
            <a href="#features" className="hover:text-blue-500 mb-2 sm:mb-0">Features</a>
            <a href="#about" className="hover:text-blue-500 mb-2 sm:mb-0">About</a>
            <a href="#contact" className="hover:text-blue-500 mb-2 sm:mb-0">Contact</a>
            <a href="#signup" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 mb-2 sm:mb-0">
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white h-96 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Welcome to NeoEarth</h1>
          <p className="text-lg md:text-2xl mb-6">Your gateway to a sustainable future.</p>
          <a href="#signup" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Sustainability</h3>
              <p className="text-gray-600">We offer green solutions that help you save the planet while saving money.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Innovation</h3>
              <p className="text-gray-600">State-of-the-art technology for maximum efficiency and performance.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Support</h3>
              <p className="text-gray-600">24/7 customer support to assist you with any queries or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NeoEarth is dedicated to providing eco-friendly solutions that enhance both your quality of life and the planet's health.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="space-x-6">
            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
            <a href="https://instagram.com" className="hover:text-blue-400">Instagram</a>
          </div>
          <p className="mt-4 text-sm">&copy; 2025 NeoEarth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
