import React from "react";

interface Props {
    children: any;
    title: string;
    idSection: string;
}

const Section: React.FC<Props> = ({ children, title, idSection }) => {
    return (
        <>
            <section
                className="my-6 flex w-11/12 flex-col items-center justify-center"
                id={idSection}
            >
                <h3 className="my-4 text-3xl text-brand">{title}</h3>
                {children}
            </section>
        </>
    );
};

export default Section;
