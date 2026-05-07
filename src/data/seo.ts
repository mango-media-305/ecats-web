import { siteConfig } from "./site";

type SchemaObject = Record<string, unknown>;

export type SeoMeta = {
    title: string;
    description: string;
    image?: string;
    canonical?: string;
    noindex?: boolean;
    keywords?: readonly string[];
};

export type BreadcrumbItem = {
    label: string;
    href: string;
};

export type FaqItem = {
    question: string;
    answer: string;
};

export const seoDefaults = {
    siteName: siteConfig.name,
    titleTemplate: siteConfig.seo.titleTemplate,
    defaultTitle: siteConfig.seo.defaultTitle,
    defaultDescription: siteConfig.seo.defaultDescription,
    defaultImage: siteConfig.seo.defaultImage,
    baseUrl: siteConfig.url,
    defaultKeywords: siteConfig.seo.keywords,
} as const;

export function absoluteUrl(path = "/") {
    const baseUrl = siteConfig.url.replace(/\/$/, "");

    if (path.startsWith("http")) {
        return path;
    }

    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return `${baseUrl}${cleanPath}`;
}

export function cleanCanonical(pathname: string) {
    const baseUrl = siteConfig.url.replace(/\/$/, "");
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");

    return `${baseUrl}${cleanPath}`;
}

export function formatPageTitle(title?: string) {
    if (!title) {
        return siteConfig.seo.defaultTitle;
    }

    if (title.includes(siteConfig.name)) {
        return title;
    }

    return siteConfig.seo.titleTemplate.replace("%s", title);
}

export function buildSeoMeta(meta: Partial<SeoMeta> = {}) {
    const title = formatPageTitle(meta.title);
    const description = meta.description ?? siteConfig.seo.defaultDescription;
    const image = meta.image ?? siteConfig.seo.defaultImage;

    return {
        title,
        description,
        image,
        absoluteImage: absoluteUrl(image),
        canonical: meta.canonical,
        noindex: meta.noindex ?? false,
        keywords: meta.keywords ?? siteConfig.seo.keywords,
    };
}

export function getBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: absoluteUrl(item.href),
        })),
    } as const;
}

export function getFaqSchema(faqs: readonly FaqItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    } as const;
}

export function getWebPageSchema({
    title,
    description,
    path,
    language = "en-US",
    breadcrumbs = [],
    additionalSchema = [],
}: {
    title: string;
    description: string;
    path: string;
    language?: string;
    breadcrumbs?: readonly BreadcrumbItem[];
    additionalSchema?: SchemaObject | SchemaObject[];
}) {
    const pageUrl = absoluteUrl(path);

    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: language,
        isPartOf: {
            "@id": `${siteConfig.url}/#website`,
        },
        about: {
            "@id": `${siteConfig.url}/#business`,
        },
    };

    const schemaList: SchemaObject[] = [baseSchema];

    if (breadcrumbs.length > 0) {
        schemaList.push(getBreadcrumbSchema(breadcrumbs));
    }

    if (Array.isArray(additionalSchema)) {
        schemaList.push(...additionalSchema);
    } else if (additionalSchema) {
        schemaList.push(additionalSchema);
    }

    return schemaList;
}

export function getServiceSchema({
    name,
    description,
    path,
    serviceType,
    areaServed = "Miami-Dade County, FL",
}: {
    name: string;
    description: string;
    path: string;
    serviceType: string | readonly string[];
    areaServed?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name,
        description,
        serviceType,
        provider: {
            "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: areaServed,
        },
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: absoluteUrl("/contact"),
            servicePhone: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "customer service",
                availableLanguage: ["English", "Spanish"],
            },
        },
        url: absoluteUrl(path),
    } as const;
}

export function getLocalServiceSchema({
    name,
    description,
    path,
    city,
    state = "FL",
    services,
}: {
    name: string;
    description: string;
    path: string;
    city: string;
    state?: string;
    services: readonly string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#local-service`,
        name,
        description,
        provider: {
            "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
            "@type": "City",
            name: `${city}, ${state}`,
        },
        serviceType: services,
        url: absoluteUrl(path),
    } as const;
}

export function getCollectionPageSchema({
    title,
    description,
    path,
    items,
}: {
    title: string;
    description: string;
    path: string;
    items: readonly {
        name: string;
        href: string;
        description?: string;
    }[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(path)}#collection`,
        name: title,
        description,
        url: absoluteUrl(path),
        isPartOf: {
            "@id": `${siteConfig.url}/#website`,
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                description: item.description,
                url: absoluteUrl(item.href),
            })),
        },
    } as const;
}

export function getContactPageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact")}#contactpage`,
        name: `Contact ${siteConfig.name}`,
        description:
            "Contact East Coast Accounting & Tax Services for tax preparation, bookkeeping, payroll, and accounting support in Miami, FL.",
        url: absoluteUrl("/contact"),
        mainEntity: {
            "@id": `${siteConfig.url}/#business`,
        },
    } as const;
}

export function getAboutPageSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${absoluteUrl("/about")}#aboutpage`,
        name: `About ${siteConfig.name}`,
        description:
            "Learn about East Coast Accounting & Tax Services, a Miami tax and accounting office serving individuals and businesses.",
        url: absoluteUrl("/about"),
        mainEntity: {
            "@id": `${siteConfig.url}/#business`,
        },
    } as const;
}

export function getOrganizationWithSameAsSchema() {
    const sameAs = Object.values(siteConfig.social).filter(Boolean);

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl(siteConfig.logos.dark),
        sameAs,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            contactType: "customer service",
            areaServed: "US-FL",
            availableLanguage: ["English", "Spanish"],
        },
    } as const;
}

export function getMetaKeywords(keywords?: readonly string[]) {
    const allKeywords = keywords?.length ? keywords : siteConfig.seo.keywords;

    return allKeywords.join(", ");
}

export const importantSeoPages = [
    {
        title: "Tax Preparation Services in Miami, FL",
        href: "/services/tax-preparation",
        keyword: "tax preparation Miami FL",
    },
    {
        title: "Bookkeeping Services in Miami, FL",
        href: "/services/bookkeeping",
        keyword: "bookkeeping services Miami",
    },
    {
        title: "Payroll Services in Miami, FL",
        href: "/services/payroll",
        keyword: "payroll services Miami FL",
    },
    {
        title: "Business Tax Services in Miami, FL",
        href: "/services/business-tax-services",
        keyword: "business tax services Miami",
    },
    {
        title: "Small Business Accounting in Miami, FL",
        href: "/services/small-business-accounting",
        keyword: "small business accounting Miami",
    },
    {
        title: "Tax & Accounting Services in Miami, FL",
        href: "/locations/miami-fl",
        keyword: "tax and accounting services Miami FL",
    },
] as const;