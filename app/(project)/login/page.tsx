import { handleAuth } from "@/app/actions/handle-auth";


export default function Login() {
    return (
        <div className="truncate flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold underline">Login</h1>
            <form
                action={handleAuth}
            >
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Signin with Google</button>
            </form>
        </div>
    );
}