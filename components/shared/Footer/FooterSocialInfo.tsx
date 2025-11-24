import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";

type SocialLink = {
  icon: FC<{ className?: string }>;
  href: string;
  name: string;
};

type FooterSocialMediaProps = {
  socialMedia: SocialLink[];
};

const headerStyles =
  " mb-3  font-semibold border-b border-color-accent/30 pb-1 inline-block";

export const FooterSocialMedia: FC<FooterSocialMediaProps> = ({
  socialMedia,
}) => (
  <div className="space-y-4">
    <h3 className={headerStyles}>Social Media</h3>
    <div className="flex justify-center space-x-2 xl:justify-start">
      {socialMedia.map(({ icon: Icon, href, name }) => (
        <ButtonLink
          key={name}
          href={href}
          variant="clean"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Odwiedź nasz profil na ${name}`}
        >
          <Icon className="hover:text-color-accent size-5 transition-colors duration-200" />
        </ButtonLink>
      ))}
    </div>
  </div>
);
