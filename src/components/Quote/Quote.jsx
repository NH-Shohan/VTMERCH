import Image from "next/image";
import quote from "/public/assets/Icon/quotes.svg";
import avatar from "/public/assets/img/avatar.png";

const Quote = () => {
  return (
    <div className="bg-gradient-to-r from-[#EC3339] to-[#BB1117] text-white">
      <div className="relative container mx-auto px-5 py-20 md:py-48">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-16">
          <Image
            src={quote}
            alt="quote"
            className="h-auto absolute -top-0 md:-top-36 -left-0 md:-left-16"
          />
          <h4 className="font-bold uppercase text-nowrap [font-size:_clamp(0.8em,2.3vw,2.8em)] text-center sm:text-center md:text-left">
            Our mission is to enlighten, entertain <br /> and empower current
            and future <br />
            leaders around the world.
          </h4>
        </div>

        <Image
          src={avatar}
          alt="avatar"
          className="w-[30vw] xl:w-[30vw] absolute bottom-0 right-0 hidden sm:block md:block"
        />
      </div>
    </div>
  );
};

export default Quote;
