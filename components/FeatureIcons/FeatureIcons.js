import { SectionContainer } from "@components/Section";
import { MotionBTTContainer } from "@components/Motion";
import { Icon } from "@iconify/react";

const FEATURES = [
    {
        icon: "mdi:wrench-outline",
        title: "Diagnóstico Sin Cargo"
    },
    {
        icon: "mdi:shield-check-outline",
        title: "Garantía de 3 Meses"
    },
    {
        icon: "mdi:chip",
        title: "Carga de Firmware y Reparación de Placas"
    },
    {
        icon: "mdi:television",
        title: "Cambio de Pantallas y Repuestos Originales"
    }
];

export const FeatureIcons = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-icons">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col items-center text-center gap-3 bg-white rounded-xl shadow-md p-6"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#004a8c]/10">
                                <Icon
                                    icon={feature.icon}
                                    className="text-3xl text-[#004a8c]"
                                />
                            </div>
                            <p className="font-bold text-[#004a8c] mb-0">
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </MotionBTTContainer>
    );
};