import React from "react";
import Section from "./Section";
import { ProyectsData } from "../data/ProyectsData";
import ProyectsCard from "../components/ui/ProyectsCard";

const Proyects = () => {
  return (
    <>
      <Section title="Proyectos" idSection="proyectos">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
          {ProyectsData.map((proyect: any, index: any) => (
            <ProyectsCard key={index} proyect={proyect} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Proyects;
