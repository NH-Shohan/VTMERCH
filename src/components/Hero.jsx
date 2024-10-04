import logo from "@/assets/logo/logo_white.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-primary text-white h-[75vh]">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={115} height={115} />
            <h3 className="font-extrabold text-[112px] tracking-[12px]">
              VTMERCH
            </h3>
          </div>
          <button class="group">
            <div class="grid justify-items-center gap-1.5">
              <span class="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
              <span class="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition"></span>
              <span class="h-1 w-8 rounded-full bg-white transition group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
            </div>
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
