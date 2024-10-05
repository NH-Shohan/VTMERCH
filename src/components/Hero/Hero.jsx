"use client";

import products from "@/data/product.js";
import { useEffect, useRef, useState } from "react";
import HeroCards from "./HeroCards";
import NavBar from "./NavBar";

const Hero = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(12);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;
    let requestId;

    const animateScroll = () => {
      if (!isHovered) {
        setScrollPosition((prevScrollPosition) => {
          const containerWidth = scrollContainer.scrollWidth;
          const newScrollPosition = prevScrollPosition - scrollSpeed;

          if (Math.abs(newScrollPosition) >= containerWidth / 2) {
            scrollContainer.style.transform = `translateX(0px)`;
            return 12;
          } else {
            scrollContainer.style.transform = `translateX(${newScrollPosition}px)`;
            return newScrollPosition;
          }
        });
      }
      requestId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(requestId);
  }, [isHovered]);

  return (
    <section className="bg-primary text-white sm:p-5 lg:p-0">
      <div className="container mx-auto pb-10 pt-16">
        <NavBar />

        <p className="opacity-40 text-[8vw] sm:text-[10vw] lg:text-[6vw] leading-[120%] tracking-[1px] font-[family-name:var(--font-act-of-rejection)] mt-20 sm:mt-10 md:mt-20 lg:mt-28 xl:mt-32 text-nowrap">
          future looks bright!
        </p>
      </div>

      {/* Cards section */}
      <div
        className="relative -mt-[5%] pb-16 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6"
          style={{
            display: "inline-flex",
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          {products
            .filter((product) => product.category === "shirt")
            .concat(products.filter((product) => product.category === "shirt"))
            .map((product, index) => (
              <HeroCards key={index} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
