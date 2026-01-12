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
    "Profesjonalne usługi tworzenia stron internetowych, aplikacji webowych, pozycjonowania SEO oraz oprawy graficznej. Skontaktuj się ze mną już dziś!",
};

const headerProps = {
  navItems: [
    { id: 1, label: "Strona Główna", href: "/" },
    { id: 4, label: "O Mnie", href: "/about-me" },
    { id: 3, label: "Realizacje", href: "/realizacje" },
    { id: 2, label: "Usługi", href: "/services" },
    { id: 5, label: "Kontakt", href: "/contact" },
  ] as NavItem[],
  logoSrc: logoFullWhite,
  logoAlt: "Logo Glazlukasz.pl",
  logoHref: "/",
};

const footerProps = {
  contact: {
    phone: "+48 504 527 956",
    email: "kontakt@glazlukasz.pl",
    description:
      "Skontaktuj się ze mną w celu omówienia Twoich potrzeb związanych z tworzeniem stron internetowych i aplikacji.",
  },
  offerLinks: [
    { label: "Strony Wizytówki", href: "/services?service=strony-www" },
    { label: "Sklepy Internetowe", href: "/services?service=sklepy-online" },
    { label: "Aplikacje Webowe", href: "/services?service=aplikacje" },
    { label: "Pozycjonowanie SEO", href: "/services?service=seo" },
    { label: "Oprawa graficzna", href: "/services?service=grafika" },
    { label: "Hosting i Domeny", href: "/services?service=hosting" },
  ],
  clientLinks: [
    { label: "Regulamin serwisu", href: "/regulamin" },
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Obowiązek informacyjny RODO", href: "/rodo" },
    { label: "Polityka cookies", href: "/polityka-cookies" },
    { label: "Jak wyłączyć pliki cookie", href: "/cookies-instrukcja" },
    { label: "Odstąpienie od umowy", href: "/odstapienie-od-umowy" },
    { label: "Reklamacje i zwroty", href: "/reklamacje-i-zwroty" },
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
