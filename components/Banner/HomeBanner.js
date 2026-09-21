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
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content alignment="center" className="text-center text-white">
                        <p>
                            Más de 30 Años de Experiencia. Reparamos SMART Tvs, LED, LCD, OLED, QLED, 4K.
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
                                className="btn btn--secondary ml-4"
                            >
                                Pedí tu Presupuesto por Whatsapp
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                       <Image
  src="/Taller.jpg" // CAMBIA .jpg por .png si tu foto nueva es .png
  width={1024}
  height={680}
  alt="Taller de Electrónica GAM"
  objectFit="cover"
  className="mx-auto rounded-xl"
  priority={true} // Esto le dice a Next.js que la cargue primero
/>
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
