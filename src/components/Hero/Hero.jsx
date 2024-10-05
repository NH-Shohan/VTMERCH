"use client";

import shirts from "@/data/shirt.js";
import { useEffect, useRef, useState } from "react";
import HeroCards from "./HeroCards";
import NavBar from "./NavBar";

const Hero = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 0.5;
    let requestId;

    const animateScroll = () => {
      if (!isHovered) {
        setScrollPosition((prevScrollPosition) => {
          const newScrollPosition = prevScrollPosition - scrollSpeed;
          const maxScrollPosition = scrollContainer.scrollWidth / 2;

          scrollContainer.style.transform = `translateX(${newScrollPosition}px)`;

          return newScrollPosition <= -maxScrollPosition
            ? 0
            : newScrollPosition;
        });
      }
      requestId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(requestId);
  }, [isHovered]);

  return (
    <section className="bg-primary text-white p-5">
      <div className="container mx-auto py-10">
        <NavBar />

        <p className="opacity-40 text-[10vw] sm:text-[10vw] lg:text-[6vw] leading-[120%] tracking-[1px] font-[family-name:var(--font-act-of-rejection)] mt-20 sm:mt-10 md:mt-20 lg:mt-28 xl:mt-32 text-nowrap">
          future looks bright!
        </p>
      </div>

      {/* Cards section */}
      <div
        className="relative -mt-[5%] mb-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 whitespace-nowrap"
          style={{
            display: "inline-flex",
            transform: `translateX(${scrollPosition}px)`,
          }}
        >
          {shirts.concat(shirts).map((shirt, index) => (
            <HeroCards key={index} shirt={shirt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
