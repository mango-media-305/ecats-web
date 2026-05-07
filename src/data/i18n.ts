export const languages = {
    en: {
        code: "en",
        locale: "en-US",
        label: "English",
        shortLabel: "EN",
        pathPrefix: "",
    },
    es: {
        code: "es",
        locale: "es-US",
        label: "Español",
        shortLabel: "ES",
        pathPrefix: "/es",
    },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = "en";

export const languageList = Object.values(languages);

export const uiText = {
    en: {
        skipToContent: "Skip to main content",

        navigation: {
            menu: "Menu",
            close: "Close menu",
            open: "Open menu",
            services: "Services",
            industries: "Industries",
            locations: "Locations",
            resources: "Resources",
            about: "About",
            contact: "Contact",
        },

        theme: {
            label: "Theme",
            light: "Light mode",
            dark: "Dark mode",
            toggle: "Toggle dark mode",
        },

        language: {
            label: "Language",
            switcherLabel: "Choose language",
            current: "Current language",
            english: "English",
            spanish: "Spanish",
        },

        cta: {
            contact: "Contact Us",
            contactOffice: "Contact Our Office",
            scheduleConsultation: "Schedule a Consultation",
            callNow: "Call Now",
            emailUs: "Email Us",
            getStarted: "Get Started",
            requestHelp: "Request Tax Help",
            sendMessage: "Send Message",
            viewServices: "View Services",
            learnMore: "Learn More",
            getDirections: "Get Directions",
        },

        contact: {
            phone: "Phone",
            email: "Email",
            address: "Address",
            hours: "Hours",
            serviceArea: "Service Area",
            office: "Office",
            visitOffice: "Visit Our Office",
        },

        forms: {
            name: "Full Name",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            phone: "Phone Number",
            company: "Company Name",
            service: "Service Needed",
            message: "How can we help?",
            preferredContact: "Preferred Contact Method",
            individualOrBusiness: "Are you contacting us as an individual or business?",
            individual: "Individual",
            business: "Business",
            selectService: "Select a service",
            selectContactMethod: "Select a contact method",
            submit: "Submit Request",
            requiredNotice: "Fields marked with an asterisk are required.",
            privacyNotice:
                "By submitting this form, you agree to be contacted by East Coast Accounting & Tax Services regarding your request.",
            successTitle: "Thank you for contacting us.",
            successMessage:
                "Your message has been received. Our office will review your request and contact you as soon as possible.",
        },

        services: {
            taxes: "Taxes",
            taxPreparation: "Tax Preparation",
            businessTaxes: "Business Tax Services",
            bookkeeping: "Bookkeeping",
            payroll: "Payroll",
            accounting: "Accounting Services",
            irsHelp: "IRS Tax Help",
        },

        seo: {
            homeTitle:
                "Tax & Accounting Services in Miami, FL | East Coast Accounting & Tax Services",
            homeDescription:
                "Professional tax preparation, bookkeeping, payroll, and accounting services for individuals and businesses in Miami, FL and South Florida.",
        },

        footer: {
            languageSwitcherTitle: "Language",
            serviceAreasTitle: "Service Areas",
            companyTitle: "Company",
            servicesTitle: "Services",
            legalTitle: "Legal",
            copyrightPrefix: "Copyright",
            rights: "All rights reserved.",
            builtFor: "Built for clear numbers, confident decisions, and year-round support.",
        },

        misc: {
            openInMaps: "Open in Google Maps",
            externalLink: "External link",
            featured: "Featured",
            bilingual: "English & Spanish support",
            miamiBased: "Miami-based office",
            yearRoundSupport: "Year-round support",
        },
    },

    es: {
        skipToContent: "Saltar al contenido principal",

        navigation: {
            menu: "Menú",
            close: "Cerrar menú",
            open: "Abrir menú",
            services: "Servicios",
            industries: "Industrias",
            locations: "Ubicaciones",
            resources: "Recursos",
            about: "Nosotros",
            contact: "Contacto",
        },

        theme: {
            label: "Tema",
            light: "Modo claro",
            dark: "Modo oscuro",
            toggle: "Cambiar modo oscuro",
        },

        language: {
            label: "Idioma",
            switcherLabel: "Elegir idioma",
            current: "Idioma actual",
            english: "Inglés",
            spanish: "Español",
        },

        cta: {
            contact: "Contáctenos",
            contactOffice: "Contacte Nuestra Oficina",
            scheduleConsultation: "Agendar Consulta",
            callNow: "Llamar Ahora",
            emailUs: "Enviar Email",
            getStarted: "Comenzar",
            requestHelp: "Solicitar Ayuda de Taxes",
            sendMessage: "Enviar Mensaje",
            viewServices: "Ver Servicios",
            learnMore: "Conocer Más",
            getDirections: "Cómo Llegar",
        },

        contact: {
            phone: "Teléfono",
            email: "Email",
            address: "Dirección",
            hours: "Horario",
            serviceArea: "Área de Servicio",
            office: "Oficina",
            visitOffice: "Visite Nuestra Oficina",
        },

        forms: {
            name: "Nombre Completo",
            firstName: "Nombre",
            lastName: "Apellido",
            email: "Correo Electrónico",
            phone: "Número de Teléfono",
            company: "Nombre de la Compañía",
            service: "Servicio Necesario",
            message: "¿Cómo podemos ayudarle?",
            preferredContact: "Método de Contacto Preferido",
            individualOrBusiness: "¿Nos contacta como individuo o como negocio?",
            individual: "Individuo",
            business: "Negocio",
            selectService: "Seleccione un servicio",
            selectContactMethod: "Seleccione un método de contacto",
            submit: "Enviar Solicitud",
            requiredNotice: "Los campos marcados con asterisco son obligatorios.",
            privacyNotice:
                "Al enviar este formulario, acepta ser contactado por East Coast Accounting & Tax Services sobre su solicitud.",
            successTitle: "Gracias por contactarnos.",
            successMessage:
                "Su mensaje ha sido recibido. Nuestra oficina revisará su solicitud y se comunicará con usted lo antes posible.",
        },

        services: {
            taxes: "Taxes",
            taxPreparation: "Preparación de Taxes",
            businessTaxes: "Taxes para Negocios",
            bookkeeping: "Bookkeeping",
            payroll: "Payroll",
            accounting: "Servicios de Contabilidad",
            irsHelp: "Ayuda con el IRS",
        },

        seo: {
            homeTitle:
                "Servicios de Taxes y Contabilidad en Miami, FL | East Coast Accounting & Tax Services",
            homeDescription:
                "Servicios profesionales de preparación de taxes, bookkeeping, payroll y contabilidad para individuos y negocios en Miami, FL y South Florida.",
        },

        footer: {
            languageSwitcherTitle: "Idioma",
            serviceAreasTitle: "Áreas de Servicio",
            companyTitle: "Compañía",
            servicesTitle: "Servicios",
            legalTitle: "Legal",
            copyrightPrefix: "Derechos de autor",
            rights: "Todos los derechos reservados.",
            builtFor: "Creado para números claros, decisiones confiables y apoyo durante todo el año.",
        },

        misc: {
            openInMaps: "Abrir en Google Maps",
            externalLink: "Enlace externo",
            featured: "Destacado",
            bilingual: "Atención en inglés y español",
            miamiBased: "Oficina basada en Miami",
            yearRoundSupport: "Apoyo durante todo el año",
        },
    },
} as const;

export type UIText = typeof uiText;
export type TranslationKey = keyof typeof uiText.en;

export function getLanguageFromUrl(pathname: string): LanguageCode {
    const firstSegment = pathname.split("/").filter(Boolean)[0];

    if (firstSegment === "es") {
        return "es";
    }

    return defaultLanguage;
}

export function getTranslations(language: LanguageCode = defaultLanguage) {
    return uiText[language] ?? uiText[defaultLanguage];
}

export function localizedPath(path: string, language: LanguageCode = defaultLanguage) {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    if (language === defaultLanguage) {
        return cleanPath;
    }

    if (cleanPath === "/") {
        return languages[language].pathPrefix;
    }

    return `${languages[language].pathPrefix}${cleanPath}`;
}

export function alternateLanguagePath(pathname: string, targetLanguage: LanguageCode) {
    const cleanSegments = pathname.split("/").filter(Boolean);

    if (cleanSegments[0] === "es") {
        cleanSegments.shift();
    }

    const cleanPath = `/${cleanSegments.join("/")}`;

    return localizedPath(cleanPath === "/" ? "/" : cleanPath, targetLanguage);
}

export const contactMethods = [
    {
        label: {
            en: "Phone Call",
            es: "Llamada Telefónica",
        },
        value: "phone",
    },
    {
        label: {
            en: "Email",
            es: "Email",
        },
        value: "email",
    },
    {
        label: {
            en: "Either is fine",
            es: "Cualquiera está bien",
        },
        value: "either",
    },
] as const;

export const serviceOptions = [
    {
        label: {
            en: "Tax Preparation",
            es: "Preparación de Taxes",
        },
        value: "tax-preparation",
    },
    {
        label: {
            en: "Business Tax Services",
            es: "Taxes para Negocios",
        },
        value: "business-tax-services",
    },
    {
        label: {
            en: "Bookkeeping",
            es: "Bookkeeping",
        },
        value: "bookkeeping",
    },
    {
        label: {
            en: "Payroll Services",
            es: "Payroll",
        },
        value: "payroll",
    },
    {
        label: {
            en: "Accounting Services",
            es: "Servicios de Contabilidad",
        },
        value: "accounting",
    },
    {
        label: {
            en: "IRS Tax Help",
            es: "Ayuda con el IRS",
        },
        value: "irs-tax-help",
    },
    {
        label: {
            en: "Not Sure Yet",
            es: "No Estoy Seguro Todavía",
        },
        value: "not-sure",
    },
] as const;

export const clientTypeOptions = [
    {
        label: {
            en: "Individual",
            es: "Individuo",
        },
        value: "individual",
    },
    {
        label: {
            en: "Business",
            es: "Negocio",
        },
        value: "business",
    },
    {
        label: {
            en: "Both",
            es: "Ambos",
        },
        value: "both",
    },
] as const;