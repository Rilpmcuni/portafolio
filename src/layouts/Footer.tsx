"use client";
import Section from "./Section";
import Logo from "../components/ui/Logo";
import {
    EnvelopeClosedIcon,
    EnvelopeOpenIcon,
    GitHubLogoIcon,
    ExternalLinkIcon,
    CopyIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
    function copyToClipboard(text: string) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log(`Copiado al portapapeles: ${text}`);
            })
            .catch((error) => {
                console.error(`Error al copiar al portapapeles: ${error}`);
            });
    }
    return (
        <>
            <Section title="" idSection="contacto">
                <div className="mb-12 flex flex-col gap-12 font-mono sm:mb-auto sm:flex-row">
                    <div className="flex w-64 flex-col">
                        <Logo />
                        <span>
                            Si te gusta mi trabajo y me necesitas, estaría
                            encantado de hablar contigo.
                        </span>
                    </div>
                    <div>
                        <h3 className="text-3xl text-brand">Contacto</h3>
                        <div className="select-none">
                            <span
                                className="text-text-100 group flex cursor-pointer items-center  
                                gap-1 hover:text-brand active:text-brand/50 "
                                onClick={() =>
                                    copyToClipboard(
                                        "christian.lisantti@gmail.com"
                                    )
                                }
                            >
                                <EnvelopeClosedIcon />{" "}
                                fabian.lisantti@gmail.com
                                <div className="font-bold text-brand opacity-0 group-hover:opacity-100">
                                    <CopyIcon />
                                </div>
                            </span>
                            <Link
                                className="text-text-100 group flex items-center gap-1 hover:text-brand"
                                href="https://github.com/Rilpmcuni/"
                                target="_blank"
                            >
                                <GitHubLogoIcon /> @Rilpmcuni
                                <div className="font-bold text-brand opacity-0 group-hover:opacity-100">
                                    <ExternalLinkIcon />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Footer;
