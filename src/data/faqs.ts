import {
    BookOpenCheck,
    BriefcaseBusiness,
    Calculator,
    CircleHelp,
    Clock3,
    FileText,
    Landmark,
    Languages,
    ReceiptText,
    ShieldCheck,
    WalletCards,
} from "@lucide/astro";

import { siteConfig } from "./site";

export const faqCategories = [
    {
        id: "tax-preparation",
        title: "Tax Preparation",
        description:
            "Common questions about individual taxes, business taxes, tax documents, and filing support.",
        icon: ReceiptText,
        faqs: [
            {
                question: "Do you provide tax preparation services in Miami, FL?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides tax preparation services for individuals, families, self-employed professionals, and businesses in Miami, Miami-Dade County, and nearby South Florida communities.",
            },
            {
                question: "Do you help both individuals and businesses with taxes?",
                answer:
                    "Yes. Our office works with both individuals and businesses, including families, small business owners, independent contractors, and self-employed professionals.",
            },
            {
                question: "What documents should I bring for tax preparation?",
                answer:
                    "The documents needed depend on your situation, but common items include W-2s, 1099s, business income records, expense records, prior-year tax returns, identification, and any tax letters or forms you received.",
            },
            {
                question: "Can I contact your office before tax season?",
                answer:
                    "Yes. You can contact our office throughout the year for tax questions, document organization, and preparation guidance before tax deadlines arrive.",
            },
        ],
    },

    {
        id: "bookkeeping",
        title: "Bookkeeping",
        description:
            "Helpful answers for business owners who need cleaner books and better financial organization.",
        icon: BookOpenCheck,
        faqs: [
            {
                question: "Do you offer bookkeeping services for small businesses in Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides bookkeeping support for small businesses, self-employed professionals, contractors, restaurants, service businesses, and local companies in Miami and nearby areas.",
            },
            {
                question: "Why is bookkeeping important for tax preparation?",
                answer:
                    "Bookkeeping helps organize income, expenses, transactions, and business records. Clean records can make tax preparation smoother and help business owners better understand their financial position.",
            },
            {
                question: "Can you help if my business books are behind?",
                answer:
                    "Yes. If your books need cleanup or organization, our office can help review your current records and guide you through the next steps to get better organized.",
            },
            {
                question: "Do you offer monthly bookkeeping support?",
                answer:
                    "Yes. Our bookkeeping support can help businesses stay organized throughout the year instead of waiting until tax season to review financial records.",
            },
        ],
    },

    {
        id: "payroll",
        title: "Payroll Services",
        description:
            "Questions about payroll support for employers, small businesses, and growing local companies.",
        icon: WalletCards,
        faqs: [
            {
                question: "Do you provide payroll services for businesses in Miami?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides payroll support for local businesses and employers in Miami, Miami-Dade County, and nearby South Florida communities.",
            },
            {
                question: "Can payroll support work together with bookkeeping?",
                answer:
                    "Yes. Payroll and bookkeeping are closely connected because employee payments, payroll expenses, and related records affect business financial reports and tax preparation.",
            },
            {
                question: "Is payroll only for larger businesses?",
                answer:
                    "No. Payroll support can be helpful for small businesses, growing companies, restaurants, contractors, and local employers that want better organization around employee payment records.",
            },
            {
                question: "Do you help Spanish-speaking business owners with payroll questions?",
                answer:
                    "Yes. East Coast Accounting & Tax Services offers bilingual support in English and Spanish.",
            },
        ],
    },

    {
        id: "business-accounting",
        title: "Business Accounting",
        description:
            "Questions for business owners looking for tax, bookkeeping, payroll, and accounting support.",
        icon: BriefcaseBusiness,
        faqs: [
            {
                question: "Do you provide accounting services for small businesses?",
                answer:
                    "Yes. Our office supports small businesses with accounting, bookkeeping, payroll, and tax preparation services designed to help owners stay organized and prepared.",
            },
            {
                question: "What types of businesses do you work with?",
                answer:
                    "We support a variety of local businesses, including service companies, contractors, restaurants, real estate professionals, self-employed professionals, family-owned businesses, and local employers.",
            },
            {
                question: "Can one office help with taxes, bookkeeping, and payroll?",
                answer:
                    "Yes. East Coast Accounting & Tax Services offers tax preparation, bookkeeping, payroll, and accounting support, allowing business owners to keep related financial needs connected in one place.",
            },
            {
                question: "Can accounting support help me make better business decisions?",
                answer:
                    "Yes. Organized financial records can help business owners understand income, expenses, cash flow, and business performance more clearly.",
            },
        ],
    },

    {
        id: "irs-tax-help",
        title: "IRS Tax Help",
        description:
            "Answers for clients who received a tax notice or need help understanding IRS-related documents.",
        icon: Landmark,
        faqs: [
            {
                question: "Can you help me understand an IRS letter or tax notice?",
                answer:
                    "Yes. Our office can help review tax notices, explain what the letter appears to be requesting, and discuss possible next steps based on your situation.",
            },
            {
                question: "Should I ignore a tax notice if I do not understand it?",
                answer:
                    "No. It is usually better to review tax notices promptly so you can understand deadlines, requested information, and what action may be needed.",
            },
            {
                question: "Do you help businesses with tax notices?",
                answer:
                    "Yes. East Coast Accounting & Tax Services supports both individuals and businesses with tax-related questions, letters, and document review.",
            },
            {
                question: "What should I bring if I received a tax notice?",
                answer:
                    "Bring the full notice or letter, your identification, related tax documents, and any prior returns or records connected to the issue.",
            },
        ],
    },

    {
        id: "office-process",
        title: "Working With Our Office",
        description:
            "General questions about contacting East Coast Accounting & Tax Services, office hours, service areas, and bilingual support.",
        icon: CircleHelp,
        faqs: [
            {
                question: "Where is East Coast Accounting & Tax Services located?",
                answer: `East Coast Accounting & Tax Services is located at ${siteConfig.address.full}.`,
            },
            {
                question: "What areas do you serve?",
                answer:
                    "Our office is based in Miami and serves clients across Miami-Dade County, including nearby communities such as West Miami, Coral Gables, Doral, Kendall, Hialeah, Homestead, Brickell, and surrounding South Florida areas when relevant.",
            },
            {
                question: "What are your business hours?",
                answer: `Our regular business hours are ${siteConfig.hours.label}.`,
            },
            {
                question: "Do you offer services in English and Spanish?",
                answer:
                    "Yes. East Coast Accounting & Tax Services provides bilingual support in English and Spanish.",
            },
            {
                question: "How can I contact your office?",
                answer: `You can contact East Coast Accounting & Tax Services by using the contact form on the website, calling ${siteConfig.contact.phone}, or emailing ${siteConfig.contact.email}.`,
            },
        ],
    },
] as const;

export const homepageFaqs = [
    {
        question: "Do you provide tax and accounting services in Miami, FL?",
        answer:
            "Yes. East Coast Accounting & Tax Services provides tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Miami, Miami-Dade County, and nearby South Florida communities.",
    },
    {
        question: "Do you work with both individuals and businesses?",
        answer:
            "Yes. Our office supports individuals, families, self-employed professionals, small businesses, local employers, and business owners.",
    },
    {
        question: "What are your main services?",
        answer:
            "Our main services include tax preparation, bookkeeping, payroll services, business tax support, accounting services, and IRS tax help.",
    },
    {
        question: "Do you offer bilingual tax and accounting support?",
        answer:
            "Yes. Our office provides support in both English and Spanish for clients across Miami and South Florida.",
    },
    {
        question: "What is the best way to contact East Coast Accounting & Tax Services?",
        answer:
            "The best way to get started is by completing the contact form. You can also call or email the office using the contact information listed on the website.",
    },
] as const;

export const serviceFaqMap = {
    "tax-preparation": [
        {
            question: "Do you provide individual tax preparation in Miami?",
            answer:
                "Yes. East Coast Accounting & Tax Services helps individuals and families in Miami with tax preparation and document organization.",
        },
        {
            question: "Do you provide business tax preparation?",
            answer:
                "Yes. Our office supports business tax preparation for small businesses, self-employed professionals, contractors, and local companies.",
        },
        {
            question: "Can you help me prepare before tax season?",
            answer:
                "Yes. You can contact our office before tax season to ask questions, organize documents, and prepare for upcoming tax needs.",
        },
    ],

    "business-tax-services": [
        {
            question: "Do you help Miami small businesses with taxes?",
            answer:
                "Yes. East Coast Accounting & Tax Services provides business tax support for small businesses, entrepreneurs, contractors, and local companies in Miami and nearby areas.",
        },
        {
            question: "Can you help if my business records are not organized?",
            answer:
                "Yes. Our bookkeeping and accounting support can help organize your records before or during the tax preparation process.",
        },
        {
            question: "Do you support businesses year-round?",
            answer:
                "Yes. Our office provides year-round support for business tax questions, bookkeeping, payroll, and accounting needs.",
        },
    ],

    bookkeeping: [
        {
            question: "Do you offer bookkeeping services in Miami?",
            answer:
                "Yes. East Coast Accounting & Tax Services provides bookkeeping services for small businesses and local professionals in Miami and nearby South Florida communities.",
        },
        {
            question: "Can bookkeeping help reduce tax season stress?",
            answer:
                "Yes. Organized bookkeeping can make tax preparation easier by keeping income, expenses, and financial records clearer throughout the year.",
        },
        {
            question: "Do you help with bookkeeping cleanup?",
            answer:
                "Yes. If your financial records are behind or disorganized, our office can help review your situation and support cleanup or organization.",
        },
    ],

    payroll: [
        {
            question: "Do you provide payroll services for small businesses?",
            answer:
                "Yes. Our office provides payroll support for local businesses and employers in Miami, Miami-Dade County, and nearby communities.",
        },
        {
            question: "Can payroll and bookkeeping be handled together?",
            answer:
                "Yes. Payroll information affects bookkeeping, financial reports, and tax preparation, so keeping these services connected can help businesses stay organized.",
        },
        {
            question: "Do you provide payroll support in Spanish?",
            answer:
                "Yes. East Coast Accounting & Tax Services offers bilingual support in English and Spanish.",
        },
    ],

    accounting: [
        {
            question: "Do you provide accounting services for individuals and businesses?",
            answer:
                "Yes. Our office provides accounting support for both individuals and businesses in Miami and nearby South Florida communities.",
        },
        {
            question: "What is the difference between bookkeeping and accounting?",
            answer:
                "Bookkeeping focuses on organizing financial records and transactions. Accounting uses that information to support reporting, tax preparation, and a clearer understanding of finances.",
        },
        {
            question: "Can accounting support help small businesses stay organized?",
            answer:
                "Yes. Accounting support can help small businesses better understand financial records, prepare for taxes, and make more informed decisions.",
        },
    ],

    "irs-tax-help": [
        {
            question: "Can you help me review an IRS notice?",
            answer:
                "Yes. Our office can help review tax notices and explain what information may be needed for the next step.",
        },
        {
            question: "Do you help with tax questions from previous years?",
            answer:
                "Yes. East Coast Accounting & Tax Services can help review tax-related questions and documents connected to previous years.",
        },
        {
            question: "Should I bring the full IRS letter?",
            answer:
                "Yes. Bring the complete notice or letter, along with related tax documents and any previous returns connected to the matter.",
        },
    ],

    "small-business-accounting": [
        {
            question: "Do you provide small business accounting in Miami?",
            answer:
                "Yes. East Coast Accounting & Tax Services supports Miami small businesses with tax preparation, bookkeeping, payroll, and accounting services.",
        },
        {
            question: "Can you help new businesses get organized?",
            answer:
                "Yes. Our office can help new and growing businesses organize financial records, bookkeeping, payroll information, and tax preparation needs.",
        },
        {
            question: "Do you work with family-owned businesses?",
            answer:
                "Yes. We support family-owned businesses, local service companies, contractors, restaurants, and other small businesses across Miami-Dade County.",
        },
    ],
} as const;

export const locationFaqs = [
    {
        question: "Do you serve clients throughout Miami-Dade County?",
        answer:
            "Yes. East Coast Accounting & Tax Services is based in Miami and serves clients across Miami-Dade County, including nearby communities such as West Miami, Coral Gables, Doral, Kendall, Hialeah, Homestead, Brickell, and South Miami.",
    },
    {
        question: "Can clients from nearby South Florida areas contact your office?",
        answer:
            "Yes. While the main service area is Miami-Dade County, the office may also support clients from nearby South Florida communities when relevant.",
    },
    {
        question: "Do I need to be close to the office to request help?",
        answer:
            "Not necessarily. The office is located in Miami, but individuals and businesses across the service area can contact East Coast Accounting & Tax Services for help.",
    },
] as const;

export const trustFaqs = [
    {
        title: "Bilingual Support",
        description:
            "English and Spanish support for Miami individuals, families, and business owners.",
        icon: Languages,
    },
    {
        title: "Year-Round Help",
        description:
            "Support for tax questions, bookkeeping, payroll, and accounting needs beyond tax season.",
        icon: Clock3,
    },
    {
        title: "Tax-Ready Organization",
        description:
            "Clearer records can make tax preparation, business reporting, and planning easier.",
        icon: FileText,
    },
    {
        title: "Local Miami Office",
        description:
            "A Miami-based tax and accounting office serving Miami-Dade County and nearby communities.",
        icon: ShieldCheck,
    },
] as const;

export type FaqCategory = (typeof faqCategories)[number];
export type HomepageFaq = (typeof homepageFaqs)[number];

export function getFaqCategoryById(id: string) {
    return faqCategories.find((category) => category.id === id);
}

export function getFaqsForService(serviceId: keyof typeof serviceFaqMap) {
    return serviceFaqMap[serviceId] ?? [];
}

export function getFaqSchema(faqs: readonly { question: string; answer: string }[]) {
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
    };
}

export function getAllFaqs() {
    return faqCategories.flatMap((category) =>
        category.faqs.map((faq) => ({
            ...faq,
            category: category.title,
            categoryId: category.id,
        }))
    );
}