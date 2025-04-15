import Link from "next/link";

export default function Home() {
  return (
    <div className="truncate flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
