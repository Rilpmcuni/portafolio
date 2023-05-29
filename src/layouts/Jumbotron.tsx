import Image from "next/image";
import webp from "@/src/assets/image.webp";

const Jumbotron = () => {
    return (
        <>
            <section className="flex sm:flex-row flex-col w-11/12 h-[70vh] z-10 items-center justify-evenly sm:my-12 my-6">
                <div className="flex flex-col">
                    <h1 className="text-brand text-5xl font-black">
                        Fabian Lisantti
                    </h1>
                    <h2 className="text-2xl">Desarrollador Frontend</h2>
                    <p className="">
                        Desarrollador Frontend buscando ideas y proyectos para
                        mi mismo u otros.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="container-logo-1 bg-text/80">
                        <div className="container-logo-2 bg-brand/80">
                            <div className="container-logo-3">
                                <Image
                                    height={400}
                                    width={400}
                                    priority={true}
                                    className="frog h-auto w-11/12"
                                    src={webp}
                                    alt={"Fabian Lisantti"}
                                ></Image>
                            </div>
                        </div>
                    </div>
                    <figure className="text-end z-50 -mt-28 bg-bg rounded-2xl p-4">
                        <blockquote className="blockquote text-text/80 bg-bg-100">
                            <p>
                                A veces quisiera tirar la toalla, pero luego...
                                ¿Con que me seco?
                            </p>
                            <figcaption className="blockquote-footer text-brand">
                                Frases que Nadie dijo{" "}
                                <cite title="Source Title">nunca</cite>
                            </figcaption>
                        </blockquote>
                    </figure>
                </div>
            </section>
        </>
    );
};

export default Jumbotron;
