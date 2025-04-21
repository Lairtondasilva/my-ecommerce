import { Search } from "lucide-react";

export default function Input({
  label,
  placeholder,
  type = "text",
}: {
  label?: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col relative sm:min-w-[280px] md:min-w-[350px] w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-[#3D332B]">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-[#E6E6E6] rounded-xl px-4 ${
          type === "search" ? "pr-10" : ""
        } py-2 w-full text-sm text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#A3907C] focus:border-[#A3907C] transition duration-200 ease-in-out placeholder:text-[#6F6050]`}
      />
      {type === "search" && (
        <Search
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A3907C]"
          size={18}
        />
      )}
    </div>
  );
}
