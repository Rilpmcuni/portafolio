import React from "react";
import Logo from "../components/ui/Logo";
import Avatar from "../components/ui/Avatar";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="fixed left-0 right-0 top-0 flex flex-row items-center justify-between space-x-2 bg-bgdark p-4 z-50 border-bg border">
                <Logo />
                <div className="flex flex-row space-x-4 sm:justify-center">
                    {[
                        ["Yo", "/#yo"],
                        ["Habilidades", "/#habilidades"],
                        ["Proyectos", "/#proyectos"],
                        ["Contacto", "/#contacto"],
                    ].map(([title, url]) => (
                        <Link
                            href={url}
                            className="rounded-lg px-3 py-2 font-bold hover:bg-bg"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                <Avatar />
            </nav>
            <div className=" left-0 right-0 top-0 flex flex-row items-center justify-between space-x-2 bg-bgdark p-4  border-bg border">
                
                <Avatar />
            </div>
        </>
    );
}
