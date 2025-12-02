"use client";

import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { LucideIcon, Instagram, Youtube, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export type NavItem = {
  id: number;
  label: string;
  href: string;
};

export type SocialItem = {
  id: number;
  icon: LucideIcon;
  href: string;
};

const SOCIAL_ITEMS_DATA: SocialItem[] = [
  {
    id: 1,
    icon: Instagram as LucideIcon,
    href: "https://www.instagram.com/lucasxcodes",
  },
  {
    id: 2,
    icon: Youtube as LucideIcon,
    href: "https://www.youtube.com/@lucasxcodes",
  },
  {
    id: 3,
    icon: Linkedin as LucideIcon,
    href: "https://www.linkedin.com/in/%C5%82ukasz-g%C5%82az-3865862a7/",
  },
];

type HeaderNavProps = {
  navItems: NavItem[];
  logoSrc: ImageProps["src"];
  logoAlt: string;
  logoHref: string;
};

export const Header: React.FC<HeaderNavProps> = ({
  navItems,
  logoSrc,
  logoAlt,
  logoHref,
}) => {
  const activeHref = usePathname();

  return (
    <header className="bg-color-blur-bg fixed top-0 left-0 z-50 w-full overflow-hidden backdrop-blur-md">
      <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:flex lg:px-8">
        <Link
          href={logoHref}
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            priority
            className="logo-invertible h-50 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <ButtonLink
              variant="clean"
              key={item.id}
              href={item.href}
              isActive={item.href === activeHref}
              className="px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {item.label}
            </ButtonLink>
          ))}
        </nav>

        <SocialIcons items={SOCIAL_ITEMS_DATA} iconSize="sm" className="ml-4" />
      </div>
    </header>
  );
};
