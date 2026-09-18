import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Presupuestos sin cargo",
        content:
            "Diagnosticamos tu TV sin cargo y te damos un presupuesto sin compromiso. Si no te convence, no pagas nada. ¡Así de simple!",
            title: "Realizamos Informes Técnicos para Seguros",
            content: 
            "Realizamos Informes Técnicos para las diferentes Compañías de Seguros del País",
        align: "left",
        image: "/hero.jpg"
    },
    {
        id: uuid(),
        title: "Trabajamos con todas las marcas del mercado"
        ,
        content:
            "Trabajamos todas las marcas y modelos con tecnologías LCD, LED, OLED, QLED, 4k UHD y Smart TV.",
        align: "right",
        image: "/tv-brands.png"
    },
    {
        id: uuid(),
        title: "Garantía de 3 meses",
        content:
            "Todos nuestros trabajos vienen respaldados por una garantía de 3 meses, lo que proporciona a nuestros clientes confianza y seguridad en sus reparaciones.",
        align: "left",
        image: "/handshake.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${item.align === "left" ? "md:order-1" : ""
                            }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16 rounded-xl"
                        />
                    </div>
                    <div
                        className={`process-item--content ${item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
