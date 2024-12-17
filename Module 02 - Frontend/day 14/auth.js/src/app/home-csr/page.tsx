"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default async function Home() {
    const { data: session } = useSession();

    // Jika menggunakan csr (client side rendering), komponen harus dibungkus dengan SessionProvider lewat layout.
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
