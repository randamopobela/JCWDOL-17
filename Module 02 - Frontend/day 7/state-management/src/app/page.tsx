<<<<<<< HEAD
"use client";

import { LocalComponent } from "@/components/local.component";
import StoreProvider from "@/components/store.provider.component";
import { useState } from "react";

export default function Home() {
    const [val, setVal] = useState<string>("Hello World");

    return <center className=""></center>;
=======
/** @format */
"use client";

import { LocalComponent } from "@/components/local.component";
import { UserContext } from "@/contexts/user.context";
import { createContext, useState } from "react";

export const UserContext2 = createContext(""); //membuat sebuah scope dimana value dari context tsb bisa digunakan oleh component di dalam scopenya
export default function Home() {
  const [user, setUser] = useState<string>("hello world");
  return (
    <UserContext2.Provider value="testtttt">
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <center className="">
          <LocalComponent />
        </center>
      </UserContext.Provider>
    </UserContext2.Provider>
  );
>>>>>>> master
}
