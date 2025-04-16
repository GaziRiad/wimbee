import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";
import LogoCarousel from "@/components/home/LogoCarousel";
import IntroductionSection from "@/components/home/IntroductionSection";
import SectorsSection from "@/components/home/SectorsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import Newsletter from "@/components/Newsletter";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import SplitSection from "@/components/home/SplitSection";
import { groq } from "next-sanity";
import Head from "next/head";
import Hero from "@/components/home/Hero";

// Dynamic metadata
export async function generateMetadata({ params: { locale } }) {
  const data = await sanityFetch({
    query: groq`*[_type == "home"][0]{
      seo {
        "title": coalesce(title[_key == $locale][0].value, title[_key == "en"][0].value),
        "description": coalesce(description[_key == $locale][0].value, description[_key == "en"][0].value)
      }
    }`,
    qParams: { locale },
    tags: ["home"],
  });

  return {
    title: data?.seo?.title || "Welcome — Wimbee",
    title: data?.seo?.description || "Welcome — Wimbee",
  };
}

export const revalidate = 2592000; // 30 days in seconds

const i18nNamespaces = ["home", "errors"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const data = await sanityFetch({
    query: homequery,
    qParams: { locale },
    tags: ["home", "sector", "post", "blog-section", "blog", "case-study"],
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://wimbeetech.com/";
  const canonicalUrl = `${baseUrl}/${locale === "en" ? "" : locale}`;

  if (!data) return null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main>
        <Hero
          title={data?.hero?.title}
          video={data?.hero?.backgroundVideoUrl}
          locale={locale}
        />
        <LogoCarousel logos={data?.partners?.logos} />
        <IntroductionSection content={data?.introduction} />
        <SectorsSection content={data?.sectors} />
        <ServicesSection content={data?.services} />
        <SplitSection type="case-studies" content={data?.caseStudies} />
        <SpotlightSection content={data?.spotlight} />
        <SplitSection
          type="blog"
          content={data?.blog}
          flipped={true}
          variant="light"
        />
        <Newsletter locale={locale} />
        <InfoSection locale={locale} />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}
