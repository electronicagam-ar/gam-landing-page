import { motion } from "framer-motion";
import Image from "next/image";

const BRANDS = [
    { name: "Samsung", file: "samsung.png" },
    { name: "LG", file: "lg.png" },
    { name: "Sony", file: "sony.png" },
    { name: "Philips", file: "philips.png" },
    { name: "Philco", file: "philco.png" },
    { name: "RCA", file: "rca.png" },
    { name: "JVC", file: "jvc.png" },
    { name: "Panasonic", file: "panasonic.png" },
    { name: "Sanyo", file: "sanyo.png" },
    { name: "TCL", file: "tcl.png" },
    { name: "BGH", file: "bgh.png" },
    { name: "Hisense", file: "hisense.png" },
    { name: "Noblex", file: "noblex.png" },
    { name: "Pioneer", file: "pioneer.png" },
    { name: "Sharp", file: "sharp.png" },
    { name: "Kanji", file: "kanji.png" },
    { name: "Onn", file: "onn.png" },
    { name: "Durabrand", file: "durabrand.png" },
    { name: "AOC", file: "aoc.png" },
    { name: "Hyundai", file: "hyundai.png" },
    { name: "GoldStar", file: "goldstar.png" }
];

export const MotionInfiniteImage = () => {
    // Duplicamos la lista para que el loop sea continuo sin cortes
    const loopBrands = [...BRANDS, ...BRANDS];

    return (
        <div className="brands-marquee relative w-full overflow-hidden py-8">
            {/* Difuminado en los bordes para que las imágenes "aparezcan" suave */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
                className="flex items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {loopBrands.map((brand, i) => (
                    <div
                        key={`${brand.name}-${i}`}
                        className="flex items-center justify-center h-12 w-28 shrink-0 mx-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                    >
                        <Image
                            src={`/brands/${brand.file}`}
                            alt={brand.name}
                            width={112}
                            height={48}
                            className="max-h-12 w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
