import {
    Building2,
    Calculator,
    Landmark,
    MapPin,
    ReceiptText,
    WalletCards,
} from "@lucide/astro";

import { siteConfig } from "./site";

export const serviceAreas = [
    {
        id: "miami-fl",
        city: "Miami",
        state: "FL",
        county: "Miami-Dade County",
        slug: "miami-fl",
        href: "/locations/miami-fl",
        icon: MapPin,
        primaryKeyword: "tax and accounting services Miami FL",
        title: "Tax & Accounting Services in Miami, FL",
        seoTitle: "Tax & Accounting Services in Miami, FL",
        seoDescription:
            "East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Miami, FL.",
        description:
            "East Coast Accounting & Tax Services is based in Miami and supports individuals, families, self-employed professionals, and local businesses with tax preparation, bookkeeping, payroll, and accounting services.",
        intro:
            "From individual tax preparation to small business bookkeeping and payroll support, our Miami office helps clients stay organized, prepared, and confident throughout the year.",
        nearbyAreas: [
            "Little Havana",
            "West Miami",
            "Coral Way",
            "Flagami",
            "Westchester",
            "Brickell",
            "Downtown Miami",
            "Coconut Grove",
        ],
        services: [
            "Tax Preparation",
            "Bookkeeping",
            "Payroll Services",
            "Business Tax Services",
            "Accounting Support",
        ],
        highlights: [
            "Miami-based tax and accounting office",
            "Support for individuals and businesses",
            "Bilingual English and Spanish assistance",
            "Convenient location near SW 8th Street",
        ],
    },
    {
        id: "west-miami-fl",
        city: "West Miami",
        state: "FL",
        county: "Miami-Dade County",
        slug: "west-miami-fl",
        href: "/locations/west-miami-fl",
        icon: MapPin,
        primaryKeyword: "tax preparation West Miami FL",
        title: "Tax Preparation & Accounting Services in West Miami, FL",
        seoTitle: "Tax Preparation & Accounting Services in West Miami, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services near West Miami, FL for individuals and businesses.",
        description:
            "Located close to West Miami, East Coast Accounting & Tax Services helps nearby residents and business owners with practical tax, bookkeeping, payroll, and accounting support.",
        intro:
            "Whether you need individual tax help, business tax preparation, cleaner books, or payroll support, our office is conveniently located for clients in West Miami and surrounding neighborhoods.",
        nearbyAreas: [
            "Coral Way",
            "Flagami",
            "Little Havana",
            "Westchester",
            "Miami",
            "Coral Gables",
        ],
        services: [
            "Tax Preparation",
            "Bookkeeping",
            "Payroll Services",
            "Accounting Support",
        ],
        highlights: [
            "Convenient support near West Miami",
            "Services for individuals and local businesses",
            "English and Spanish support",
            "Year-round tax and accounting guidance",
        ],
    },
    {
        id: "coral-gables-fl",
        city: "Coral Gables",
        state: "FL",
        county: "Miami-Dade County",
        slug: "coral-gables-fl",
        href: "/locations/coral-gables-fl",
        icon: Building2,
        primaryKeyword: "accounting services Coral Gables FL",
        title: "Tax & Accounting Services in Coral Gables, FL",
        seoTitle: "Tax & Accounting Services in Coral Gables, FL",
        seoDescription:
            "Professional tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses near Coral Gables, FL.",
        description:
            "East Coast Accounting & Tax Services supports Coral Gables professionals, families, and businesses with tax preparation, bookkeeping, payroll, and accounting services.",
        intro:
            "Coral Gables clients can work with our nearby Miami accounting office for clear, organized support with taxes, business records, payroll, and year-round accounting needs.",
        nearbyAreas: [
            "Miracle Mile",
            "Douglas",
            "Coconut Grove",
            "South Miami",
            "West Miami",
            "Miami",
        ],
        services: [
            "Tax Preparation",
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Accounting Services",
        ],
        highlights: [
            "Accounting support near Coral Gables",
            "Business tax and bookkeeping services",
            "Support for professionals and local businesses",
            "Bilingual assistance available",
        ],
    },
    {
        id: "doral-fl",
        city: "Doral",
        state: "FL",
        county: "Miami-Dade County",
        slug: "doral-fl",
        href: "/locations/doral-fl",
        icon: Landmark,
        primaryKeyword: "business tax services Doral FL",
        title: "Business Tax, Bookkeeping & Payroll Services in Doral, FL",
        seoTitle: "Business Tax, Bookkeeping & Payroll Services in Doral, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for Doral, FL businesses, professionals, and families.",
        description:
            "East Coast Accounting & Tax Services helps Doral business owners, professionals, and residents with tax preparation, bookkeeping, payroll, and accounting support.",
        intro:
            "Doral has a strong business community, and many local companies need reliable support with business taxes, bookkeeping, payroll, and financial organization. Our Miami office provides practical help for these needs.",
        nearbyAreas: [
            "Medley",
            "Sweetwater",
            "Miami Springs",
            "Virginia Gardens",
            "Fontainebleau",
            "Westchester",
        ],
        services: [
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Small Business Accounting",
            "Tax Preparation",
        ],
        highlights: [
            "Support for Doral business owners",
            "Payroll and bookkeeping help",
            "Business tax preparation support",
            "English and Spanish service",
        ],
    },
    {
        id: "kendall-fl",
        city: "Kendall",
        state: "FL",
        county: "Miami-Dade County",
        slug: "kendall-fl",
        href: "/locations/kendall-fl",
        icon: MapPin,
        primaryKeyword: "tax preparation Kendall FL",
        title: "Tax Preparation & Accounting Services in Kendall, FL",
        seoTitle: "Tax Preparation & Accounting Services in Kendall, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services for individuals, families, and businesses in Kendall, FL.",
        description:
            "East Coast Accounting & Tax Services supports Kendall residents, families, self-employed professionals, and businesses with tax preparation, bookkeeping, payroll, and accounting services.",
        intro:
            "From personal tax preparation to small business accounting, clients in Kendall can rely on our Miami office for organized, bilingual support.",
        nearbyAreas: [
            "The Hammocks",
            "Kendale Lakes",
            "Sunset",
            "Westchester",
            "South Miami",
            "Pinecrest",
        ],
        services: [
            "Tax Preparation",
            "Bookkeeping",
            "Payroll Services",
            "Accounting Services",
            "IRS Tax Help",
        ],
        highlights: [
            "Tax help for Kendall individuals and families",
            "Bookkeeping for local businesses",
            "Payroll support for employers",
            "Bilingual English and Spanish assistance",
        ],
    },
    {
        id: "hialeah-fl",
        city: "Hialeah",
        state: "FL",
        county: "Miami-Dade County",
        slug: "hialeah-fl",
        href: "/locations/hialeah-fl",
        icon: ReceiptText,
        primaryKeyword: "tax services Hialeah FL",
        title: "Tax, Bookkeeping & Payroll Services in Hialeah, FL",
        seoTitle: "Tax, Bookkeeping & Payroll Services in Hialeah, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Hialeah, FL.",
        description:
            "East Coast Accounting & Tax Services provides bilingual tax and accounting support for Hialeah individuals, families, entrepreneurs, and small businesses.",
        intro:
            "Many Hialeah clients need accessible, bilingual help with taxes, bookkeeping, payroll, and business records. Our office supports both individuals and businesses with clear guidance.",
        nearbyAreas: [
            "Miami Lakes",
            "Hialeah Gardens",
            "Palm Springs North",
            "Medley",
            "Miami Springs",
            "West Little River",
        ],
        services: [
            "Tax Preparation",
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Accounting Support",
        ],
        highlights: [
            "English and Spanish tax support",
            "Services for individuals and businesses",
            "Support for entrepreneurs and small businesses",
            "Year-round tax and accounting guidance",
        ],
    },
    {
        id: "brickell-fl",
        city: "Brickell",
        state: "FL",
        county: "Miami-Dade County",
        slug: "brickell-fl",
        href: "/locations/brickell-fl",
        icon: Building2,
        primaryKeyword: "accounting services Brickell Miami",
        title: "Tax & Accounting Services in Brickell, Miami",
        seoTitle: "Tax & Accounting Services in Brickell, Miami",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for professionals, individuals, and businesses in Brickell, Miami.",
        description:
            "East Coast Accounting & Tax Services supports Brickell professionals, entrepreneurs, and businesses with tax preparation, bookkeeping, payroll, and accounting services.",
        intro:
            "Brickell professionals and business owners often need reliable financial organization, tax preparation, and accounting support. Our Miami office helps keep those needs clear and organized.",
        nearbyAreas: [
            "Downtown Miami",
            "The Roads",
            "Coral Way",
            "Coconut Grove",
            "Little Havana",
            "Edgewater",
        ],
        services: [
            "Tax Preparation",
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Small Business Accounting",
        ],
        highlights: [
            "Support for professionals and entrepreneurs",
            "Business tax and accounting help",
            "Bookkeeping and payroll support",
            "Miami-based bilingual office",
        ],
    },
    {
        id: "homestead-fl",
        city: "Homestead",
        state: "FL",
        county: "Miami-Dade County",
        slug: "homestead-fl",
        href: "/locations/homestead-fl",
        icon: WalletCards,
        primaryKeyword: "tax preparation Homestead FL",
        title: "Tax Preparation & Accounting Services in Homestead, FL",
        seoTitle: "Tax Preparation & Accounting Services in Homestead, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Homestead and South Miami-Dade.",
        description:
            "East Coast Accounting & Tax Services helps clients in Homestead and South Miami-Dade with tax preparation, bookkeeping, payroll, and accounting support.",
        intro:
            "Whether you are an individual taxpayer, self-employed professional, or local business owner in Homestead, our office can help you stay organized with taxes, payroll, and bookkeeping.",
        nearbyAreas: [
            "Florida City",
            "Naranja",
            "Princeton",
            "Cutler Bay",
            "Palmetto Bay",
            "South Miami-Dade",
        ],
        services: [
            "Tax Preparation",
            "Bookkeeping",
            "Payroll Services",
            "Business Tax Services",
            "Accounting Support",
        ],
        highlights: [
            "Support for Homestead and South Miami-Dade",
            "Tax help for individuals and businesses",
            "Bookkeeping and payroll support",
            "English and Spanish assistance",
        ],
    },
    {
        id: "south-miami-fl",
        city: "South Miami",
        state: "FL",
        county: "Miami-Dade County",
        slug: "south-miami-fl",
        href: "/locations/south-miami-fl",
        icon: Calculator,
        primaryKeyword: "accounting services South Miami FL",
        title: "Accounting & Tax Services in South Miami, FL",
        seoTitle: "Accounting & Tax Services in South Miami, FL",
        seoDescription:
            "Accounting, tax preparation, bookkeeping, and payroll services near South Miami, FL for individuals and businesses.",
        description:
            "East Coast Accounting & Tax Services supports South Miami individuals, families, and businesses with organized accounting, tax preparation, bookkeeping, and payroll services.",
        intro:
            "Our Miami-based office helps South Miami clients manage tax season, financial records, business bookkeeping, and payroll needs with clear support.",
        nearbyAreas: [
            "Coral Gables",
            "Pinecrest",
            "Kendall",
            "Coconut Grove",
            "Glenvar Heights",
            "West Miami",
        ],
        services: [
            "Accounting Services",
            "Tax Preparation",
            "Bookkeeping",
            "Payroll Services",
            "IRS Tax Help",
        ],
        highlights: [
            "Support near South Miami",
            "Tax and accounting services for individuals",
            "Small business bookkeeping and payroll",
            "Bilingual English and Spanish service",
        ],
    },
] as const;

export const primaryServiceAreas = serviceAreas.filter((area) =>
    [
        "miami-fl",
        "west-miami-fl",
        "coral-gables-fl",
        "doral-fl",
        "kendall-fl",
        "hialeah-fl",
        "homestead-fl",
        "brickell-fl",
        "south-miami-fl"
    ].includes(area.id)
);

export const homepageLocationHighlights = [
    {
        title: "Miami-based accounting office",
        description:
            "Located at 6874 SW 8th St, East Coast Accounting & Tax Services serves clients across Miami and nearby South Florida communities.",
        icon: MapPin,
    },
    {
        title: "Support across Miami-Dade",
        description:
            "From Miami and West Miami to Doral, Kendall, Hialeah, Coral Gables, and Homestead, our office supports both individuals and businesses.",
        icon: Building2,
    },
    {
        title: "Local tax, bookkeeping, and payroll help",
        description:
            "Our service-area pages are built around real client needs: taxes, bookkeeping, payroll, business tax support, and accounting guidance.",
        icon: ReceiptText,
    },
] as const;

export const locationSeoGroups = [
    {
        title: "Core Miami Service Areas",
        description:
            "Primary service areas for tax preparation, bookkeeping, payroll, and accounting support near our Miami office.",
        locations: [
            "miami-fl",
            "west-miami-fl",
            "coral-gables-fl",
            "doral-fl",
            "kendall-fl",
            "hialeah-fl",
            "homestead-fl",
        ],
    },
    {
        title: "Nearby South Florida Communities",
        description:
            "Additional communities where individuals and businesses may look for nearby tax and accounting support.",
        locations: [
            "brickell-fl",
            "south-miami-fl",
        ],
    },
] as const;

export const localBusinessLocationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteConfig.url}/locations/miami-fl#localbusiness`,
    name: siteConfig.name,
    url: `${siteConfig.url}/locations/miami-fl`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
    },
    areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: `${area.city}, ${area.state}`,
    })),
    openingHoursSpecification: siteConfig.hours.schema.map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.dayOfWeek,
        opens: item.opens,
        closes: item.closes,
    })),
} as const;

export type ServiceArea = (typeof serviceAreas)[number];
export type ServiceAreaId = ServiceArea["id"];

export function getServiceAreaById(id: string) {
    return serviceAreas.find((area) => area.id === id);
}

export function getServiceAreaBySlug(slug: string) {
    return serviceAreas.find((area) => area.slug === slug);
}

export function getPrimaryServiceAreas() {
    return primaryServiceAreas;
}

export function getServiceAreaBreadcrumbs(area: ServiceArea) {
    return [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Locations",
            href: "/locations",
        },
        {
            label: `${area.city}, ${area.state}`,
            href: area.href,
        },
    ];
}

export function getLocationPageSchema(area: ServiceArea) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteConfig.url}${area.href}#service`,
        name: area.title,
        description: area.seoDescription,
        provider: {
            "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
            "@type": "City",
            name: `${area.city}, ${area.state}`,
        },
        serviceType: area.services,
        url: `${siteConfig.url}${area.href}`,
    };
}