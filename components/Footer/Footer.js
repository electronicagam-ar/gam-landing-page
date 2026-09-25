import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import { links } from "@utils/links";

const DATA = [
    {
        title: "Menú",
        items: [
            {
                label: "Servicios",
                href: "#servicios"
            },
            {
                label: "Clientes",
                href: "#clientes"
            }
        ]
    },
    {
        title: "Redes",
        items: [
            {
                label: "Email",
                href: links.email,
                target: "_blank",
                icon: "mdi:email-outline"
            },
            {
                label: "Facebook",
                href: links.facebook,
                target: "_blank",
                icon: "mdi:facebook"
            },
            {
                label: "Instagram",
                href: links.instagram,
                target: "_blank",
                icon: "mdi:instagram"
            },
            {
                label: "WhatsApp",
                href: links.whatsapp,
                target: "_blank",
                icon: "ic:baseline-whatsapp"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8 max-w-xs">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        className="h-auto w-full"
                                        height="100"
                                        width="100"
                                        priority
                                    />
                                </Link>

                                {/* Ubicación */}
                                <Link
                                    href="/donde-estamos"
                                    className="flex items-start gap-2 text-sm font-medium text-gray-600 hover:text-[#004a8c] transition-colors"
                                >
                                    <Icon
                                        icon="material-symbols:location-on-outline-rounded"
                                        className="text-xl mt-0.5 shrink-0"
                                    />
                                    <span>
                                        Dr. Zavalla 2519, Santa Fe Capital, Argentina
                                    </span>
                                </Link>

                                {/* Get Template button; remove if not used */}
                                <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href={links.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn--secondary w-full"
                                    >
                                        Contáctanos
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 flex items-center gap-1.5 w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.icon && (
                                                                <Icon
                                                                    icon={footerItem.icon}
                                                                    className="text-lg"
                                                                />
                                                            )}
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        ©️ {year} GAM Electronica. All rights reserved{" - "}
                        <span className="font-normal">
                            Web made by{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://www.linktr.ee/Electronicagam"
                                target="_blank"
                            >
                                *Electrónica GAM*.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};