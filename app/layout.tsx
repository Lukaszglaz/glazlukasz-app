import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, NavItem } from "@/components/shared/Header/Header";
import { HeaderMobile } from "@/components/shared/Header/HeaderMobile";
import logoFullWhite from "@/assets/images/logo/LogoFullWhite.png";
import { Footer } from "@/components/shared/Footer/Footer";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  variable: "--font-base",
});

export const metadata: Metadata = {
  title: "Glazlukasz.pl - Tworzenie Stron Internetowych i Aplikacji",
  description:
    "Profesjonalne usługi tworzenia stron internetowych, pozycjonowania SEO, hostingu i aplikacji internetowych.",
};

const headerProps = {
  navItems: [
    { id: 1, label: "Strona Główna", href: "/" },
    { id: 2, label: "Usługi", href: "/uslugi" },
    { id: 3, label: "Realizacje", href: "/realizacje" },
    { id: 4, label: "O Mnie", href: "/o-mnie" },
    { id: 5, label: "Kontakt", href: "/kontakt" },
  ] as NavItem[],
  logoSrc: logoFullWhite,
  logoAlt: "Logo Glazlukasz.pl",
  logoHref: "/",
};

const footerProps = {
  contact: {
    phone: "+48 123 456 789",
    email: "kontakt@glazlukasz.pl",
    description:
      "Skontaktuj się z nami w celu omówienia Twoich potrzeb związanych z tworzeniem stron internetowych i aplikacji.",
  },
  offerLinks: [
    { label: "Strony WWW", href: "/uslugi/strony-www" },
    { label: "Pozycjonowanie SEO", href: "/uslugi/seo" },
    { label: "Aplikacje Internetowe", href: "/uslugi/aplikacje" },
    { label: "Hosting i Domeny", href: "/uslugi/hosting" },
    { label: "Oprawa graficzna", href: "/uslugi/grafika" },
    { label: "Wsparcie techniczne", href: "/uslugi/wsparcie" },
  ],
  clientLinks: [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Polityka cookies", href: "/polityka-cookies" },
    { label: "Regulamin serwisu", href: "/regulamin" },
    { label: "Obowiązek informacyjny RODO", href: "/rodo" },
    { label: "Jak wyłączyć pliki cookie", href: "/cookies-instrukcja" },
  ],
  socialMedia: [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
    { name: "Linkedin", href: "https://linkedin.com", icon: Linkedin },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={poppins.className}>
      <body className={"antialiased"}>
        <HeaderMobile {...headerProps} />
        <Header {...headerProps} />
        <main>{children}</main>
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
