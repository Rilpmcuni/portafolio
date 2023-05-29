import { ProyectsData } from "@/src/data/ProyectsData";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // leer los parámetros de la ruta
  const slug = params.slug.replace(/-/g, " ");
  const proyecto = ProyectsData.find((p) => p.page.toLowerCase() === slug);

  return {
    title: `${proyecto?.title} | Christian Lisantti`,
    description: "Mi portafolio", // Agrega la descripción aquí
  };
}

export default function RootProyect({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
