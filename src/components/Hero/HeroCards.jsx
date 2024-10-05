import Image from "next/image";

const HeroCards = ({ shirt, index }) => {
  return (
    <div key={index}>
      <div className="relative w-[350px] h-[400px] overflow-hidden rounded-xl">
        <Image
          className="object-cover w-full h-full"
          src={shirt.image}
          alt={shirt.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="font-medium mt-4 mb-2">{shirt.title}</p>
      <div className="flex items-center gap-3 opacity-80 text-xl">
        <p>$ {shirt.price}</p>
        <p className="line-through">$ {shirt.discountPrice}</p>
      </div>
    </div>
  );
};

export default HeroCards;
