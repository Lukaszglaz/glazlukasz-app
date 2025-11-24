"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  Instagram,
  Linkedin,
  LucideIcon,
  Menu,
  X,
  Youtube,
} from "lucide-react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { SocialIcons } from "../SocialIcons/SocialIcons";

import { NavItem, SocialItem } from "./Header";

const SOCIAL_ITEMS_DATA: SocialItem[] = [
  {
    id: 1,
    icon: Instagram as LucideIcon,
    href: "https://instagram.com/twoja-nazwa",
  },
  {
    id: 2,
    icon: Youtube as LucideIcon,
    href: "https://youtube.com/twoja-nazwa",
  },
  {
    id: 3,
    icon: Linkedin as LucideIcon,
    href: "https://linkedin.com/twoja-nazwa",
  },
];

type HeaderMobileProps = {
  navItems: NavItem[];
  logoSrc: ImageProps["src"];
  logoAlt: string;
  logoHref: string;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  navItems,
  logoSrc,
  logoAlt,
  logoHref,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeHref = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const MobileIcon = isOpen ? X : Menu;

  return (
    <div className="lg:hidden">
      <header className="bg-color-blur-bg fixed top-0 left-0 z-50 h-20 w-full backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href={logoHref}
            className="flex h-full items-center space-x-3 transition-opacity hover:opacity-80"
            onClick={handleLinkClick}
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              priority
              className="logo-invertible h-45 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group p-2 focus:outline-none"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <MobileIcon className="text-color-text-primary group-hover:text-color-accent h-6 w-6 transition-colors duration-300" />
          </button>
        </div>
      </header>

      <nav
        className={clsx(
          "bg-color-blur-bg fixed inset-0 top-20 z-40 transform backdrop-blur-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col items-center overflow-y-auto p-6 pb-20">
          <div className="flex w-full flex-col items-center space-y-6 pt-8">
            {navItems.map((item) => (
              <ButtonLink
                variant="clean"
                size="md"
                fullWidth={true}
                key={item.id}
                href={item.href}
                isActive={item.href === activeHref}
                className="text-lg font-bold tracking-wide uppercase"
                onClick={handleLinkClick}
              >
                {item.label}
              </ButtonLink>
            ))}
          </div>

          <div className="mt-auto mb-10 flex flex-col items-center pt-10">
            <h3 className="text-color-text-primary mb-4 text-sm font-semibold tracking-widest uppercase opacity-70">
              Social Media
            </h3>
            <SocialIcons items={SOCIAL_ITEMS_DATA} iconSize="md" />
          </div>
        </div>
      </nav>
    </div>
  );
};
