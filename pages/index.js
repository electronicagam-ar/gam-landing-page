import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { FeatureIcons } from "@components/FeatureIcons";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { Icon } from "@iconify/react";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export async function getStaticProps() {
    // TODO: replace with your own key
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?fields=reviews,rating,user_ratings_total&reviews_no_translations=true&place_id=ChIJQwZ8mbSptZURi_ND09STmC4&key=${process.env.MAPS_API_KEY}`)
    const places = await res.json()
    return { props: { places }, revalidate: 86400 }
}

export default function Home({ places }) {
    return (
        <Layout className="">
            <SEO
                title="GAM Electronica"
                description="Especialistas en reparación y servicio técnico para
                            TVs de última generación"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                <FeatureIcons />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Servicios */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="servicios" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Servicios</BadgeMessage>
                                <BadgeIcon icon="mdi:account-service" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Más de 25 años de experiencia en el rubro
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Nos especializamos en la reparación completa
                                    de televisores, incluyendo la recuperación o
                                    sustitución de placas y pantallas, así como
                                    la carga de firmware en todas las marcas.
                                    Utilizamos repuestos originales.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Mas Servicios</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Master Your Meal Planning and Nutrition Journey
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our comprehensive Notion template designed
                                    to empower you on your meal planning and
                                    nutrition journey. With our user-friendly
                                    features, customizable layouts, and seamless
                                    recipe integration, taking control of your
                                    meals has never been easier.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customizable Layouts
                                        </CardHeader>
                                        <p>
                                            Personalize your meal planning
                                            experience with our flexible
                                            layouts. Tailor your sections,
                                            categories, and tabs to suit your
                                            unique style and organization
                                            preferences. Our template adapts to
                                            your needs, providing a seamless and
                                            personalized planning experience.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Progress Tracking
                                        </CardHeader>
                                        <p>
                                            Celebrate your wins and stay
                                            motivated on your nutrition journey.
                                            NutriTrack allows you to monitor
                                            your progress with weight,
                                            measurements, and other key metrics.
                                            Track your improvements over time
                                            and see the positive impact of your
                                            healthy choices.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Clientes */}
                    {places.result && <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="clientes" className="benefits">
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Clientes</BadgeMessage>
                                <BadgeIcon icon="ic:round-star-rate" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Esto es lo que dicen nuestros clientes:
                            </PageTitle>
                            <div className="flex gap-1 items-center">
                                <p className="text-4xl">{places.result.rating}</p>
                                {Array.from({ length: places.result.rating }).map((_, i) => (
                                    <Icon
                                        key={i}
                                        icon="solar:star-bold"
                                        height={30}
                                        width={30}
                                        className="mr-1 text-secondary-500"
                                    />
                                ))}
                                {places.result.user_ratings_total} {places.result.user_ratings_total > 1 ? "Reseñas" : "Reseña"}
                            </div>
                            <Columns places={places} />
                        </SectionContainer>
                    </MotionBTTContainer>}
                    {/* Accordions
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about NutriTrack?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                </SectionContainer>
            </div>
        </Layout>
    );
}
