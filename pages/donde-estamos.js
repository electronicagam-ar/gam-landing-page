import Head from "next/head";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import { Icon } from "@iconify/react";
import { links } from "@utils/links";

export default function DondeEstamos() {
    return (
        <>
            <Head>
                <title>¿Dónde estamos? | GAM Electrónica</title>
                <meta
                    name="description"
                    content="GAM Electrónica - Santa Fe Capital, Argentina. Reparación de Smart TVs, LED, LCD, OLED, QLED y 4K."
                />
            </Head>

            <SectionContainer className="donde-estamos--container py-16 bg-white">
                <SectionContainer className="donde-estamos--inner-container wrap wrap-px z-10">

                    <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                        <PageTitle className="text-center mx-auto text-[#004a8c]" type="heavy">
                            ¿Dónde estamos?
                        </PageTitle>
                    </MotionBTTContainer>

                    <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                        <Content alignment="center" className="text-center mb-10">
                            <p>
                                Estamos en <strong>Santa Fe Capital, Argentina</strong>.
                                
                                Encontranos fácil siguiendo el mapa de abajo.
                            </p>
                        </Content>
                    </MotionBTTContainer>

                    <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>
                        {/* Si el mapa no cae justo en el local, reemplazá el src por el
                            que te da Google Maps en Compartir > Insertar un mapa desde
                            tu ficha de negocio. */}
                        <div className="relative w-full max-w-4xl mx-auto h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl mb-12">
                            <iframe
                                src="https://www.google.com/maps?q=GAM+Electronica,+Santa+Fe+Capital,+Argentina&output=embed"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de GAM Electrónica en Santa Fe Capital"
                            />
                        </div>
                    </MotionBTTContainer>

                    <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                        <div className="flex flex-wrap justify-center gap-12 text-center mb-12">
                            <div>
                                <h2 className="text-lg font-bold text-[#004a8c] mb-2">
                                    Horario de atención
                                </h2>
                                <p className="mb-0">Lunes a viernes</p>
                                <p className="mb-0">9:00 a 12:00 hs</p>
                                <p className="mb-0">17:00 a 19:00 hs</p>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#004a8c] mb-2">
                                    Ubicación
                                </h2>
                                <p className="mb-0">Dr. Zavalla 2519 (3000)</p>
                                <p className="mb-0">Santa Fe Capital, Argentina</p>
                            </div>
                        </div>
                    </MotionBTTContainer>

                    <MotionBTTContainer transition={{ delay: 0.7, duration: 0.5 }}>
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            <a
                                href="https://maps.app.goo.gl/HUHXCG7v9S6Pt1s58"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="button"
                                className="bg-[#004a8c] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md"
                            >
                                Cómo llegar
                                <Icon icon="material-symbols:map-outline-rounded" className="text-xl" />
                            </a>
                            <a
                                href={links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="button"
                                className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-md"
                            >
                                Chatear por WhatsApp
                                <Icon icon="material-symbols:arrow-forward-rounded" className="text-xl" />
                            </a>
                        </div>
                    </MotionBTTContainer>

                </SectionContainer>
            </SectionContainer>
        </>
    );
}