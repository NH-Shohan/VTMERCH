import Image from "next/image";

const ProductsCards = ({ product, index }) => {
  return (
    <div key={index} className="bg-white p-4 rounded-xl">
      <div
        className={`relative w-full overflow-hidden rounded-lg group/image ${
          product.price ? "h-[350px]" : "h-[450px]"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/40 z-40 opacity-0 transition-all duration-200 group-hover/image:opacity-100">
          <div className="z-50 flex items-center justify-center h-full text-white text-center">
            <p className="border-2 border-white w-32 bg-neutral-950/70 scale-0 group-hover/image:scale-100 transition-all duration-200 delay-100 aspect-square flex items-center justify-center rounded-full cursor-pointer">
              View <br /> Product
            </p>
          </div>
        </div>
        <Image
          className={`object-cover w-auto h-auto group-hover/image:scale-110 transition-all duration-200`}
          src={product.image}
          alt={product.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {product.price && (
        <>
          <p className="font-semibold mt-4 mb-2">{product.title}</p>
          <div className="flex items-center gap-3 opacity-80 text-xl font-medium">
            <p>$ {product.price}</p>
            <p className="line-through text-gray">$ {product.discountPrice}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsCards;
