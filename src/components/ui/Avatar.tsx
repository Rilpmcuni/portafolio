import Image from "next/image";
import webp from "@/src/assets/image.webp";

export default function Avatar() {
    return (
        <>
            <Image
                height={100}
                width={100}
                priority={true}
                className="frog h-auto w-12 border-2 border-brand hover:border-text cursor-pointer"
                src={webp}
                alt={"Fabian Lisantti"}
            />
        </>
    );
}
