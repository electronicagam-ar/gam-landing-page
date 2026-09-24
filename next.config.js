/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com", "lh3.googleusercontent.com"]
    },
    env: {
        siteTitle: "GAM Electrónica",
        siteDescription: "Reparación de Smart TVs LED, LCD, OLED, QLED y 4K en Santa Fe Capital. Más de 25 años de experiencia. Presupuesto sin cargo.",
        siteKeywords: "reparación de tv santa fe, service smart tv santa fe, reparación led oled qled, electrónica gam",
        siteUrl: "https://www.electronicagam.com.ar",
        siteImagePreviewUrl: "images/preview.jpeg",
        twitterHandle: "@electronicagam"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;