import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  className?: string;
}

export default function CategoryCard({
  title,
  imageUrl,
  className = "",
}: CategoryCardProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden  group transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Wrapper da imagem para aplicar efeito de zoom */}
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay escurecendo mais no hover */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 z-10 transition-colors duration-300" />

      {/* Título com leve animação de subida */}
      <div className="absolute bottom-4 left-4 text-white text-sm font-medium z-20 transition-all duration-300 group-hover:bottom-6">
        {title}
      </div>
    </div>
  );
}
