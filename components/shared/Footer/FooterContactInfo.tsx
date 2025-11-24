import { Mail, Phone } from "lucide-react";
import { FC } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";

type ContactInfo = {
  phone: string;
  email: string;
  description: string;
};

type FooterContactInfoProps = {
  contact: ContactInfo;
  contactLinkStyles: string;
};

const headerStyles =
  " mb-3 font-semibold border-b border-color-accent/30 pb-1 inline-block";

export const FooterContactInfo: FC<FooterContactInfoProps> = ({
  contact,
  contactLinkStyles,
}) => {
  const { phone, email, description } = contact;

  return (
    <div className="space-y-4 md:col-span-2 xl:col-span-1">
      <h3 className={headerStyles}>Informacje Kontaktowe</h3>

      <div className="space-y-4">
        <p className="mx-auto max-w-sm text-sm xl:mx-0">{description}</p>
        <div className="flex items-center justify-center space-x-3 xl:justify-start">
          <Phone className="size-6 shrink-0" />
          <div className="ml-2 text-left">
            <span className="block text-sm">Telefon:</span>
            <ButtonLink
              href={`tel:${phone.replace(/\s/g, "")}`}
              variant="clean"
              className={contactLinkStyles}
            >
              {phone}
            </ButtonLink>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3 xl:justify-start">
          <Mail className="size-6 shrink-0" />
          <div className="ml-2 text-left">
            <span className="block text-sm">Adres e-mail:</span>
            <ButtonLink
              href={`mailto:${email}`}
              variant="clean"
              className={contactLinkStyles}
            >
              {email}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
