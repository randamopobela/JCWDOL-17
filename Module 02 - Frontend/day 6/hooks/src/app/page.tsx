"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); //componentDidUpdate => biasa dipakai untuk tarik API.

    useEffect(() => {
        setCount(5);
    }, []); //componentDidMount

    return (
        <div className="flex justify-center items-center min-h-screen">
            <center>
                <h2 className="font-bold">You clicked {count} times</h2>
                <button
                    className="bg-red-300 rounded-md px-2 py-1 mt-2 font-semibold"
                    onClick={() => setCount(count + 1)}
                >
                    Click Me
                </button>
            </center>
        </div>
    );
}
