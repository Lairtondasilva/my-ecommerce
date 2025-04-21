// components/Logo.tsx
import Image from "next/image";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <Image src="/icon.png" alt="Logo" width={size} height={size} />
    </div>
  );
}
