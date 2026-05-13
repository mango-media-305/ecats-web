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
        image: "/images/locations/miami-fl-og.webp",
        hero: "/images/locations/miami-fl.webp",
        icon: MapPin,
        primaryKeyword: "tax and accounting services Miami FL",
        title: "Tax & Accounting Services in Miami, FL",
        seoTitle: "Tax & Accounting Services in Miami, FL",
        seoDescription:
            "East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Miami, FL.",
        summary:
            "Tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Miami, FL.",
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
        serviceIds: [
            "tax-preparation",
            "bookkeeping",
            "payroll",
            "business-tax-services",
            "accounting",
        ],
        highlights: [
            "Miami-based tax and accounting office",
            "Support for individuals and businesses",
            "Bilingual English and Spanish assistance",
            "Convenient location near SW 8th Street",
        ],
        benefits: [
            "Work with a local Miami accounting office",
            "Stay better prepared for tax season",
            "Keep personal and business records organized",
            "Get support for taxes, bookkeeping, payroll, and accounting",
            "Receive bilingual assistance in English and Spanish",
        ],
        process: [
            "Tell us whether you need individual or business support.",
            "We review your tax, bookkeeping, payroll, or accounting needs.",
            "We help identify the right next step for your situation.",
            "You receive clear guidance from our Miami office.",
        ],
        faqs: [
            {
                question: "Do you provide tax and accounting services in Miami, FL?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Miami, FL.",
            },
            {
                question: "Where is your Miami office located?",
                answer:
                    `Our office is located at ${siteConfig.address.full}.`,
            },
            {
                question: "Do you help both individuals and businesses?",
                answer:
                    "Yes. Our office supports individuals, families, self-employed professionals, and local businesses.",
            },
        ],
        relatedLocations: [
            "west-miami-fl",
            "coral-gables-fl",
            "brickell-fl",
        ],
    },
    {
        id: "west-miami-fl",
        city: "West Miami",
        state: "FL",
        county: "Miami-Dade County",
        slug: "west-miami-fl",
        href: "/locations/west-miami-fl",
        image: "/images/locations/west-miami-fl-og.webp",
        hero: "/images/locations/west-miami-fl.webp",
        icon: MapPin,
        primaryKeyword: "tax preparation West Miami FL",
        title: "Tax Preparation & Accounting Services in West Miami, FL",
        seoTitle: "Tax Preparation & Accounting Services in West Miami, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services near West Miami, FL for individuals and businesses.",
        summary:
            "Nearby tax preparation, bookkeeping, payroll, and accounting support for West Miami residents and businesses.",
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
        serviceIds: [
            "tax-preparation",
            "bookkeeping",
            "payroll",
            "accounting",
        ],
        highlights: [
            "Convenient support near West Miami",
            "Services for individuals and local businesses",
            "English and Spanish support",
            "Year-round tax and accounting guidance",
        ],
        benefits: [
            "Access accounting support near West Miami",
            "Prepare personal and business taxes with better organization",
            "Keep financial records easier to manage",
            "Support bookkeeping and payroll needs throughout the year",
            "Communicate with a bilingual Miami-based office",
        ],
        process: [
            "Tell us what kind of tax or accounting support you need.",
            "We review your current records, documents, or business situation.",
            "We help organize the service that best fits your needs.",
            "You receive clear next steps from our nearby Miami office.",
        ],
        faqs: [
            {
                question: "Do you serve clients in West Miami, FL?",
                answer:
                    "Yes. East Coast Accounting & Tax Services is located near West Miami and supports individuals and businesses in the area.",
            },
            {
                question: "Can West Miami businesses get bookkeeping support?",
                answer:
                    "Yes. Our office helps local businesses with bookkeeping, payroll, business tax preparation, and accounting support.",
            },
            {
                question: "Do you provide tax help in Spanish?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides bilingual support in English and Spanish.",
            },
        ],
        relatedLocations: [
            "miami-fl",
            "coral-gables-fl",
            "south-miami-fl",
        ],
    },
    {
        id: "coral-gables-fl",
        city: "Coral Gables",
        state: "FL",
        county: "Miami-Dade County",
        slug: "coral-gables-fl",
        href: "/locations/coral-gables-fl",
        image: "/images/locations/coral-gables-fl-og.webp",
        hero: "/images/locations/coral-gables-fl.webp",
        icon: Building2,
        primaryKeyword: "accounting services Coral Gables FL",
        title: "Tax & Accounting Services in Coral Gables, FL",
        seoTitle: "Tax & Accounting Services in Coral Gables, FL",
        seoDescription:
            "Professional tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses near Coral Gables, FL.",
        summary:
            "Tax, bookkeeping, payroll, and accounting support for professionals, families, and businesses near Coral Gables.",
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
        serviceIds: [
            "tax-preparation",
            "business-tax-services",
            "bookkeeping",
            "payroll",
            "accounting",
        ],
        highlights: [
            "Accounting support near Coral Gables",
            "Business tax and bookkeeping services",
            "Support for professionals and local businesses",
            "Bilingual assistance available",
        ],
        benefits: [
            "Support personal and business financial needs",
            "Prepare cleaner tax and business records",
            "Keep bookkeeping and payroll tasks better organized",
            "Work with a nearby Miami accounting office",
            "Receive clear communication in English or Spanish",
        ],
        process: [
            "Tell us whether you need personal, professional, or business support.",
            "We review your tax, bookkeeping, payroll, or accounting needs.",
            "We help connect you with the right service.",
            "You receive next steps from our office near Coral Gables.",
        ],
        faqs: [
            {
                question: "Do you provide accounting services near Coral Gables?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports individuals, professionals, and businesses near Coral Gables with tax and accounting services.",
            },
            {
                question: "Can you help Coral Gables businesses with bookkeeping?",
                answer:
                    "Yes. Our office provides bookkeeping, payroll, business tax services, and accounting support for local businesses.",
            },
            {
                question: "Do you help both individuals and businesses?",
                answer:
                    "Yes. We support both individual taxpayers and business clients.",
            },
        ],
        relatedLocations: [
            "miami-fl",
            "west-miami-fl",
            "south-miami-fl",
        ],
    },
    {
        id: "doral-fl",
        city: "Doral",
        state: "FL",
        county: "Miami-Dade County",
        slug: "doral-fl",
        href: "/locations/doral-fl",
        image: "/images/locations/doral-fl-og.webp",
        hero: "/images/locations/doral-fl.webp",
        icon: Landmark,
        primaryKeyword: "business tax services Doral FL",
        title: "Business Tax, Bookkeeping & Payroll Services in Doral, FL",
        seoTitle: "Business Tax, Bookkeeping & Payroll Services in Doral, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for Doral, FL businesses, professionals, and families.",
        summary:
            "Business tax, bookkeeping, payroll, and accounting support for Doral companies, professionals, and families.",
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
        serviceIds: [
            "business-tax-services",
            "bookkeeping",
            "payroll",
            "small-business-accounting",
            "tax-preparation",
        ],
        highlights: [
            "Support for Doral business owners",
            "Payroll and bookkeeping help",
            "Business tax preparation support",
            "English and Spanish service",
        ],
        benefits: [
            "Support business tax preparation needs",
            "Keep bookkeeping and payroll better organized",
            "Help business owners understand records more clearly",
            "Prepare cleaner documentation for tax season",
            "Work with a bilingual Miami-based accounting office",
        ],
        process: [
            "Tell us about your Doral business or personal financial needs.",
            "We review your tax, payroll, bookkeeping, or accounting situation.",
            "We recommend the right service based on your records and goals.",
            "You receive practical next steps for better organization.",
        ],
        faqs: [
            {
                question: "Do you provide business tax services for Doral businesses?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports Doral businesses with business tax preparation, bookkeeping, payroll, and accounting services.",
            },
            {
                question: "Can you help with payroll for a Doral company?",
                answer:
                    "Yes. Our office provides payroll support for local employers, including businesses in Doral and nearby communities.",
            },
            {
                question: "Do you help with bookkeeping cleanup?",
                answer:
                    "Yes. Our office can help review and organize business records so they are easier to manage.",
            },
        ],
        relatedLocations: [
            "miami-fl",
            "hialeah-fl",
            "west-miami-fl",
        ],
    },
    {
        id: "kendall-fl",
        city: "Kendall",
        state: "FL",
        county: "Miami-Dade County",
        slug: "kendall-fl",
        href: "/locations/kendall-fl",
        image: "/images/locations/kendall-fl-og.webp",
        hero: "/images/locations/kendall-fl.webp",
        icon: MapPin,
        primaryKeyword: "tax preparation Kendall FL",
        title: "Tax Preparation & Accounting Services in Kendall, FL",
        seoTitle: "Tax Preparation & Accounting Services in Kendall, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services for individuals, families, and businesses in Kendall, FL.",
        summary:
            "Tax preparation, bookkeeping, payroll, and accounting support for Kendall individuals, families, and businesses.",
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
        serviceIds: [
            "tax-preparation",
            "bookkeeping",
            "payroll",
            "accounting",
            "irs-tax-help",
        ],
        highlights: [
            "Tax help for Kendall individuals and families",
            "Bookkeeping for local businesses",
            "Payroll support for employers",
            "Bilingual English and Spanish assistance",
        ],
        benefits: [
            "Prepare personal and business taxes with less stress",
            "Keep household, self-employed, or business records organized",
            "Get help with bookkeeping and payroll needs",
            "Receive support in English or Spanish",
            "Work with a Miami-based office serving Kendall clients",
        ],
        process: [
            "Tell us whether you need personal, family, or business support.",
            "We review your tax documents, records, or payroll needs.",
            "We help organize the next step based on your situation.",
            "You receive clear support from our Miami office.",
        ],
        faqs: [
            {
                question: "Do you provide tax preparation for Kendall residents?",
                answer:
                    "Yes. East Coast Accounting & Tax Services helps Kendall residents and families with tax preparation and related accounting support.",
            },
            {
                question: "Can Kendall businesses get bookkeeping and payroll support?",
                answer:
                    "Yes. Our office supports Kendall businesses with bookkeeping, payroll, tax preparation, and accounting services.",
            },
            {
                question: "Can you help with IRS tax questions?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides IRS tax help and guidance for clients who need support understanding their next steps.",
            },
        ],
        relatedLocations: [
            "south-miami-fl",
            "coral-gables-fl",
            "homestead-fl",
        ],
    },
    {
        id: "hialeah-fl",
        city: "Hialeah",
        state: "FL",
        county: "Miami-Dade County",
        slug: "hialeah-fl",
        href: "/locations/hialeah-fl",
        image: "/images/locations/hialeah-fl-og.webp",
        hero: "/images/locations/hialeah-fl.webp",
        icon: ReceiptText,
        primaryKeyword: "tax services Hialeah FL",
        title: "Tax, Bookkeeping & Payroll Services in Hialeah, FL",
        seoTitle: "Tax, Bookkeeping & Payroll Services in Hialeah, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Hialeah, FL.",
        summary:
            "Bilingual tax, bookkeeping, payroll, and accounting support for Hialeah individuals, entrepreneurs, and businesses.",
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
        serviceIds: [
            "tax-preparation",
            "business-tax-services",
            "bookkeeping",
            "payroll",
            "accounting",
        ],
        highlights: [
            "English and Spanish tax support",
            "Services for individuals and businesses",
            "Support for entrepreneurs and small businesses",
            "Year-round tax and accounting guidance",
        ],
        benefits: [
            "Receive bilingual tax and accounting support",
            "Organize business and personal financial records",
            "Get help with bookkeeping, payroll, and tax preparation",
            "Support entrepreneurs and small business owners",
            "Prepare for tax season with clearer documents",
        ],
        process: [
            "Tell us what tax or accounting support you need.",
            "We review your documents, business records, or payroll information.",
            "We help identify the best service for your situation.",
            "You receive clear bilingual support from our office.",
        ],
        faqs: [
            {
                question: "Do you provide tax services for Hialeah clients?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports Hialeah individuals, families, entrepreneurs, and businesses with tax and accounting services.",
            },
            {
                question: "Do you speak Spanish?",
                answer:
                    "Yes. Our office provides bilingual support in English and Spanish.",
            },
            {
                question: "Can you help Hialeah small businesses?",
                answer:
                    "Yes. Our office supports small businesses with bookkeeping, payroll, business tax preparation, and accounting support.",
            },
        ],
        relatedLocations: [
            "doral-fl",
            "miami-fl",
            "west-miami-fl",
        ],
    },
    {
        id: "brickell-fl",
        city: "Brickell",
        state: "FL",
        county: "Miami-Dade County",
        slug: "brickell-fl",
        href: "/locations/brickell-fl",
        image: "/images/locations/brickell-fl-og.webp",
        hero: "/images/locations/brickell-fl.webp",
        icon: Building2,
        primaryKeyword: "accounting services Brickell Miami",
        title: "Tax & Accounting Services in Brickell, Miami",
        seoTitle: "Tax & Accounting Services in Brickell, Miami",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for professionals, individuals, and businesses in Brickell, Miami.",
        summary:
            "Tax, bookkeeping, payroll, and accounting support for Brickell professionals, entrepreneurs, and businesses.",
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
        serviceIds: [
            "tax-preparation",
            "business-tax-services",
            "bookkeeping",
            "payroll",
            "small-business-accounting",
        ],
        highlights: [
            "Support for professionals and entrepreneurs",
            "Business tax and accounting help",
            "Bookkeeping and payroll support",
            "Miami-based bilingual office",
        ],
        benefits: [
            "Support busy professionals and entrepreneurs",
            "Organize business tax and bookkeeping needs",
            "Keep payroll and accounting tasks easier to manage",
            "Prepare documents for tax season",
            "Work with a Miami-based bilingual office",
        ],
        process: [
            "Tell us whether you need personal, professional, or business support.",
            "We review your tax, bookkeeping, payroll, or accounting needs.",
            "We help determine the service that fits your situation.",
            "You receive clear next steps from our Miami office.",
        ],
        faqs: [
            {
                question: "Do you provide accounting services for Brickell professionals?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports Brickell professionals, entrepreneurs, and businesses with tax and accounting services.",
            },
            {
                question: "Can Brickell businesses get bookkeeping support?",
                answer:
                    "Yes. Our office helps businesses with bookkeeping, payroll, business tax preparation, and accounting support.",
            },
            {
                question: "Do you support self-employed professionals?",
                answer:
                    "Yes. Our office supports self-employed professionals, entrepreneurs, and independent workers.",
            },
        ],
        relatedLocations: [
            "miami-fl",
            "coral-gables-fl",
            "south-miami-fl",
        ],
    },
    {
        id: "homestead-fl",
        city: "Homestead",
        state: "FL",
        county: "Miami-Dade County",
        slug: "homestead-fl",
        href: "/locations/homestead-fl",
        image: "/images/locations/homestead-fl-og.webp",
        hero: "/images/locations/homestead-fl.webp",
        icon: WalletCards,
        primaryKeyword: "tax preparation Homestead FL",
        title: "Tax Preparation & Accounting Services in Homestead, FL",
        seoTitle: "Tax Preparation & Accounting Services in Homestead, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Homestead and South Miami-Dade.",
        summary:
            "Tax preparation, bookkeeping, payroll, and accounting support for Homestead and South Miami-Dade clients.",
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
        serviceIds: [
            "tax-preparation",
            "bookkeeping",
            "payroll",
            "business-tax-services",
            "accounting",
        ],
        highlights: [
            "Support for Homestead and South Miami-Dade",
            "Tax help for individuals and businesses",
            "Bookkeeping and payroll support",
            "English and Spanish assistance",
        ],
        benefits: [
            "Support individuals and businesses in South Miami-Dade",
            "Prepare tax documents with better organization",
            "Keep bookkeeping and payroll records easier to manage",
            "Get help in English or Spanish",
            "Work with a Miami-based accounting office",
        ],
        process: [
            "Tell us about your tax or business accounting needs.",
            "We review your documents, records, or payroll details.",
            "We help match your needs with the right service.",
            "You receive practical next steps from our office.",
        ],
        faqs: [
            {
                question: "Do you serve clients in Homestead, FL?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports Homestead and South Miami-Dade clients with tax preparation, bookkeeping, payroll, and accounting services.",
            },
            {
                question: "Can Homestead businesses get payroll support?",
                answer:
                    "Yes. Our office provides payroll support for local employers and small businesses.",
            },
            {
                question: "Do you help individuals with tax preparation?",
                answer:
                    "Yes. We help individual taxpayers, families, self-employed professionals, and business owners.",
            },
        ],
        relatedLocations: [
            "kendall-fl",
            "south-miami-fl",
            "miami-fl",
        ],
    },
    {
        id: "south-miami-fl",
        city: "South Miami",
        state: "FL",
        county: "Miami-Dade County",
        slug: "south-miami-fl",
        href: "/locations/south-miami-fl",
        image: "/images/locations/south-miami-fl-og.webp",
        hero: "/images/locations/south-miami-fl.webp",
        icon: Calculator,
        primaryKeyword: "accounting services South Miami FL",
        title: "Accounting & Tax Services in South Miami, FL",
        seoTitle: "Accounting & Tax Services in South Miami, FL",
        seoDescription:
            "Accounting, tax preparation, bookkeeping, and payroll services near South Miami, FL for individuals and businesses.",
        summary:
            "Accounting, tax preparation, bookkeeping, and payroll support for individuals and businesses near South Miami.",
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
        serviceIds: [
            "accounting",
            "tax-preparation",
            "bookkeeping",
            "payroll",
            "irs-tax-help",
        ],
        highlights: [
            "Support near South Miami",
            "Tax and accounting services for individuals",
            "Small business bookkeeping and payroll",
            "Bilingual English and Spanish service",
        ],
        benefits: [
            "Get accounting support near South Miami",
            "Organize personal, family, or business tax needs",
            "Support bookkeeping and payroll in one place",
            "Prepare for tax season with better records",
            "Receive bilingual help from a Miami-based office",
        ],
        process: [
            "Tell us what type of accounting or tax support you need.",
            "We review your records, documents, or payroll situation.",
            "We help connect your needs with the right service.",
            "You receive organized next steps from our office.",
        ],
        faqs: [
            {
                question: "Do you provide accounting services near South Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports individuals, families, and businesses near South Miami with tax and accounting services.",
            },
            {
                question: "Can you help with bookkeeping and payroll?",
                answer:
                    "Yes. Our office provides bookkeeping and payroll support for local businesses and employers.",
            },
            {
                question: "Do you offer IRS tax help?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides IRS tax help for clients who need support understanding their next steps.",
            },
        ],
        relatedLocations: [
            "coral-gables-fl",
            "kendall-fl",
            "west-miami-fl",
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
        "south-miami-fl",
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

export const locationPageCta = {
    eyebrow: "Need local tax or accounting support?",
    title: "Let’s help you organize your next step.",
    description:
        "Contact East Coast Accounting & Tax Services for tax preparation, bookkeeping, payroll, and accounting support near Miami and surrounding South Florida communities.",
    primaryCta: {
        label: "Contact Our Office",
        href: "/contact",
    },
    secondaryCta: {
        label: siteConfig.contact.phone,
        href: siteConfig.contact.phoneHref,
    },
} as const;

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

export function getRelatedServiceAreas(area: ServiceArea) {
    return area.relatedLocations
        .map((id) => getServiceAreaById(id))
        .filter(Boolean);
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

export function getLocationBreadcrumbSchema(area: ServiceArea) {
    const breadcrumbs = getServiceAreaBreadcrumbs(area);

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${siteConfig.url.replace(/\/$/, "")}${item.href === "/" ? "" : item.href}`,
        })),
    };
}

export function getLocationFaqSchema(area: ServiceArea) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: area.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}