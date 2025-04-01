const categories = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/161c5aca9a89c1bc63ae122345f225d0069b3aef?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "All",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/acf3b601e9c656ffaed15250abdf3bdbe525820f?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Wall Arts",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e2d15a2937a8986499a35f2883f87f92b450623?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Tapestries",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ffd15fe14ef16ad398c9e858d36ff9f0bc403db2?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Pillows",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/93e7ea252ae601a7ce7f85e1cf44750a3b3075b2?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Curtains",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ff1fac28ff65254ea3743825035cf4301556bfc?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Fabric",
    },
];

const moreCategories = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5232ea0e492dbb305ad9f231711d91b5761e4512?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Pet Zone",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f01818ce6e6c875ba3360a8d0979273e4628a6ed?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Clothing",
      hasDropdown: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20d7fa3f74f9a1768d83261471a0eb6e637cb9a1?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "More",
      hasDropdown: true,
    },
];

const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/26a3f4cc820ff1d1fe77d8b69149ed005ac39c57?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "4.5",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/213becfbed8427cb6d6333d7b0e096e12a5ebe03?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      subtitle: "Overall Satisfaction Rating",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e370aaaf186d1934dcccf1681135db1dbda9db1?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Tailored Creations",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4084c9d76d73c45a3a4a78143ef33cece9bee5db?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Best-in-Class\nPrinting",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cffd012cf336e8fe18338095f36318e322d5a18?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Diverse Design\nLibrary",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16b124934596546ddea0ecf522213ad3c6d03555?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Prompt\nDelivery",
    },
];

const products = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14d822686b845fd30a4231accff550c26393dd70?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Wall Tapestry - Velvet Satin",
      price: "$17.96",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e67b9fb940118332a215433a0b01b226355d640?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Photo Print - Framing",
      price: "$11.59",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9793cc0316c99a2d6d79f613d0ff4a9a0f22503?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Hanging Canvas - Natural",
      price: "$36.00",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e91e2e6554ea89c39028ec66d40d000136eab201?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Square Throw Pillow - Velvet Satin",
      price: "$16.95",
      multiline: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/278a57e781be55590bc8cd3f0951ecf9c1b90e61?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Monogram Arm Tote Bag",
      price: "$27.50",
    },
];

const designCategories = [
    [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d24a9d038fc41e303e9a895434274a9efa4a7768?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Neon Designs",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/e1a77e2353aa681484b2de30cfa7b1f2fea32bc1?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Vintage",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/57563ab59b11b99f6019d36e782b5b8ba812f298?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Abstract",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/7366db61faf7cec581163d9fdad14b9b9628ceb9?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Space and Astronomy",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/e9c28fc324ea97d4f90c57cbe2cf7e0b6bd28e47?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Nature",
      },
    ],
    [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ba872bec0651ff66552f8f128976f363b90dc19e?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Kids",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/a9dde498e77d57b57a0c0efe6ff0a5e55962c7f1?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Geometric",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/5b9db3ad9489996066f294d279bf557b0b774c30?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Minimalist",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/43becc73c0951349353d455450d27eb6a6a93ac8?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Botanical",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6a158d6e2120c5cce4405884cc4833a152e6c04?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Food and Drink",
      },
    ],
];

const trendingProducts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83eba5b2cbb37b5068cdfecd128ea167db646c63?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Panoramic Tapestry - Velvet Satin",
      price: "$15.97",
      multiline: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7f1e50b2bf1d7492c90baabcb3a5bfa8b8a3a020?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Sheer Curtain - Linen Weave",
      price: "$45.36",
      multiline: true,
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57022ac36ef0872fb3fbe4bf754925df06d7ea15?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Women's Hoodie - White",
      price: "$42.95",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9471c1329ac475f455bd372049d1ddc50ef44ad3?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Classic Tote Bag",
      price: "$32.95",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac229dceebe607776cd44732c5056d53545328ca?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Coffee Mugs",
      price: "$34.50",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/158b6fda6afbe1015fe76c88bfaef5383fa134fa?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Waist Apron",
      price: "$22.50",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9e05848b29f1eacd22452f71a6f1c07b825fd393?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Rug - Luxe Grain - Rectangle",
      price: "$92.63",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/811988b0be30bcf1e8be55f91da036ea72cb1aab?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Wallpaper - Stone Grain",
      price: "$65.32",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/582c6c618ffb9d53a29fe1c7cf135f5f8200c889?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Custom Women's Full Sarong",
      price: "$78.65",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/18966679d64c7041ee3dfea7d1c5b1c863e6b366?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Doormat - Rectangle",
      price: "$9.75",
    },
];

const productCategories = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebb26128997c101b0d3d8af3e30260c88953301d?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Curtain Creations",
      subtitle: "Personalized Drapes to Set the Ambience",
      products: [
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/40211b1fdaf555980c2b3f602393c8c9c7718260?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Custom Drapes",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3a01d30cd4cee33826bd353204ef81e218660286?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Blackout Curtains",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/96fa4c2e2692f8a386c8961c132f1a0a7a27faf0?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Shower Curtains",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e53a4eca0482b78242bcebdf50249518cced8248?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Sheer Curtains",
        },
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fbee04527ebeee9d8e2fce18346a3e1d651332f7?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Walls of Wonder",
      subtitle: "Discover Your Wall's Perfect Vibe",
      products: [
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0993cd1ed2037c0641d5498cd0004dba00824a2d?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Custom Wallpapers",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5d0fca37395ee2664e9f4ac638c46478c1089af7?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Custom Wall Murals",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/c3f9e54564484ab182172d16135b015a3d1ff8e3?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Photo And Art Prints",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/b4d3e539c3bd23d2f2f96f9e7ad78424f702a86d?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Canvas Prints",
        },
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/416c138b020fdc7cb7ff07934bd23c7475589b6b?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
      title: "Pillow Palette",
      subtitle: "Create Your Corner of Plushy Comfort",
      products: [
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e569a5ea214e0571a9a57ffedd28e862f5c006f0?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Throw Pillows",
        },
        {
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/99e76074171bf1f5b8626cf184dc8fcce5d98336?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
          title: "Cushions",
        },
        { isEmpty: true, title: "Bow Pillows" },
        { isEmpty: true, title: "Bed Pillows" },
      ],
    },
];

  const tapestryCategory = {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d665c15aa22b804e5e30359ade9d42347a439496?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    title: "Timeless Tapestries",
    subtitle: "Personalized Tapestries to Reflect Your Essence",
    products: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/9bb0454755f8cd293dbe59cd1266d855f5f4116c?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Custom Wall Tapestries",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/dab1a9bf298c45a154dc0ab3d18acd79b9c0d820?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        title: "Custom Panoramic Tapestries",
        multiline: true,
      },
      { isEmpty: true, title: "Custom Triangular Tapestries", multiline: true },
      { isEmpty: true, title: "Custom Hanging Tapestries", multiline: true },
    ],
};

const blogPosts = [
    {
      date: "Mar 21st 2025",
      title:
        "How Spring Fragrances Complement Your Home Decor: The Ultimate Guide (2025)",
      excerpt:
        "Spring has finally arrived! The days are becoming warmer, flowers are blooming, and you can feel the crisp energy in the air. All these signs ar…",
    },
    {
      date: "Mar 20th 2025",
      title:
        "9 Tips to Bring Spring Vibes into Your Space with Rugs and Floor Decor",
      excerpt:
        "Spring home décor trends aren't just about fresh air and blooming flowers. It's also the perfect excuse to refresh your home's vibe. And…",
    },
    {
      date: "Mar 20th 2025",
      title:
        "Top Ways to Refresh Your Home with Lightweight Fabrics This Spring",
      excerpt:
        "Spring is the perfect time to give your home a fresh, airy feel by swapping out heavy winter textiles for soft textiles for spring refresh.…",
    },
];

const footerSections = [
    {
      title: "Designs Come True!",
      content: `At the heart of Neon Earth lies the belief that
                your home is more than just a physical space;
                it's a canvas for self-expression. Neon Earth
                acts as an enabler, providing comfort, and
                the freedom to 'Create Your New'. Visualize It
                - Design it - Bring It to life: because the final
                product belongs to you.`,
      isMain: true,
    },
    {
      title: "Quick Link",
      links: ["Order a Swatch Kit", "Bulk Quote", "Track Your Order"],
    },
    {
      title: "Help",
      links: [
        "FAQ",
        "Refund",
        "Shipping",
        "Sitemap",
        "Privacy Policy",
        "Contact Us",
      ],
    },
    {
      title: "Your Account",
      links: ["Your Orders", "Your Wallet", "Saved Designs"],
    },
    {
      title: "The Company",
      links: ["About us", "User Agreement", "Blog"],
    },
    {
      title: "Get in touch",
      contact: {
        email: "wecare@neonearth.com",
        socialImage:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3532249dd1649a66c9f8da8197aaf05a7994e56e?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
        phone: "(855) 349-6366",
      },
    },
];

  const paymentMethods = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ed2eb20e1ee9be99360631a9b1699743cdb252f?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a5f69d83c50dea1d222c15e6996f509348ffdd6?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f06de7a991d80b18bb0dde4517213c31848ee5eb?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23d45b72696ea0167affb525918b0640ee12541e?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57df44350af659cb93d91c1a62bbd4a7385ab31f?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0186d7269a486b0f5ace1930e9743720c44bb1d5?placeholderIfAbsent=true&apiKey=9cca53c711104d8a883accd5abcb4ae0",
    },
];

export {categories, moreCategories, features, products, designCategories, trendingProducts, productCategories, tapestryCategory, blogPosts, footerSections, paymentMethods};