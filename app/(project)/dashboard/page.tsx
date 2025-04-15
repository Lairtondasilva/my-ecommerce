import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/libs/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  console.log(session);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="truncate flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>

      <p>
        {session?.user?.email ? session.user.email : "usuário não está logado"}
      </p>

      {session?.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
}
