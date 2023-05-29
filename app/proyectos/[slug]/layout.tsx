// export const metadata = {
//   title: 'Christian Lisantti | Desarrollador Frontend',
//   description: 'Mi portafolio.',
// }

import { ProyectsData } from "@/src/data/ProyectsData";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug.replace(/-/g, " ");
    const proyecto = ProyectsData.find((p) => p.page.toLowerCase() === slug);

    return {
        title: `${proyecto?.title} | Christian Lisantti`,
    };
}

export default function RootProyect({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
