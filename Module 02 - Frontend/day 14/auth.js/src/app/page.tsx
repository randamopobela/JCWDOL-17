import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();
    return (
        <div>
            {session?.user?.id ? (
                <div className="flex gap-2 justify-center">
                    <img
                        alt="ini avatar"
                        src={session.user.image as string}
                        width={200}
                        height={200}
                        className="rounded-full aspect-square object-cover "
                    ></img>
                    <h1 className="font-bold text-3xl flex items-center">
                        Welcome {session?.user?.name}
                    </h1>
                </div>
            ) : (
                <h1 className="font-bold text-3xl">
                    Please login{" "}
                    <Link href={"/login"} className="text-blue-400">
                        here
                    </Link>
                </h1>
            )}
        </div>
    );
}