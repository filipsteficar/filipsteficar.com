// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "Filip Štefičar",
    lang: "en-GB",
    ogLang: "en_GB",
    langSchema: "en",
    copyright: `Filip Štefičar - ${currentYear} | All Rights Reserved`,
    ver: "0.0.1",
    url: "https://filipsteficar.com",
    cmsURL: "https://altkod.apollo.filipsteficar.com"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Learning Center",
        href: "/learning-center"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@filipsteficar.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
}