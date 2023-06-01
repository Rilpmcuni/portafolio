import { ProyectsData } from "@/src/data/ProyectsData";
import { Metadata, ResolvingMetadata } from "next";
/*  */
/* type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata( { params, searchParams }: Props, parent?: ResolvingMetadata ): Promise<Metadata> {
    // leer los parámetros de la ruta
    const slug = params.slug.replace(/-/g, " ");
    const proyecto = ProyectsData.find((p) => p.page.toLowerCase() === slug);

    return {
        title: `${proyecto?.title} | Christian Lisantti`,
        description: "Mi portafolio", // Agrega la descripción aquí
    };
} */
/*  */
/*  */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // leer los parámetros de la ruta
  const slug = params.slug.replace(/-/g, " ");
  const proyecto = ProyectsData.find((p) => p.page.toLowerCase() === slug);

  return {
    title: `${proyecto?.title} | Fabian Lisantti`,
    description: proyecto?.description, // Agrega la descripción aquí
    openGraph: {
      title: `${proyecto?.title} | Fabian Lisantti`,
      description: proyecto?.description,
      url: `http://www.fabian-lisantti.vercel.app/proyectos/${params}`,
      images: "/image.png",
    },
    twitter: {
      card: "summary_large_image",
      title: `${proyecto?.title} | Fabian Lisantti`,
      description: proyecto?.description,
      siteId: "1467726470533754880",
      creator: "@Rilpmcuni",
      creatorId: "1467726470533754880",
      images: {
        url: "/image.png",
        alt: "@Rilpmcuni",
      },
    },
  };
}
/*  */
export default function RootProyect({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
