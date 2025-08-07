export async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    title: "Featured Items",
    items: [
      {
        title: "iPhone 15 Pro",
        description: "Experience the next-level performance with A17 Pro chip and titanium design.",
        link: "/products/iphone-15-pro"
      },
      {
        title: "Samsung Galaxy Z Fold 5",
        description: "Foldable design meets flagship performance for multitasking like never before.",
        link: "/products/galaxy-z-fold-5"
      },
      {
        title: "MacBook Air M3",
        description: "Ultra-light, ultra-powerful — now with Apple’s M3 chip.",
        link: "/products/macbook-air-m3"
      },
      {
        title: "Sony WH-1000XM5",
        description: "Industry-leading noise cancellation headphones with adaptive sound control.",
        link: "/products/sony-wh-1000xm5"
      },
      {
        title: "Apple Watch Series 9",
        description: "Track your health, fitness, and stay connected — now with gesture control.",
        link: "/products/apple-watch-series-9"
      },
      {
        title: "Dell XPS 13 Plus",
        description: "Sleek edge-to-edge design with the latest Intel Core Ultra processors.",
        link: "/products/dell-xps-13-plus"
      }
    ]

  };
}
