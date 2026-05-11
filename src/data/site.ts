export const siteConfig = {
    name: "East Coast Accounting & Tax Services",
    shortName: "East Coast Accounting",
    legalName: "East Coast Accounting & Tax Services",

    url: "https://eastcoastaccounting.net",

    tagline: "Tax, bookkeeping, and payroll support for Miami individuals and businesses.",

    description:
        "East Coast Accounting & Tax Services provides professional tax preparation, bookkeeping, payroll, and accounting support for individuals and businesses in Miami, Miami-Dade County, and surrounding South Florida communities.",

    language: "en",
    availableLanguages: ["en", "es"],

    contact: {
        phone: "(305) 978-6072",
        phoneHref: "tel:+13059786072",
        email: "info@eastcoastaccounting.net",
        emailHref: "mailto:info@eastcoastaccounting.net",
    },

    address: {
        street: "6874 SW 8th St",
        city: "Miami",
        state: "FL",
        postalCode: "33144",
        country: "US",
        full: "6874 SW 8th St, Miami, FL 33144",
        mapHref: "https://www.google.com/maps/search/?api=1&query=6874%20SW%208th%20St%2C%20Miami%2C%20FL%2033144",
    },

    geo: {
        latitude: 25.7637,
        longitude: -80.307,
    },

    hours: {
        label: "Monday–Friday, 9AM–5PM",
        schema: [
            {
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
            },
        ],
    },

    serviceArea: {
        primaryCity: "Miami",
        primaryCounty: "Miami-Dade County",
        region: "South Florida",
        description:
            "Serving individuals and businesses across Miami-Dade County and nearby South Florida communities.",
        nearbyAreas: [
            "Miami",
            "West Miami",
            "Coral Gables",
            "Doral",
            "Kendall",
            "Hialeah",
            "Brickell",
            "Little Havana",
            "Westchester",
            "Sweetwater",
            "Homestead",
            "Pinecrest",
            "South Miami",
            "Miami Lakes",
        ],
    },

    services: [
        "Tax Preparation",
        "Individual Tax Services",
        "Business Tax Services",
        "Bookkeeping",
        "Payroll Services",
        "Accounting Support",
        "Small Business Accounting",
    ],

    audiences: [
        "Individuals",
        "Families",
        "Small Businesses",
        "Self-Employed Professionals",
        "Independent Contractors",
        "Local Miami Businesses",
    ],

    ctas: {
        primary: {
            label: "Contact Us",
            href: "/contact",
        },
        secondaryPhone: {
            label: "Call Now",
            href: "tel:+13059786072",
        },
        secondaryEmail: {
            label: "Email Us",
            href: "mailto:info@eastcoastaccounting.net",
        },
    },

    logos: {
        light: "/images/branding/logo-light.webp",
        dark: "/images/branding/logo-dark.webp",
    },

    social: {
        googleBusinessProfile: "",
        facebook: "",
        instagram: "",
        linkedin: "",
    },

    seo: {
        defaultTitle:
            "Tax & Accounting Services in Miami, FL | East Coast Accounting & Tax Services",
        titleTemplate: "%s | East Coast Accounting & Tax Services",
        defaultDescription:
            "Professional tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Miami, FL and South Florida.",
        defaultImage: "/images/og/og-home.webp",
        keywords: [
            "tax preparation Miami FL",
            "accounting services Miami",
            "bookkeeping services Miami",
            "payroll services Miami",
            "business tax preparation Miami",
            "small business accounting Miami",
            "tax accountant Miami",
            "Miami-Dade tax services",
        ],
    },
} as const;

export type SiteConfig = typeof siteConfig;

export const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.logos.dark}`,
    logo: `${siteConfig.url}${siteConfig.logos.dark}`,
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
    },
    areaServed: [
        {
            "@type": "City",
            name: "Miami",
        },
        {
            "@type": "AdministrativeArea",
            name: "Miami-Dade County",
        },
        {
            "@type": "AdministrativeArea",
            name: "South Florida",
        },
    ],
    openingHoursSpecification: siteConfig.hours.schema.map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.dayOfWeek,
        opens: item.opens,
        closes: item.closes,
    })),
    knowsLanguage: ["English", "Spanish"],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tax and Accounting Services",
        itemListElement: siteConfig.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: service,
            },
        })),
    },
} as const;

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logos.dark}`,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: "customer service",
        areaServed: "US-FL",
        availableLanguage: ["English", "Spanish"],
    },
} as const;

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-US",
    publisher: {
        "@id": `${siteConfig.url}/#organization`,
    },
} as const;