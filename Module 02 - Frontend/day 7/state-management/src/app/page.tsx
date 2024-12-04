"use client";

import { LocalComponent } from "@/components/local.component";
import StoreProvider from "@/components/store.provider.component";
import { useState } from "react";

export default function Home() {
    const [val, setVal] = useState<string>("Hello World");

    return <center className=""></center>;
}
