import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import { links } from "@utils/links";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16 bg-[#004a8c]">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">

                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto text-white" type="heavy">
                        Reparación de Televisores de Última Generación
                    </PageTitle>
                </MotionBTTContainer>
                
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content alignment="center" className="text-center text-white">
                        <p>
                            Más de 25 Años de Experiencia. Reparamos Smart TVs, LED, LCD, OLED, QLED, 4K.
                            Presupuesto sin Cargo {" "}
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#servicios">Servicios</Button>
                            <a
                                role="button"
                                href={links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 ml-4 shadow-md"
                            >
                                Pedí tu Presupuesto por Whatsapp
                                <Icon icon="material-symbols:arrow-forward-rounded" className="text-xl" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-xl shadow-2xl">
                        <Image
                            src="/taller.jpg" 
                            alt="Taller de Electrónica GAM"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};