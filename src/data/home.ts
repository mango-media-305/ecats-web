import {
    BadgeCheck,
    BarChart3,
    BookOpenCheck,
    BriefcaseBusiness,
    Building2,
    Calculator,
    CheckCircle2,
    ClipboardCheck,
    Clock3,
    FileCheck2,
    FileText,
    Handshake,
    Languages,
    Landmark,
    LineChart,
    Mail,
    MapPin,
    Phone,
    ReceiptText,
    Send,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    UsersRound,
    WalletCards,
} from "@lucide/astro";

import { siteConfig } from "./site";
import { getFeaturedServices } from "./services";
import { getFeaturedIndustries } from "./industries";
import { getPrimaryServiceAreas } from "./locations";
import { homepageFaqs } from "./faqs";

export const homeHero = {
    eyebrow: "Miami Tax & Accounting Office",
    title: "Tax & Accounting Services in Miami, FL",
    highlightedText: "clear numbers, confident decisions",
    description:
        "East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses across Miami-Dade County and nearby South Florida communities.",
    primaryCta: {
        label: "Contact Our Office",
        href: "/contact",
        icon: Send,
    },
    secondaryCta: {
        label: siteConfig.contact.phone,
        href: siteConfig.contact.phoneHref,
        icon: Phone,
    },
    tertiaryCta: {
        label: siteConfig.contact.email,
        href: siteConfig.contact.emailHref,
        icon: Mail,
    },
    trustPoints: [
        {
            label: "Miami-based office",
            icon: MapPin,
        },
        {
            label: "English & Spanish support",
            icon: Languages,
        },
        {
            label: "Individuals & businesses",
            icon: UsersRound,
        },
    ],
    dashboardCards: [
        {
            label: "Core Services",
            value: "Taxes",
            detail: "Bookkeeping · Payroll",
            icon: Calculator,
        },
        {
            label: "Service Area",
            value: "Miami-Dade",
            detail: "Serving nearby South Florida areas",
            icon: MapPin,
        },
        {
            label: "Office Hours",
            value: "Mon–Fri",
            detail: "9AM–5PM",
            icon: Clock3,
        },
    ],
} as const;

export const homeTrustBar = [
    {
        title: "Tax Preparation",
        description: "Individual and business tax support.",
        icon: ReceiptText,
    },
    {
        title: "Bookkeeping",
        description: "Cleaner records and better organization.",
        icon: BookOpenCheck,
    },
    {
        title: "Payroll",
        description: "Payroll support for local employers.",
        icon: WalletCards,
    },
    {
        title: "Business Accounting",
        description: "Support for Miami business owners.",
        icon: BriefcaseBusiness,
    },
] as const;

export const homeStats = [
    {
        value: "Miami",
        label: "Based in the heart of Miami",
        icon: MapPin,
    },
    {
        value: "EN/ES",
        label: "Bilingual client support",
        icon: Languages,
    },
    {
        value: "Both",
        label: "Individuals and businesses",
        icon: UsersRound,
    },
    {
        value: "Year-round",
        label: "Support beyond tax season",
        icon: ShieldCheck,
    },
] as const;

export const homeServicesSection = {
    eyebrow: "Core Services",
    title: "Tax, bookkeeping, and payroll support built around clarity.",
    description:
        "Whether you are filing personal taxes, managing a business, cleaning up your books, or organizing payroll, East Coast Accounting & Tax Services helps you move forward with better financial organization.",
    services: getFeaturedServices(),
    cta: {
        label: "View All Services",
        href: "/services",
    },
} as const;

export const homeWhyChooseUs = {
    eyebrow: "Why Choose Us",
    title: "A local Miami office focused on organization, accuracy, and practical support.",
    description:
        "Clients need more than forms and deadlines. They need a team that helps them understand what is needed, stay organized, and feel supported throughout the process.",
    items: [
        {
            title: "Local Miami expertise",
            description:
                "Based on SW 8th Street in Miami, our office understands the needs of local individuals, families, entrepreneurs, and small businesses.",
            icon: MapPin,
        },
        {
            title: "Support in English and Spanish",
            description:
                "We provide bilingual support so clients can ask questions, review information, and move through the process with more confidence.",
            icon: Languages,
        },
        {
            title: "Services for individuals and businesses",
            description:
                "From personal tax preparation to bookkeeping, payroll, and business tax support, our office serves both personal and professional needs.",
            icon: UsersRound,
        },
        {
            title: "Year-round financial organization",
            description:
                "We help clients stay organized beyond tax season with bookkeeping, payroll, accounting support, and tax-related guidance.",
            icon: Clock3,
        },
    ],
} as const;

export const homeProcess = {
    eyebrow: "Our Process",
    title: "A clear process from first contact to financial clarity.",
    description:
        "We keep the process simple, organized, and easy to follow so you know what information is needed and what comes next.",
    steps: [
        {
            number: "01",
            title: "Contact our office",
            description:
                "Start with the contact form, a phone call, or an email. Tell us what type of tax, bookkeeping, payroll, or accounting help you need.",
            icon: Send,
        },
        {
            number: "02",
            title: "Review your needs",
            description:
                "We identify whether you need individual tax help, business tax services, bookkeeping, payroll support, or ongoing accounting assistance.",
            icon: ClipboardCheck,
        },
        {
            number: "03",
            title: "Organize documents",
            description:
                "We guide you through the documents, records, and information needed to move forward with a cleaner and more efficient process.",
            icon: FileCheck2,
        },
        {
            number: "04",
            title: "Move forward with confidence",
            description:
                "Our office helps prepare, organize, and support the work needed so you can make clearer financial decisions.",
            icon: BadgeCheck,
        },
    ],
} as const;

export const homeIndustriesSection = {
    eyebrow: "Who We Help",
    title: "Accounting support for Miami individuals, professionals, and local businesses.",
    description:
        "East Coast Accounting & Tax Services supports a wide range of clients, from families and self-employed professionals to local businesses that need bookkeeping, payroll, and tax support.",
    industries: getFeaturedIndustries(),
    cta: {
        label: "Explore Industries",
        href: "/industries",
    },
} as const;

export const homeLocalSeoSection = {
    eyebrow: "Miami & South Florida",
    title: "Serving Miami-Dade County with tax, bookkeeping, payroll, and accounting services.",
    description:
        "East Coast Accounting & Tax Services is located in Miami, FL and serves individuals and businesses across Miami-Dade County, including nearby communities such as West Miami, Coral Gables, Doral, Kendall, Hialeah, Homestead, Brickell, South Miami, and surrounding South Florida areas.",
    officeCard: {
        title: "Visit Our Office in Miami",
        address: siteConfig.address.full,
        hours: siteConfig.hours.label,
        phone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        mapHref:
            "https://www.google.com/maps/search/?api=1&query=6874%20SW%208th%20St%2C%20Miami%2C%20FL%2033144",
        icon: MapPin,
    },
    serviceAreas: getPrimaryServiceAreas(),
    highlights: [
        {
            title: "Miami-Dade focused",
            description:
                "The website will be structured around high-intent local searches for tax preparation, bookkeeping, payroll, and accounting services in Miami and nearby areas.",
            icon: Landmark,
        },
        {
            title: "Built for local SEO",
            description:
                "Service pages, location pages, FAQ content, internal links, schema, and metadata will work together to support stronger search visibility.",
            icon: LineChart,
        },
        {
            title: "Conversion-focused",
            description:
                "Every major page will guide visitors toward the contact form, with phone and email as strong secondary calls to action.",
            icon: Handshake,
        },
    ],
} as const;

export const homeFinancialClarity = {
    eyebrow: "Financial Clarity",
    title: "Make your numbers easier to understand, manage, and act on.",
    description:
        "Clean financial organization helps clients reduce stress, prepare for deadlines, and understand what is happening in their personal or business finances.",
    cards: [
        {
            title: "Cleaner records",
            description:
                "Organized tax documents, bookkeeping records, payroll information, and accounting details help reduce confusion.",
            icon: FileText,
        },
        {
            title: "Better visibility",
            description:
                "Business owners can better understand income, expenses, payroll, and overall financial activity.",
            icon: BarChart3,
        },
        {
            title: "Stronger preparation",
            description:
                "Being organized throughout the year can make tax season and business reporting easier to manage.",
            icon: TrendingUp,
        },
    ],
} as const;

export const homeFaqSection = {
    eyebrow: "Common Questions",
    title: "Questions about our Miami tax and accounting services?",
    description:
        "Here are helpful answers for individuals and businesses looking for tax preparation, bookkeeping, payroll, and accounting support in Miami.",
    faqs: homepageFaqs,
    cta: {
        label: "View All FAQs",
        href: "/faq",
    },
} as const;

export const homeFinalCta = {
    eyebrow: "Ready to Get Organized?",
    title: "Contact East Coast Accounting & Tax Services today.",
    description:
        "Use the contact form to tell us what you need help with. Our Miami office supports individuals and businesses with taxes, bookkeeping, payroll, and accounting services.",
    primaryCta: {
        label: "Contact Our Office",
        href: "/contact",
        icon: Send,
    },
    secondaryCta: {
        label: "Call Now",
        href: siteConfig.contact.phoneHref,
        icon: Phone,
    },
    tertiaryCta: {  
        label: "Email Us",
        href: siteConfig.contact.emailHref,
        icon: Mail,
    },
    supportingPoints: [
        {
            label: "Located in Miami, FL",
            icon: MapPin,
        },
        {
            label: "English & Spanish support",
            icon: Languages,
        },
        {
            label: "Individuals and businesses",
            icon: BriefcaseBusiness,
        },
    ],
} as const;

export const homeMeta = {
    title: "Tax & Accounting Services in Miami, FL",
    description:
        "East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Miami, FL and South Florida.",
    image: "/images/og/og-home.webp",
    keywords: [
        "tax preparation Miami FL",
        "accounting services Miami",
        "bookkeeping services Miami",
        "payroll services Miami FL",
        "business tax services Miami",
        "small business accounting Miami",
        "tax accountant Miami",
        "Miami-Dade accounting office",
    ],
} as const;

export const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#homepage`,
    url: siteConfig.url,
    name: homeMeta.title,
    description: homeMeta.description,
    isPartOf: {
        "@id": `${siteConfig.url}/#website`,
    },
    about: {
        "@id": `${siteConfig.url}/#business`,
    },
    mainEntity: {
        "@id": `${siteConfig.url}/#business`,
    },
} as const;

export const homePageData = {
    meta: homeMeta,
    hero: homeHero,
    trustBar: homeTrustBar,
    stats: homeStats,
    services: homeServicesSection,
    whyChooseUs: homeWhyChooseUs,
    process: homeProcess,
    industries: homeIndustriesSection,
    localSeo: homeLocalSeoSection,
    financialClarity: homeFinancialClarity,
    faqs: homeFaqSection,
    finalCta: homeFinalCta,
    schema: homeStructuredData,
} as const;

export type HomePageData = typeof homePageData;