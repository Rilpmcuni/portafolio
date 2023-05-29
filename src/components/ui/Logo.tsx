import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <>
            <Link href={"/"} className="group">
                <h1 className="transition-all text-3xl font-black group-hover:text-brand">
                    Fabian{" "}
                    <span className="transition-all text-brand group-hover:text-text">Lisantti</span>
                </h1>
            </Link>
        </>
    );
}
