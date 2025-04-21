"use client";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export default function Container({
  bgColor,
  bgImage,
  children,
}: {
  bgColor?: string;
  bgImage?: string;
  children: React.ReactNode;
}) {
  const windowWidth = useWindowWidth();

  const isSmallScreen = windowWidth !== null && windowWidth < 510;

  return (
    <div
      className={`flex flex-col ${bgColor ? bgColor : ""} mt-16`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: isSmallScreen ? "cover" : "contain",
              backgroundPosition: "right center",
              backgroundRepeat: isSmallScreen ? "no-repeat" : "repeat",
            }
          : undefined
      }
    >
      {bgImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#858483cc] to-[#f1ece200]" />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-4 backdrop-blur-sm/10">
        {children}
      </div>
    </div>
  );
}
