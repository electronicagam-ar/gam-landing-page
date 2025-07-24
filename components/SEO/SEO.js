import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
    // Cuztomize Meta Properties
    // Can create extra props and pass as arguments like title in case you want to change for each page.
    const metaDescription = description
        ? description
        : process.env.siteDescription;
    const metaKeywords = keywords ? keywords : process.env.siteKeywords;
    const siteURL = process.env.siteUrl;
    const twitterHandle = process.env.twitterHandle;
    const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            {/* { Twitter } */}
            <meta
                name="twitte:card"
                content="summary_large_image"
                key="twcard"
            />
            <meta
                name="twitter:creator"
                content={twitterHandle}
                key="twhandle"
            />

            {/* {Open Graph} */}
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:image" content={imagePreview} key="ogimage" />
            <meta property="og:site_name" content={siteURL} key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={metaDescription}
                key="ogdesc"
            />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/svg+xml"
                sizes="any"
                href="/favicon.svg"
            />
            <link
                rel="icon"
                type="image/x-icon"
                sizes="any"
                href="/favicon.ico"
            />
            {/* Title */}
            <title>{title}</title>

            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
            <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        </Head>
    );
};

export default SEO;
