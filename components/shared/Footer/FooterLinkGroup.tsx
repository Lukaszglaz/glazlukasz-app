import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinkGroupProps = {
  title: string;
  links: FooterLink[];
  linkStyles: string;
};

const headerStyles =
  " mb-3 font-semibold border-b border-color-accent/30 pb-1 inline-block";

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  title,
  links,
  linkStyles,
}) => (
  <div className="space-y-4">
    <h3 className={headerStyles}>{title}</h3>

    <ul className="flex flex-col gap-y-0">
      {links.map((link) => (
        <li
          key={link.label}
          className="my-0 flex justify-center xl:justify-start"
        >
          <ButtonLink href={link.href} variant="clean" className={linkStyles}>
            {link.label}
          </ButtonLink>
        </li>
      ))}
    </ul>
  </div>
);
