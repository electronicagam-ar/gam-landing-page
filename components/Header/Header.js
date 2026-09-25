import Link from 'next/link';
import Image from 'next/image';
import { SectionContainer } from "@components/Section";
import { links } from "@utils/links";

export const Header = () => {
  return (
    <header id="header" className="header fixed left-0 w-full z-30 top-0 bg-white shadow-md">
      <SectionContainer className="header--container wrap wrap-px flex items-center justify-between">
        
        {/* Sector Izquierdo: Logo */}
        <div className="header-logo--container">
          <h1 className="logo mb-0">
            <Link href="/">
              <Image
                src="/logo-gam.jpeg"
                alt="logo"
                className="h-16 w-auto object-contain"
                height={100}
                width={280}
                priority
              />
            </Link>
          </h1>
        </div>

        {/* Sector Derecho: Menú y Botón */}
        <div className="flex items-center gap-8 text-[#004a8c] font-bold">
          <Link href="/#servicios" className="hover:text-blue-500 transition-colors">Servicios</Link>
          <Link href="/#clientes" className="hover:text-blue-500 transition-colors">Clientes</Link>
          <Link href="/donde-estamos" className="hover:text-blue-500 transition-colors flex items-center gap-1">¿Dónde estamos? ↗️</Link>
          
          <Link href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-sm">
            Chatear Ahora
          </Link>
        </div>

      </SectionContainer>
    </header>
  );
};