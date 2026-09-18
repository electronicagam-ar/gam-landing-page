import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { links } from "@utils/links";

export const Header = () => {
    return (
        <SectionContainer className="header--container wrap wrap-px flex items-center justify-between w-full py-3">
            
            {/* Sector Izquierdo: Logo */}
            <div className="header-logo--container">
              <h1 className="logo mb-0">
                <Link href="/">
                  <Image
                    src="/Logo_GAM.jpg"
                    alt="logo"
                    className="h-15 w-auto object-contain"
                    height="100"
                    width="280"
                    priority
                  />
                </Link>
              </h1>
            </div>

            {/* Sector Derecho: Menú y Botón */}
            <SectionContainer className="flex items-center gap-6">
              <Nav />
              <ButtonGroup className="hidden md:block">
                <a
                  role="button"
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0056b3] text-white px-6 py-2.5 rounded font-semibold hover:bg-blue-800 transition-colors"
                >
                  Chatear Ahora
                </a>
              </ButtonGroup>
            </SectionContainer>

          </SectionContainer>
        </header>
    );
};
