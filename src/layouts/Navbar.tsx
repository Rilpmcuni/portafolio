"use client";
import React from "react";
import Logo from "../components/ui/Logo";
import Avatar from "../components/ui/Avatar";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = pathname.startsWith("/proyectos");

    const NextLinkItems = [
        ["Yo", "/#yo", "/yo"],
        ["Habilidades", "/#habilidades", "/habilidades"],
        ["Proyectos", "/#proyectos", "/proyectos"],
        ["Contacto", "/#contacto", "/contacto"],
    ].map(([title, url, to]) => {
        const isActive = pathname.startsWith(to);
        return (
            <>
                <NextLink
                    key={title}
                    href={url}
                    className={`rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                        isActive && "text-brand bg-bg"
                    }`}
                >
                    {title}
                </NextLink>
            </>
        );
    });
    const LinkItems = [
        ["Yo", "/#yo", "yo"],
        ["Habilidades", "/#habilidades", "habilidades"],
        ["Proyectos", "/#proyectos", "proyectos"],
        ["Contacto", "/#contacto", "contacto"],
    ].map(([title, url, to]) => {
        const isActive = pathname.startsWith(to);
        return (
            <>
                <Link
                    to={to}
                    smooth={true}
                    duration={250}
                    offset={-80}
                    key={title}
                    className={`select-none cursor-pointer rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                        isActive && "text-brand bg-bg"
                    }`}
                >
                    {title}
                </Link>
            </>
        );
    });

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 flex flex-row items-center justify-between space-x-2 bg-bgdark p-4 z-50 border-bg border">
                <Logo />
                <div className="flex flex-row space-x-4 sm:justify-center">
                {isActive ? NextLinkItems : LinkItems}
                </div>
                <Avatar />
            </nav>
            <div className=" left-0 right-0 top-0 flex flex-row items-center justify-between space-x-2 bg-bgdark p-4  border-bg border">
                <Avatar />
            </div>
        </>
    );
}
