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
                    className={`sm:flex hidden rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                        isActive && "text-brand bg-bg"
                    }`}
                >
                    {title}
                </NextLink>
                {title === "Proyectos" && (
                    <NextLink
                        key={title}
                        href={url}
                        className={`text-xl sm:text-base flex sm:hidden rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                            isActive && "text-brand bg-bg"
                        }`}
                    >
                        {title}
                    </NextLink>
                )}
            </>
        );
    });
    const LinkItems = [
        ["Yo", "yo"],
        ["Habilidades", "habilidades"],
        ["Proyectos", "proyectos"],
        ["Contacto", "contacto"],
    ].map(([title, to]) => {
        const isActive = pathname.startsWith(to);
        return (
            <>
                <Link
                    to={to}
                    smooth={true}
                    duration={250}
                    offset={-80}
                    key={title}
                    className={`sm:flex hidden select-none cursor-pointer rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                        isActive && "text-brand bg-bg"
                    }`}
                >
                    {title}
                </Link>
                {title === "Proyectos" && (
                    <Link
                        to={to}
                        smooth={true}
                        duration={250}
                        offset={-80}
                        key={title}
                        className={`text-xl sm:text-base flex sm:hidden select-none cursor-pointer rounded-lg px-3 py-2 font-bold hover:bg-bg ${
                            isActive && "text-brand bg-bg"
                        }`}
                    >
                        {title}
                    </Link>
                )}
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
            <div className="sm:h-24 h-28 left-0 right-0 top-0 flex flex-row items-center justify-between space-x-2 p-4 ">
                
            </div>
        </>
    );
}
