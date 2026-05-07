import {
    BadgeDollarSign,
    BookOpenCheck,
    BriefcaseBusiness,
    Calculator,
    ClipboardCheck,
    FileCheck2,
    FileText,
    Landmark,
    MapPinHouse,
    ReceiptText,
    ShieldCheck,
    TrendingUp,
    WalletCards,
} from "@lucide/astro";

export const services = [
    {
        id: "tax-preparation",
        title: "Tax Preparation",
        shortTitle: "Taxes",
        slug: "tax-preparation",
        href: "/services/tax-preparation",
        icon: ReceiptText,
        eyebrow: "Individual & Business Taxes",
        summary:
            "Professional tax preparation support for individuals, families, self-employed professionals, and businesses in Miami and South Florida.",
        description:
            "East Coast Accounting & Tax Services helps clients prepare organized, accurate tax filings with a clear process and personalized support. Whether you are filing as an individual, managing business taxes, or need help understanding your tax documents, our Miami office is here to guide you.",
        seoTitle:
            "Tax Preparation Services in Miami, FL",
        seoDescription:
            "Professional tax preparation services in Miami, FL for individuals, families, self-employed professionals, and businesses. Contact East Coast Accounting & Tax Services.",
        primaryKeyword: "tax preparation Miami FL",
        secondaryKeywords: [
            "tax preparer Miami",
            "tax services Miami",
            "individual tax preparation Miami",
            "business tax preparation Miami",
            "tax accountant Miami",
        ],
        audiences: [
            "Individuals",
            "Families",
            "Self-employed professionals",
            "Independent contractors",
            "Small businesses",
        ],
        features: [
            "Individual Tax Return Preparation and submission (W-2, 1099, etc.)",
            "Self-employed and Contractor Tax Support",
            "Tax Document Review",
            "Year-round Tax Guidance",
            "Bilingual English and Spanish Assistance",
        ],
        benefits: [
            "Stay organized before and during tax season",
            "Reduce stress with professional guidance",
            "Understand what documents are needed",
            "Get support for personal and business tax needs",
        ],
        process: [
            "Contact our office and tell us what type of tax help you need.",
            "Gather and submit your tax documents for review.",
            "Our team reviews your information and prepares your return.",
            "We explain next steps clearly before final submission.",
        ],
        faqs: [
            {
                question: "Do you help with both individual and business tax preparation?",
                answer:
                    "Yes. East Coast Accounting & Tax Services works with both individuals and businesses in Miami and surrounding South Florida communities.",
            },
            {
                question: "Can I contact your office before tax season?",
                answer:
                    "Yes. Our office provides year-round support, so clients can ask questions, prepare documents, and stay organized before tax deadlines.",
            },
            {
                question: "Do you provide tax services in English and Spanish?",
                answer:
                    "Yes. East Coast Accounting & Tax Services offers bilingual support in English and Spanish.",
            },
        ],
    },

    {
        id: "business-tax-services",
        title: "Business Tax Services",
        shortTitle: "Business Taxes",
        slug: "business-tax-services",
        href: "/services/business-tax-services",
        icon: BriefcaseBusiness,
        eyebrow: "Tax Support for Businesses",
        summary:
            "Business tax support for local companies, small businesses, contractors, entrepreneurs, and self-employed professionals.",
        description:
            "Business owners need more than seasonal tax preparation. They need organized records, clear tax guidance, and year-round support. East Coast Accounting & Tax Services helps Miami businesses prepare for tax obligations while staying focused on daily operations.",
        seoTitle:
            "Business Tax Services in Miami, FL",
        seoDescription:
            "Business tax services in Miami, FL for small businesses, contractors, entrepreneurs, and local companies. Get organized tax support from East Coast Accounting & Tax Services.",
        primaryKeyword: "business tax services Miami",
        secondaryKeywords: [
            "business tax preparation Miami",
            "small business tax accountant Miami",
            "tax services for businesses Miami",
            "Miami business tax support",
            "corporate tax services Miami",
        ],
        audiences: [
            "Small businesses",
            "LLCs",
            "Corporations",
            "Independent contractors",
            "Self-employed professionals",
            "Local service businesses",
        ],
        features: [
            "Business tax preparation support",
            "Tax organization for small businesses",
            "Contractor and self-employed tax support",
            "Year-round business tax guidance",
            "Coordination with bookkeeping and payroll needs",
            "Bilingual business support",
        ],
        benefits: [
            "Keep business tax records better organized",
            "Prepare for deadlines with less stress",
            "Support smarter business decisions",
            "Connect tax, bookkeeping, and payroll needs in one place",
        ],
        process: [
            "Tell us about your business structure and tax needs.",
            "Share your business records, reports, and tax documents.",
            "Our team reviews the information and identifies what is needed.",
            "We help prepare your business tax filing and explain next steps.",
        ],
        faqs: [
            {
                question: "Do you work with small businesses in Miami?",
                answer:
                    "Yes. We support small businesses, self-employed professionals, contractors, and local companies across Miami and nearby South Florida areas.",
            },
            {
                question: "Can you help if my business records are not fully organized?",
                answer:
                    "Yes. If your records need organization, our bookkeeping and accounting support can help create a clearer picture before tax preparation.",
            },
            {
                question: "Do you help business owners throughout the year?",
                answer:
                    "Yes. Our office supports business clients beyond tax season with bookkeeping, payroll, and accounting guidance.",
            },
        ],
    },

    {
        id: "bookkeeping",
        title: "Bookkeeping",
        shortTitle: "Bookkeeping",
        slug: "bookkeeping",
        href: "/services/bookkeeping",
        icon: BookOpenCheck,
        eyebrow: "Clean Books & Better Records",
        summary:
            "Bookkeeping support to help Miami businesses keep financial records organized, readable, and ready for better decisions.",
        description:
            "Good bookkeeping gives business owners a clearer understanding of money coming in, money going out, and what needs attention. East Coast Accounting & Tax Services helps local businesses organize financial records and maintain cleaner books throughout the year.",
        seoTitle:
            "Bookkeeping Services in Miami, FL",
        seoDescription:
            "Bookkeeping services in Miami, FL for small businesses, contractors, restaurants, service companies, and local professionals. Keep your books organized with East Coast Accounting & Tax Services.",
        primaryKeyword: "bookkeeping services Miami",
        secondaryKeywords: [
            "bookkeeper Miami FL",
            "small business bookkeeping Miami",
            "monthly bookkeeping Miami",
            "business bookkeeping services Miami",
            "Miami bookkeeping support",
        ],
        audiences: [
            "Small businesses",
            "Service businesses",
            "Contractors",
            "Restaurants",
            "Real estate professionals",
            "Self-employed professionals",
        ],
        features: [
            "Monthly bookkeeping support",
            "Transaction organization",
            "Expense categorization",
            "Financial record cleanup",
            "Reports for business visibility",
            "Coordination with tax preparation",
        ],
        benefits: [
            "Know where your business stands financially",
            "Reduce last-minute tax season stress",
            "Keep income and expenses better organized",
            "Make business decisions with clearer numbers",
        ],
        process: [
            "We review your current bookkeeping situation.",
            "We identify what records, accounts, and reports are needed.",
            "We organize transactions and support monthly recordkeeping.",
            "You receive clearer financial information for taxes and planning.",
        ],
        faqs: [
            {
                question: "Why is bookkeeping important for small businesses?",
                answer:
                    "Bookkeeping helps business owners understand income, expenses, cash flow, and tax preparation needs. Clean records also make it easier to make informed business decisions.",
            },
            {
                question: "Can bookkeeping help with tax preparation?",
                answer:
                    "Yes. Organized bookkeeping can make tax preparation smoother because income, expenses, and business records are easier to review.",
            },
            {
                question: "Do you offer bookkeeping for businesses in Miami-Dade County?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides bookkeeping support for businesses in Miami-Dade County and surrounding South Florida communities.",
            },
        ],
    },

    {
        id: "payroll",
        title: "Payroll Services",
        shortTitle: "Payroll",
        slug: "payroll",
        href: "/services/payroll",
        icon: WalletCards,
        eyebrow: "Payroll Support",
        summary:
            "Payroll support for businesses that need help staying organized with employee payments, records, and payroll-related responsibilities.",
        description:
            "Payroll can become time-consuming for business owners, especially as a company grows. East Coast Accounting & Tax Services supports Miami businesses with payroll organization and related accounting needs so owners can stay focused on operations.",
        seoTitle:
            "Payroll Services in Miami, FL",
        seoDescription:
            "Payroll services in Miami, FL for small businesses and local employers. Get payroll support from East Coast Accounting & Tax Services.",
        primaryKeyword: "payroll services Miami FL",
        secondaryKeywords: [
            "small business payroll Miami",
            "payroll support Miami",
            "payroll services for small business Miami",
            "Miami payroll accountant",
            "business payroll services Miami",
        ],
        audiences: [
            "Small businesses",
            "Local employers",
            "Restaurants",
            "Service businesses",
            "Contractors with employees",
            "Growing companies",
        ],
        features: [
            "Payroll organization support",
            "Employee payment record support",
            "Payroll reporting assistance",
            "Coordination with bookkeeping",
            "Support for small business employers",
            "Bilingual payroll assistance",
        ],
        benefits: [
            "Save time on recurring payroll tasks",
            "Keep payroll records more organized",
            "Connect payroll with bookkeeping and tax preparation",
            "Support cleaner financial reporting",
        ],
        process: [
            "We learn about your business and payroll needs.",
            "We review your employee and payroll record structure.",
            "We help organize payroll-related information and reporting.",
            "We support ongoing payroll clarity for your business.",
        ],
        faqs: [
            {
                question: "Do you provide payroll support for small businesses?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides payroll support for small businesses and local employers in Miami and nearby areas.",
            },
            {
                question: "Can payroll be connected with bookkeeping?",
                answer:
                    "Yes. Payroll and bookkeeping work best together because payroll affects business expenses, reporting, and tax preparation.",
            },
            {
                question: "Is payroll support available in Spanish?",
                answer:
                    "Yes. Our office provides bilingual support in English and Spanish.",
            },
        ],
    },

    {
        id: "accounting",
        title: "Accounting Services",
        shortTitle: "Accounting",
        slug: "accounting",
        href: "/services/accounting",
        icon: Calculator,
        eyebrow: "Financial Organization",
        summary:
            "Accounting support for individuals and businesses that need clearer numbers, better organization, and reliable financial guidance.",
        description:
            "East Coast Accounting & Tax Services helps individuals and business owners bring more clarity to their financial information. From accounting support to financial record organization, our office helps clients stay better prepared throughout the year.",
        seoTitle:
            "Accounting Services in Miami, FL",
        seoDescription:
            "Accounting services in Miami, FL for individuals and businesses. Get tax, bookkeeping, payroll, and accounting support from East Coast Accounting & Tax Services.",
        primaryKeyword: "accounting services Miami FL",
        secondaryKeywords: [
            "accountant Miami FL",
            "Miami accounting office",
            "small business accounting Miami",
            "accounting support Miami",
            "tax and accounting Miami",
        ],
        audiences: [
            "Individuals",
            "Families",
            "Small businesses",
            "Local companies",
            "Self-employed professionals",
            "Business owners",
        ],
        features: [
            "Accounting support for individuals and businesses",
            "Financial record organization",
            "Tax-ready accounting assistance",
            "Small business accounting support",
            "Bookkeeping coordination",
            "Payroll coordination",
        ],
        benefits: [
            "Understand your numbers more clearly",
            "Prepare better for tax season",
            "Keep business finances more organized",
            "Get support from a local Miami accounting office",
        ],
        process: [
            "We discuss your accounting needs and goals.",
            "We review the records or reports you currently have.",
            "We identify the best way to organize and support your financial information.",
            "We provide ongoing support based on your needs.",
        ],
        faqs: [
            {
                question: "Do you provide accounting services for both individuals and businesses?",
                answer:
                    "Yes. East Coast Accounting & Tax Services works with both individuals and businesses.",
            },
            {
                question: "What is the difference between accounting and bookkeeping?",
                answer:
                    "Bookkeeping focuses on organizing daily financial records, while accounting uses that information to support reporting, tax preparation, and financial understanding.",
            },
            {
                question: "Do you serve clients outside Miami?",
                answer:
                    "Yes. The office is based in Miami and serves Miami-Dade County, while also supporting nearby South Florida communities when relevant.",
            },
        ],
    },

    {
        id: "irs-tax-help",
        title: "IRS Tax Help",
        shortTitle: "IRS Help",
        slug: "irs-tax-help",
        href: "/services/irs-tax-help",
        icon: Landmark,
        eyebrow: "Tax Notice Support",
        summary:
            "Guidance for clients who have IRS letters, tax questions, past filing concerns, or need help understanding next steps.",
        description:
            "Receiving a tax notice or having an unresolved tax question can feel stressful. East Coast Accounting & Tax Services helps Miami clients review tax-related concerns, understand documents, and identify practical next steps.",
        seoTitle:
            "IRS Tax Help in Miami, FL",
        seoDescription:
            "IRS tax help in Miami, FL for tax notices, tax questions, and filing concerns. Contact East Coast Accounting & Tax Services for guidance.",
        primaryKeyword: "IRS tax help Miami",
        secondaryKeywords: [
            "tax notice help Miami",
            "IRS letter help Miami",
            "tax help Miami FL",
            "Miami tax office IRS help",
            "tax problem help Miami",
        ],
        audiences: [
            "Individuals with tax notices",
            "Business owners with tax questions",
            "Clients with past filing concerns",
            "Self-employed professionals",
            "Taxpayers needing document review",
        ],
        features: [
            "IRS notice review support",
            "Tax document organization",
            "Guidance on next steps",
            "Support for past filing questions",
            "Individual and business tax help",
            "Bilingual English and Spanish assistance",
        ],
        benefits: [
            "Understand tax letters more clearly",
            "Reduce confusion around IRS-related documents",
            "Know what information may be needed",
            "Get local support from a Miami tax office",
        ],
        process: [
            "Contact our office and explain the tax concern.",
            "Bring or send the tax letter or document for review.",
            "We help you understand what the notice is requesting.",
            "We discuss next steps based on your situation.",
        ],
        faqs: [
            {
                question: "Can you help me understand an IRS letter?",
                answer:
                    "Yes. Our office can help review tax letters and explain what information may be needed for the next step.",
            },
            {
                question: "Do you help businesses with tax notices?",
                answer:
                    "Yes. We support both individuals and businesses with tax-related questions and document review.",
            },
            {
                question: "Should I wait to respond to a tax notice?",
                answer:
                    "It is usually better to review tax notices promptly so you understand deadlines, requested information, and possible next steps.",
            },
        ],
    },

    {
        id: "small-business-accounting",
        title: "Small Business Accounting",
        shortTitle: "Small Business",
        slug: "small-business-accounting",
        href: "/services/small-business-accounting",
        icon: TrendingUp,
        eyebrow: "Support for Local Businesses",
        summary:
            "Tax, bookkeeping, payroll, and accounting support designed for small businesses across Miami and South Florida.",
        description:
            "Small business owners need financial support that is practical, organized, and easy to understand. East Coast Accounting & Tax Services helps local businesses stay prepared with accounting, bookkeeping, payroll, and tax services in one place.",
        seoTitle:
            "Small Business Accounting in Miami, FL",
        seoDescription:
            "Small business accounting in Miami, FL including tax preparation, bookkeeping, payroll, and accounting support for local businesses.",
        primaryKeyword: "small business accounting Miami",
        secondaryKeywords: [
            "small business accountant Miami",
            "accounting for small business Miami",
            "bookkeeping and payroll Miami",
            "business accounting Miami FL",
            "Miami small business tax services",
        ],
        audiences: [
            "Small businesses",
            "Startups",
            "Local service companies",
            "Contractors",
            "Restaurants",
            "Family-owned businesses",
        ],
        features: [
            "Small business tax support",
            "Bookkeeping organization",
            "Payroll support",
            "Business record cleanup",
            "Financial reporting assistance",
            "Bilingual support for business owners",
        ],
        benefits: [
            "Keep your business finances better organized",
            "Reduce tax season pressure",
            "Save time on financial administration",
            "Work with a Miami-based accounting office",
        ],
        process: [
            "We learn about your business, services, and financial setup.",
            "We review your current tax, bookkeeping, and payroll needs.",
            "We organize a support plan based on your business priorities.",
            "We provide ongoing help so your numbers stay clearer year-round.",
        ],
        faqs: [
            {
                question: "Do you provide accounting services for small businesses in Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports small businesses across Miami, Miami-Dade County, and nearby South Florida communities.",
            },
            {
                question: "Can one office help with taxes, bookkeeping, and payroll?",
                answer:
                    "Yes. Our office provides support for taxes, bookkeeping, payroll, and accounting so business owners can keep related financial needs connected.",
            },
            {
                question: "Do you work with new businesses?",
                answer:
                    "Yes. We can support new and growing businesses that need help getting their tax, bookkeeping, and payroll records organized.",
            },
        ],
    },
] as const;

export const serviceHighlights = [
    {
        title: "Tax-ready records",
        description:
            "Keep documents, income, expenses, and business records better prepared before deadlines arrive.",
        icon: FileCheck2,
    },
    {
        title: "Business clarity",
        description:
            "Understand your numbers with bookkeeping, payroll, and accounting support that works together.",
        icon: ClipboardCheck,
    },
    {
        title: "Local Miami support",
        description:
            "Work with a Miami-based office serving individuals and businesses across Miami-Dade County.",
        icon: MapPinHouse,
    },
    {
        title: "Year-round guidance",
        description:
            "Get support beyond tax season for questions, planning, payroll, bookkeeping, and ongoing needs.",
        icon: ShieldCheck,
    },
] as const;

export const serviceCategories = [
    {
        title: "For Individuals",
        description:
            "Tax preparation and accounting support for individuals, families, and personal filing needs.",
        icon: FileText,
        services: ["tax-preparation", "irs-tax-help", "accounting"],
    },
    {
        title: "For Businesses",
        description:
            "Tax, bookkeeping, payroll, and accounting support for local businesses and employers.",
        icon: BriefcaseBusiness,
        services: [
            "business-tax-services",
            "bookkeeping",
            "payroll",
            "small-business-accounting",
        ],
    },
    {
        title: "For Self-Employed Professionals",
        description:
            "Support for contractors, freelancers, real estate professionals, and independent workers.",
        icon: BadgeDollarSign,
        services: [
            "tax-preparation",
            "business-tax-services",
            "bookkeeping",
            "small-business-accounting",
        ],
    },
] as const;

export const homeFeaturedServiceIds = [
    "tax-preparation",
    "bookkeeping",
    "payroll",
    "business-tax-services",
] as const;

export const coreServiceIds = [
    "tax-preparation",
    "bookkeeping",
    "payroll",
] as const;

export const servicePageIds = services.map((service) => service.id);

export type Service = (typeof services)[number];
export type ServiceId = Service["id"];

export function getServiceById(id: string) {
    return services.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
    return services.filter((service) =>
        homeFeaturedServiceIds.includes(service.id as (typeof homeFeaturedServiceIds)[number])
    );
}

export function getCoreServices() {
    return services.filter((service) =>
        coreServiceIds.includes(service.id as (typeof coreServiceIds)[number])
    );
}