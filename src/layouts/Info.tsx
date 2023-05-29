import Section from "./Section";


const Info = () => {
    return (
        <>
            <Section title="Yo" idSection="yo">
                <div className="flex flex-row gap-2 items-center">
                    <div className="container-logo-1 bg-text/80">
                        <div className="container-logo-2 bg-brand/80">
                            <div className="container-logo-3 w-20 h-20"></div>
                        </div>
                    </div>
                    <p className="">
                        Hace un tiempo, me interesé en el desarrollo web e
                        interfaces. Desde entonces, he ido mejorando
                        constantemente mis habilidades. Ahora estoy
                        desarrollando sitios web y aplicaciones web por encargo
                        o por diversión.
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Info;
