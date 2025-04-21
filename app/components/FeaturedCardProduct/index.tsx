import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function FeaturedCardProduct({
  image,
  title,
  price,
  priceOld,
}: {
  image: string;
  title: string;
  price: string;
  priceOld: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl shadow-sm p-4 w-full max-w-xs transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group cursor-pointer">
      <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt="Product Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
          fill
          className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-semibold text-[#1E1E1E] truncate text-center mb-2">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <span className="text-base line-through text-[#7B6F63]">
          {priceOld}
        </span>
        <span className="text-xl font-bold text-[#1E1E1E]">{price}</span>
        <CirclePlus className="w-6 h-6 text-[#1E1E1E] cursor-pointer transition-transform duration-300 group-hover:rotate-90" />
      </div>
    </div>
  );
}
