import { Props } from "next/script";
import React from "react";

export function Navbar({}: Props) {
    return (
        <nav className="navbar">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">TEAM</a>
        </nav>
    );
}
