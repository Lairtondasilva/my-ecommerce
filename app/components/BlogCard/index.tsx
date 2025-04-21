// components/BlogCard.tsx

import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
}

export default function BlogCard({
  image,
  title,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:scale-[1.02] duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100%"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-400" />
          {author} • {date}
        </div>
        <h3 className="text-lg font-semibold text-[#1E1E1E] hover:text-[#7B6F63] transition">
          {title}
        </h3>
      </div>
    </div>
  );
}
