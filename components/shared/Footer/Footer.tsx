import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterContactInfo } from "./FooterContactInfo";
import { FooterSocialMedia } from "./FooterSocialInfo";

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  description: string;
}

export interface SocialLink {
  icon: FC<{ className?: string }>;
  href: string;
  name: string;
}

export interface FooterProps {
  contact: ContactInfo;
  offerLinks: FooterLink[];
  clientLinks: FooterLink[];
  socialMedia: SocialLink[];
}

const currentYear = new Date().getFullYear();

export const Footer: FC<FooterProps> = ({
  contact,
  offerLinks,
  clientLinks,
  socialMedia,
}) => {
  const listLinkStyles = " !px-0 !py-1 text-sm h-min min-h-0 ";

  const contactLinkStyles = "!px-0 !py-2 text-sm h-min min-h-0 ";

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-center md:grid-cols-2 xl:grid-cols-4 xl:gap-x-24 xl:text-left">
          <FooterContactInfo
            contact={contact}
            contactLinkStyles={contactLinkStyles}
          />

          <FooterLinkGroup
            title="Moja Oferta"
            links={offerLinks}
            linkStyles={listLinkStyles}
          />

          <FooterLinkGroup
            title="Dla klienta"
            links={clientLinks}
            linkStyles={listLinkStyles}
          />

          <FooterSocialMedia socialMedia={socialMedia} />
        </div>
      </div>

      <div className="p-4 text-center">
        <p className="text-md">
          Copyright {currentYear} - All Rights Reserved.{" "}
          <a
            href="https://glazlukasz.pl"
            className="font-semibold transition-colors duration-200 hover:text-accent-hover"
          >
            By glazlukasz.pl
          </a>
        </p>
      </div>
    </footer>
  );
};
