import React from "react";
import Section from "./Section";
import { ProyectsData } from "../data/ProyectsData";
import ProyectsCard from "../components/ui/ProyectsCard";

const Proyects = () => {
    return (
        <>
            <Section title="Proyectos" idSection='proyectos'>
                <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-4 items-center justify-center">
                {ProyectsData.map((proyect: any, index: any) =>
                    <ProyectsCard key={index} proyect={proyect}  />
                )}
                </div>
            </Section>
        </>
    );
};

export default Proyects;
