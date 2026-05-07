import {
    BadgeDollarSign,
    BookOpenCheck,
    BriefcaseBusiness,
    Building2,
    Calculator,
    CircleHelp,
    ClipboardCheck,
    FileText,
    HandCoins,
    Home,
    Landmark,
    Languages,
    Mail,
    MapPin,
    MessageSquareText,
    Newspaper,
    Phone,
    ReceiptText,
    ShieldCheck,
    UsersRound,
    WalletCards,
} from "@lucide/astro";

export const mainNavigation = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Services",
        href: "/services",
        icon: Calculator,
        children: [
            {
                label: "Tax Preparation",
                href: "/services/tax-preparation",
                description:
                    "Individual and business tax preparation support for Miami and South Florida clients.",
                icon: ReceiptText,
            },
            {
                label: "Business Tax Services",
                href: "/services/business-tax-services",
                description:
                    "Tax support for small businesses, contractors, and local companies.",
                icon: BriefcaseBusiness,
            },
            {
                label: "Bookkeeping",
                href: "/services/bookkeeping",
                description:
                    "Organized books, clean records, and monthly financial clarity.",
                icon: BookOpenCheck,
            },
            {
                label: "Payroll Services",
                href: "/services/payroll",
                description:
                    "Payroll support for businesses that need reliable processing and reporting.",
                icon: WalletCards,
            },
            {
                label: "Accounting Services",
                href: "/services/accounting",
                description:
                    "Accounting support to help individuals and businesses stay financially organized.",
                icon: Calculator,
            },
            {
                label: "IRS Tax Help",
                href: "/services/irs-tax-help",
                description:
                    "Guidance for tax notices, tax questions, and IRS-related concerns.",
                icon: Landmark,
            },
        ],
    },
    {
        label: "Industries",
        href: "/industries",
        icon: Building2,
        children: [
            {
                label: "Small Businesses",
                href: "/industries/small-businesses",
                description:
                    "Tax, bookkeeping, and payroll support for Miami small businesses.",
                icon: Building2,
            },
            {
                label: "Self-Employed",
                href: "/industries/self-employed",
                description:
                    "Accounting and tax support for freelancers, contractors, and independent professionals.",
                icon: UsersRound,
            },
            {
                label: "Contractors",
                href: "/industries/contractors",
                description:
                    "Bookkeeping and tax organization for construction and trade professionals.",
                icon: ClipboardCheck,
            },
            {
                label: "Real Estate Professionals",
                href: "/industries/real-estate",
                description:
                    "Tax and accounting support for real estate agents, landlords, and investors.",
                icon: BadgeDollarSign,
            },
            {
                label: "Restaurants",
                href: "/industries/restaurants",
                description:
                    "Payroll, bookkeeping, and tax support for food service businesses.",
                icon: HandCoins,
            },
            {
                label: "Healthcare Practices",
                href: "/industries/healthcare-practices",
                description:
                    "Accounting support for local healthcare, dental, and wellness practices.",
                icon: ShieldCheck,
            },
        ],
    },
    {
        label: "Locations",
        href: "/locations",
        icon: MapPin,
        children: [
            {
                label: "Miami",
                href: "/locations/miami-fl",
                description:
                    "Tax and accounting services for individuals and businesses in Miami, FL.",
                icon: MapPin,
            },
            {
                label: "Doral",
                href: "/locations/doral-fl",
                description:
                    "Bookkeeping, payroll, and tax support for Doral businesses and residents.",
                icon: MapPin,
            },
            {
                label: "Kendall",
                href: "/locations/kendall-fl",
                description:
                    "Accounting and tax preparation services for Kendall and nearby communities.",
                icon: MapPin,
            },
            {
                label: "Coral Gables",
                href: "/locations/coral-gables-fl",
                description:
                    "Professional tax and accounting support near Coral Gables, FL.",
                icon: MapPin,
            },
            {
                label: "Hialeah",
                href: "/locations/hialeah-fl",
                description:
                    "Tax preparation, bookkeeping, and payroll services for Hialeah clients.",
                icon: MapPin,
            },
            {
                label: "Homestead",
                href: "/locations/homestead-fl",
                description:
                    "Tax and bookkeeping services for Homestead and South Miami-Dade.",
                icon: MapPin,
            },
        ],
    },
    {
        label: "Resources",
        href: "/resources",
        icon: Newspaper,
        children: [
            {
                label: "Tax Resources",
                href: "/resources/tax-resources",
                description:
                    "Helpful tax tips, filing reminders, and financial organization guidance.",
                icon: FileText,
            },
            {
                label: "FAQ",
                href: "/faq",
                description:
                    "Common questions about tax preparation, bookkeeping, payroll, and working with our office.",
                icon: CircleHelp,
            },
            {
                label: "English & Spanish Support",
                href: "/resources/english-spanish-support",
                description:
                    "Bilingual tax and accounting support for Miami individuals and businesses.",
                icon: Languages,
            },
        ],
    },
    {
        label: "About",
        href: "/about",
        icon: MessageSquareText,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: Mail,
    },
] as const;

export const footerNavigation = {
    services: {
        title: "Services",
        links: [
            {
                label: "Tax Preparation",
                href: "/services/tax-preparation",
            },
            {
                label: "Business Tax Services",
                href: "/services/business-tax-services",
            },
            {
                label: "Bookkeeping",
                href: "/services/bookkeeping",
            },
            {
                label: "Payroll Services",
                href: "/services/payroll",
            },
            {
                label: "Accounting Services",
                href: "/services/accounting",
            },
            {
                label: "IRS Tax Help",
                href: "/services/irs-tax-help",
            },
        ],
    },

    company: {
        title: "Company",
        links: [
            {
                label: "About",
                href: "/about",
            },
            {
                label: "Resources",
                href: "/resources",
            },
            {
                label: "FAQ",
                href: "/faq",
            },
            {
                label: "Contact",
                href: "/contact",
            },
        ],
    },

    locations: {
        title: "Service Areas",
        links: [
            {
                label: "Miami",
                href: "/locations/miami-fl",
            },
            {
                label: "Doral",
                href: "/locations/doral-fl",
            },
            {
                label: "Kendall",
                href: "/locations/kendall-fl",
            },
            {
                label: "Coral Gables",
                href: "/locations/coral-gables-fl",
            },
            {
                label: "Hialeah",
                href: "/locations/hialeah-fl",
            },
            {
                label: "Homestead",
                href: "/locations/homestead-fl",
            },
        ],
    },

    legal: {
        title: "Legal",
        links: [
            {
                label: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                label: "Terms of Service",
                href: "/terms",
            },
            {
                label: "Accessibility",
                href: "/accessibility",
            },
        ],
    },
} as const;

export const utilityNavigation = [
    {
        label: "Call",
        href: "tel:+13059786072",
        icon: Phone,
    },
    {
        label: "Email",
        href: "mailto:info@eastcoastaccounting.net",
        icon: Mail,
    },
    {
        label: "Visit",
        href: "https://www.google.com/maps/search/?api=1&query=6874%20SW%208th%20St%2C%20Miami%2C%20FL%2033144",
        icon: MapPin,
        external: true,
    },
] as const;

export const languageNavigation = [
    {
        label: "English",
        code: "en",
        href: "/",
    },
    {
        label: "Español",
        code: "es",
        href: "/es",
    },
] as const;

export type MainNavigationItem = (typeof mainNavigation)[number];
export type FooterNavigation = typeof footerNavigation;
export type UtilityNavigationItem = (typeof utilityNavigation)[number];
export type LanguageNavigationItem = (typeof languageNavigation)[number];