import {
    BadgeDollarSign,
    BriefcaseBusiness,
    Building2,
    ClipboardCheck,
    HeartPulse,
    Home,
    ReceiptText,
    Store,
    Truck,
    UsersRound,
    Utensils,
    Wrench,
} from "@lucide/astro";

import { siteConfig } from "./site";

export const industries = [
    {
        id: "small-businesses",
        title: "Small Businesses",
        shortTitle: "Small Businesses",
        slug: "small-businesses",
        href: "/industries/small-businesses",
        icon: Building2,
        eyebrow: "For Local Business Owners",
        primaryKeyword: "small business accounting Miami",
        seoTitle: "Small Business Accounting Services in Miami, FL",
        seoDescription:
            "Tax preparation, bookkeeping, payroll, and accounting services for small businesses in Miami, FL and Miami-Dade County.",
        summary:
            "Accounting, bookkeeping, payroll, and tax support for Miami small businesses that need clearer numbers and better organization.",
        description:
            "East Coast Accounting & Tax Services supports small businesses across Miami with practical tax preparation, bookkeeping, payroll, and accounting services. Whether your business is new, growing, or needs cleaner financial records, our office helps you stay organized throughout the year.",
        commonNeeds: [
            "Business tax preparation",
            "Monthly bookkeeping",
            "Payroll support",
            "Expense organization",
            "Financial record cleanup",
            "Year-round accounting guidance",
        ],
        services: [
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Small Business Accounting",
            "Tax Preparation",
        ],
        benefits: [
            "Keep business finances organized",
            "Prepare better for tax season",
            "Understand income and expenses more clearly",
            "Save time on recurring financial tasks",
            "Work with a local Miami accounting office",
        ],
        nearbyAreas:
            "Serving small businesses across Miami, West Miami, Coral Gables, Doral, Kendall, Hialeah, Homestead, and nearby Miami-Dade communities.",
        faqs: [
            {
                question: "Do you provide accounting services for small businesses in Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting support for small businesses in Miami and nearby South Florida communities.",
            },
            {
                question: "Can you help if my business books are behind?",
                answer:
                    "Yes. Our office can help review your current records and support better financial organization so your business is more prepared for tax and reporting needs.",
            },
            {
                question: "Can one office help with taxes, bookkeeping, and payroll?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports taxes, bookkeeping, payroll, and accounting, helping business owners keep related financial needs connected.",
            },
        ],
    },

    {
        id: "self-employed",
        title: "Self-Employed Professionals",
        shortTitle: "Self-Employed",
        slug: "self-employed",
        href: "/industries/self-employed",
        icon: UsersRound,
        eyebrow: "For Independent Workers",
        primaryKeyword: "tax services for self-employed Miami",
        seoTitle: "Tax & Accounting Services for Self-Employed Professionals in Miami",
        seoDescription:
            "Tax preparation, bookkeeping, and accounting support for self-employed professionals, freelancers, and independent contractors in Miami, FL.",
        summary:
            "Tax and accounting support for freelancers, independent contractors, consultants, and self-employed professionals in Miami.",
        description:
            "Self-employed professionals often need help organizing income, expenses, estimated tax questions, and business records. East Coast Accounting & Tax Services helps independent workers in Miami stay more organized with tax preparation, bookkeeping, and accounting support.",
        commonNeeds: [
            "1099 income organization",
            "Expense tracking",
            "Self-employed tax preparation",
            "Bookkeeping support",
            "Business record organization",
            "Tax document review",
        ],
        services: [
            "Tax Preparation",
            "Business Tax Services",
            "Bookkeeping",
            "Accounting Services",
            "IRS Tax Help",
        ],
        benefits: [
            "Organize income and expenses more clearly",
            "Prepare for tax deadlines with less stress",
            "Understand what records may be needed",
            "Keep personal and business finances easier to review",
            "Get bilingual support in English and Spanish",
        ],
        nearbyAreas:
            "Serving self-employed professionals across Miami-Dade County and nearby South Florida communities.",
        faqs: [
            {
                question: "Do you help self-employed professionals with tax preparation?",
                answer:
                    "Yes. East Coast Accounting & Tax Services helps self-employed professionals, freelancers, and independent contractors with tax preparation and financial organization.",
            },
            {
                question: "Can bookkeeping help if I receive 1099 income?",
                answer:
                    "Yes. Bookkeeping can help organize income, expenses, and records connected to self-employed or 1099 work.",
            },
            {
                question: "Do you provide support in Spanish?",
                answer:
                    "Yes. Our office provides bilingual tax and accounting support in English and Spanish.",
            },
        ],
    },

    {
        id: "contractors",
        title: "Contractors",
        shortTitle: "Contractors",
        slug: "contractors",
        href: "/industries/contractors",
        icon: Wrench,
        eyebrow: "For Construction & Trade Professionals",
        primaryKeyword: "accounting for contractors Miami",
        seoTitle: "Accounting & Tax Services for Contractors in Miami, FL",
        seoDescription:
            "Bookkeeping, payroll, tax preparation, and accounting support for contractors and trade professionals in Miami, FL.",
        summary:
            "Tax, bookkeeping, payroll, and accounting support for contractors, construction professionals, and trade businesses.",
        description:
            "Contractors need organized financial records for materials, labor, subcontractors, payments, expenses, and taxes. East Coast Accounting & Tax Services helps Miami contractors keep records cleaner and prepare for tax and payroll needs.",
        commonNeeds: [
            "Job-related expense organization",
            "Contractor tax preparation",
            "Payroll support",
            "Bookkeeping cleanup",
            "Income and payment tracking",
            "Business tax support",
        ],
        services: [
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Small Business Accounting",
            "Tax Preparation",
        ],
        benefits: [
            "Track business income and expenses more clearly",
            "Prepare better records for tax season",
            "Connect payroll and bookkeeping needs",
            "Support financial organization as the business grows",
            "Work with a Miami-based accounting office",
        ],
        nearbyAreas:
            "Serving contractors and trade professionals in Miami, Doral, Kendall, Hialeah, Homestead, and surrounding Miami-Dade areas.",
        faqs: [
            {
                question: "Do you provide accounting services for contractors in Miami?",
                answer:
                    "Yes. Our office supports contractors and trade professionals with tax preparation, bookkeeping, payroll, and business accounting services.",
            },
            {
                question: "Can you help organize job-related expenses?",
                answer:
                    "Yes. Bookkeeping support can help organize job-related expenses, materials, payments, and other business records.",
            },
            {
                question: "Do you help contractors with payroll?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides payroll support for contractors and local employers.",
            },
        ],
    },

    {
        id: "restaurants",
        title: "Restaurants",
        shortTitle: "Restaurants",
        slug: "restaurants",
        href: "/industries/restaurants",
        icon: Utensils,
        eyebrow: "For Food Service Businesses",
        primaryKeyword: "restaurant accounting Miami",
        seoTitle: "Restaurant Accounting, Bookkeeping & Payroll Services in Miami",
        seoDescription:
            "Accounting, bookkeeping, payroll, and tax preparation services for restaurants and food service businesses in Miami, FL.",
        summary:
            "Bookkeeping, payroll, tax, and accounting support for restaurants, cafés, food trucks, and food service businesses.",
        description:
            "Restaurants have fast-moving financial needs, from payroll and vendor payments to expenses, sales records, and tax preparation. East Coast Accounting & Tax Services helps Miami food service businesses stay organized with practical accounting support.",
        commonNeeds: [
            "Payroll support",
            "Sales and expense organization",
            "Vendor payment records",
            "Bookkeeping cleanup",
            "Business tax preparation",
            "Accounting support for owners",
        ],
        services: [
            "Bookkeeping",
            "Payroll Services",
            "Business Tax Services",
            "Small Business Accounting",
            "Tax Preparation",
        ],
        benefits: [
            "Keep restaurant records cleaner",
            "Support payroll and bookkeeping together",
            "Prepare better for tax season",
            "Understand business expenses more clearly",
            "Get support from a local Miami office",
        ],
        nearbyAreas:
            "Serving restaurants and food service businesses across Miami, Hialeah, Doral, Kendall, Coral Gables, and nearby communities.",
        faqs: [
            {
                question: "Do you provide accounting services for restaurants?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports restaurants and food service businesses with bookkeeping, payroll, tax preparation, and accounting services.",
            },
            {
                question: "Can you help with restaurant payroll?",
                answer:
                    "Yes. Our office provides payroll support for local employers, including restaurants and food service businesses.",
            },
            {
                question: "Why is bookkeeping important for restaurants?",
                answer:
                    "Bookkeeping helps restaurant owners keep track of sales, expenses, payroll, vendor payments, and tax preparation records.",
            },
        ],
    },

    {
        id: "real-estate",
        title: "Real Estate Professionals",
        shortTitle: "Real Estate",
        slug: "real-estate",
        href: "/industries/real-estate",
        icon: Home,
        eyebrow: "For Agents, Investors & Property Professionals",
        primaryKeyword: "tax accountant for real estate professionals Miami",
        seoTitle: "Tax & Accounting Services for Real Estate Professionals in Miami",
        seoDescription:
            "Tax preparation, bookkeeping, and accounting support for real estate agents, landlords, investors, and property professionals in Miami, FL.",
        summary:
            "Tax and accounting support for real estate agents, landlords, investors, and property-related professionals.",
        description:
            "Real estate professionals often manage commissions, expenses, property-related records, and self-employed income. East Coast Accounting & Tax Services helps Miami real estate professionals organize records and prepare for tax needs.",
        commonNeeds: [
            "Commission income organization",
            "Expense tracking",
            "Tax preparation",
            "Bookkeeping support",
            "Property-related record organization",
            "Self-employed tax support",
        ],
        services: [
            "Tax Preparation",
            "Business Tax Services",
            "Bookkeeping",
            "Accounting Services",
            "Small Business Accounting",
        ],
        benefits: [
            "Organize commission and expense records",
            "Prepare for tax season with clearer documentation",
            "Support self-employed and business tax needs",
            "Keep financial information easier to review",
            "Get bilingual help in English and Spanish",
        ],
        nearbyAreas:
            "Serving real estate professionals across Miami, Brickell, Coral Gables, Doral, Kendall, and nearby South Florida communities.",
        faqs: [
            {
                question: "Do you help real estate agents with tax preparation?",
                answer:
                    "Yes. East Coast Accounting & Tax Services helps real estate agents and property professionals with tax preparation and accounting support.",
            },
            {
                question: "Can bookkeeping help organize real estate income and expenses?",
                answer:
                    "Yes. Bookkeeping can help organize commission income, business expenses, and property-related records.",
            },
            {
                question: "Do you work with self-employed real estate professionals?",
                answer:
                    "Yes. Our office supports self-employed professionals, independent contractors, and business owners.",
            },
        ],
    },

    {
        id: "healthcare-practices",
        title: "Healthcare Practices",
        shortTitle: "Healthcare",
        slug: "healthcare-practices",
        href: "/industries/healthcare-practices",
        icon: HeartPulse,
        eyebrow: "For Medical, Dental & Wellness Offices",
        primaryKeyword: "accounting for healthcare practices Miami",
        seoTitle: "Accounting Services for Healthcare Practices in Miami, FL",
        seoDescription:
            "Tax, bookkeeping, payroll, and accounting services for healthcare, dental, and wellness practices in Miami, FL.",
        summary:
            "Accounting, bookkeeping, payroll, and tax support for healthcare practices, dental offices, and wellness businesses.",
        description:
            "Healthcare practices need organized financial records, payroll support, and tax preparation that fits the needs of a professional office. East Coast Accounting & Tax Services helps Miami healthcare, dental, and wellness practices stay better organized.",
        commonNeeds: [
            "Payroll support",
            "Bookkeeping organization",
            "Business tax preparation",
            "Expense tracking",
            "Financial reporting support",
            "Accounting support for practice owners",
        ],
        services: [
            "Business Tax Services",
            "Bookkeeping",
            "Payroll Services",
            "Accounting Services",
            "Small Business Accounting",
        ],
        benefits: [
            "Keep practice finances organized",
            "Support payroll and employee records",
            "Prepare business records for taxes",
            "Understand income and expenses more clearly",
            "Work with a local Miami accounting office",
        ],
        nearbyAreas:
            "Serving healthcare, dental, and wellness practices across Miami-Dade County and nearby South Florida areas.",
        faqs: [
            {
                question: "Do you provide accounting services for healthcare practices?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports healthcare, dental, and wellness practices with tax, bookkeeping, payroll, and accounting services.",
            },
            {
                question: "Can you help with payroll for a healthcare office?",
                answer:
                    "Yes. Our office provides payroll support for local employers, including medical, dental, and wellness practices.",
            },
            {
                question: "Can bookkeeping help healthcare practice owners?",
                answer:
                    "Yes. Bookkeeping can help practice owners keep records organized, review expenses, and prepare for tax needs.",
            },
        ],
    },

    {
        id: "local-service-businesses",
        title: "Local Service Businesses",
        shortTitle: "Service Businesses",
        slug: "local-service-businesses",
        href: "/industries/local-service-businesses",
        icon: Truck,
        eyebrow: "For Miami Service Companies",
        primaryKeyword: "accounting for service businesses Miami",
        seoTitle: "Accounting Services for Local Service Businesses in Miami",
        seoDescription:
            "Bookkeeping, payroll, tax preparation, and accounting support for local service businesses in Miami, FL.",
        summary:
            "Financial organization for local service companies that need practical support with taxes, bookkeeping, and payroll.",
        description:
            "Local service businesses need reliable financial organization to keep up with payments, expenses, employees, and tax responsibilities. East Coast Accounting & Tax Services helps Miami service companies stay organized with tax, bookkeeping, payroll, and accounting support.",
        commonNeeds: [
            "Income and expense organization",
            "Bookkeeping support",
            "Payroll support",
            "Business tax preparation",
            "Financial record cleanup",
            "Accounting guidance",
        ],
        services: [
            "Bookkeeping",
            "Payroll Services",
            "Business Tax Services",
            "Accounting Services",
            "Tax Preparation",
        ],
        benefits: [
            "Keep day-to-day records easier to manage",
            "Prepare for tax season with cleaner documentation",
            "Support payroll and bookkeeping in one place",
            "Save time on financial organization",
            "Get local bilingual support",
        ],
        nearbyAreas:
            "Serving local service businesses across Miami, Doral, Kendall, Hialeah, Coral Gables, Homestead, and surrounding areas.",
        faqs: [
            {
                question: "Do you work with local service businesses in Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports local service businesses with tax preparation, bookkeeping, payroll, and accounting services.",
            },
            {
                question: "Can you help a growing service business get organized?",
                answer:
                    "Yes. Our office can help growing businesses organize financial records, payroll information, and bookkeeping needs.",
            },
            {
                question: "Do you provide year-round business support?",
                answer:
                    "Yes. Our office supports business clients throughout the year, not only during tax season.",
            },
        ],
    },
] as const;

export const featuredIndustryIds = [
    "small-businesses",
    "self-employed",
    "contractors",
    "restaurants",
    "real-estate",
    "healthcare-practices",
] as const;

export const homepageIndustryHighlights = [
    {
        title: "Business owners",
        description:
            "Tax, bookkeeping, payroll, and accounting support for Miami businesses that need clear financial organization.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Self-employed professionals",
        description:
            "Support for freelancers, contractors, consultants, and independent workers managing 1099 income and expenses.",
        icon: UsersRound,
    },
    {
        title: "Local service companies",
        description:
            "Practical accounting support for contractors, restaurants, healthcare offices, and service-based businesses.",
        icon: Store,
    },
] as const;

export const industrySeoIntro = {
    title: "Accounting Support for Miami Businesses, Professionals, and Local Industries",
    description:
        "East Coast Accounting & Tax Services works with individuals, self-employed professionals, and local businesses across Miami-Dade County. Our industry pages help connect common financial needs with the right tax, bookkeeping, payroll, and accounting services.",
    keywords: [
        "small business accounting Miami",
        "accounting for contractors Miami",
        "restaurant accounting Miami",
        "tax services for self-employed Miami",
        "payroll services for small businesses Miami",
        "bookkeeping for Miami businesses",
    ],
} as const;

export const industryServiceMap = {
    "small-businesses": [
        "business-tax-services",
        "bookkeeping",
        "payroll",
        "small-business-accounting",
    ],
    "self-employed": [
        "tax-preparation",
        "business-tax-services",
        "bookkeeping",
        "accounting",
    ],
    contractors: [
        "business-tax-services",
        "bookkeeping",
        "payroll",
        "small-business-accounting",
    ],
    restaurants: [
        "bookkeeping",
        "payroll",
        "business-tax-services",
        "small-business-accounting",
    ],
    "real-estate": [
        "tax-preparation",
        "business-tax-services",
        "bookkeeping",
        "accounting",
    ],
    "healthcare-practices": [
        "business-tax-services",
        "bookkeeping",
        "payroll",
        "accounting",
    ],
    "local-service-businesses": [
        "bookkeeping",
        "payroll",
        "business-tax-services",
        "accounting",
    ],
} as const;

export const industryPageCta = {
    eyebrow: "Need accounting support for your business?",
    title: "Let’s help you organize your numbers with clarity.",
    description:
        "Contact East Coast Accounting & Tax Services for tax preparation, bookkeeping, payroll, and accounting support for your Miami business.",
    primaryCta: {
        label: "Contact Our Office",
        href: "/contact",
    },
    secondaryCta: {
        label: siteConfig.contact.phone,
        href: siteConfig.contact.phoneHref,
    },
} as const;

export type Industry = (typeof industries)[number];
export type IndustryId = Industry["id"];

export function getIndustryById(id: string) {
    return industries.find((industry) => industry.id === id);
}

export function getIndustryBySlug(slug: string) {
    return industries.find((industry) => industry.slug === slug);
}

export function getFeaturedIndustries() {
    return industries.filter((industry) =>
        featuredIndustryIds.includes(
            industry.id as (typeof featuredIndustryIds)[number]
        )
    );
}

export function getIndustryPageSchema(industry: Industry) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${siteConfig.url}${industry.href}#service`,
        name: industry.title,
        description: industry.seoDescription,
        provider: {
            "@id": `${siteConfig.url}/#business`,
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Miami-Dade County, FL",
        },
        audience: {
            "@type": "Audience",
            audienceType: industry.title,
        },
        serviceType: industry.services,
        url: `${siteConfig.url}${industry.href}`,
    };
}

export function getIndustryBreadcrumbs(industry: Industry) {
    return [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Industries",
            href: "/industries",
        },
        {
            label: industry.title,
            href: industry.href,
        },
    ];
}