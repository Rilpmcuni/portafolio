"use client";

import Badge from "@/src/components/ui/Badge";
import ProyectsCard from "@/src/components/ui/ProyectsCard";
import { ProyectsData } from "@/src/data/ProyectsData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

import { useState } from "react";
import proyectTamizLA from "@/src/assets/proyectTamizLA-0.png";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default async function ProyectoPage({
    params,
}: {
    params: { slug: string };
}) {
    const slug = await params.slug.replace(/-/g, " ");
    const proyecto = ProyectsData.find((p) => p.page.toLowerCase() === slug);
    if (!proyecto) {
        redirect("/");
    }
    console.log(proyecto);
    /*  */

    /*  */

    return (
        <>
            <main className={""}>
                <div className="flex w-screen flex-col  justify-evenly sm:flex-row">
                    <div className="flex w-full flex-col sm:w-7/12">
                        <blockquote className="z-40 flex bg-bg text-text/80 sm:hidden p-4 rounded-2xl">
                            <h2 className="text-3xl text-brand ">
                                {proyecto.title}
                            </h2>
                        </blockquote>
                        <blockquote className="blockquote z-0 rounded-b-none rounded-t-2xl bg-bg text-text/80">
                            <div className="container-logo-1 bg-text/80 ">
                                <div className="container-logo-2 bg-brand/80 ">
                                    <div className="container-logo-3 ">
                                        <Image
                                            width={1280}
                                            height={720}
                                            priority={true}
                                            className="w-full"
                                            src={proyecto.bgProyect[0]}
                                            alt={proyecto.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* overflow-x-scroll */}
                        </blockquote>
                        {/*  */}
                        <div className="z-40 mt-4 flex flex-col gap-2">
                            <blockquote className="blockquote mt-4 flex flex-col rounded-2xl bg-bg p-4 text-text/80">
                                <h2 className="text-2xl text-brand">
                                    Enlaces de interes
                                </h2>
                                <div className="gap-y-1 flex flex-col">
                                    <Link
                                        target="_blank"
                                        className="bg-bgdark px-3 py-1 rounded-2xl group flex items-center gap-1 hover:text-brand"
                                        href={proyecto.links[0]}
                                    >
                                        Ir a la Demo
                                        <div className="font-bold text-brand opacity-0 group-hover:opacity-100">
                                            <ExternalLinkIcon />
                                        </div>
                                    </Link>
                                    <Link
                                        className="bg-bgdark px-3 py-1 rounded-2xl group flex items-center gap-1 hover:text-brand"
                                        target="_blank"
                                        href={proyecto.links[1]}
                                        color="text"
                                    >
                                        Ir al Repositorio
                                        <div className="font-bold text-brand opacity-0 group-hover:opacity-100">
                                            <ExternalLinkIcon />
                                        </div>
                                    </Link>
                                </div>
                            </blockquote>
                            {/*  */}
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-3xl text-brand mt-4 mb-2">
                                    Proyectos
                                </h3>

                                <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-4 items-stretch justify-between">
                                    {ProyectsData.map(
                                        (proyect: any, index: any) => (
                                            <ProyectsCard
                                                key={index}
                                                proyect={proyect}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Izquierda */}
                    <div className="flex w-full flex-col sm:w-4/12 ">
                        <blockquote className="flex  text-3xl text-brand sm:hidden p-4 rounded-2xl">
                            Descripción
                        </blockquote>
                        <blockquote className="hidden text-3xl text-brand sm:flex">
                            {proyecto.title}
                        </blockquote>
                        {/*  */}
                        {/*  */}
                        <blockquote className="blockquote rounded-2xl bg-bg p-4 text-end text-text/80">
                            <div className="flex select-none flex-row flex-wrap gap-1">
                                {proyecto.badge.map((tag, index) => (
                                    <Badge key={index}>{tag}</Badge>
                                ))}
                            </div>
                            <p>{proyecto.description}</p>
                        </blockquote>
                        <p className="px-4 leading-relaxed">
                            {proyecto.parraph
                                .split(".")
                                .map((sentence, index) => (
                                    <span key={index}>
                                        {sentence.trim()}.
                                        <br />
                                    </span>
                                ))}
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
