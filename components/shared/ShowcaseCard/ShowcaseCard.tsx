import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import Image, { ImageProps } from "next/image";

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageUrl: ImageProps["src"];
  reverse?: boolean;
  href: string;
}

export const ShowcaseCard = ({
  title,
  description,
  imageUrl,
  reverse = false,
  href,
}: ShowcaseCardProps) => {
  const isStaticImage = typeof imageUrl !== "string";

  return (
    <div
      className={clsx(
        "transform overflow-hidden rounded-xl border border-border/70 bg-bg-card shadow-lg transition-all duration-300 hover:scale-[1.005] hover:shadow-xl",
        "mx-4 my-6 flex max-w-5xl flex-col sm:mx-6 lg:mx-auto lg:flex-row",
      )}
    >
      <div
        className={clsx(
          "flex w-full items-center justify-center p-0 lg:w-1/2",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="aspect-video h-full w-full overflow-hidden">
          <Image
            src={imageUrl}
            width={isStaticImage ? undefined : 700}
            height={isStaticImage ? undefined : 400}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <div
        className={clsx(
          "flex w-full flex-col justify-center p-5 md:p-7 lg:w-1/2 lg:p-9",
          reverse ? "lg:order-1" : "lg:order-2",
        )}
      >
        <h2 className="mb-3 text-3xl font-extrabold text-text-primary">
          {title}
        </h2>
        <p className="mb-6 text-base leading-relaxed text-text-secondary">
          {description}
        </p>

        <ButtonLink
          variant="secondary"
          href={href}
          className="group inline-flex w-full items-center space-x-2 px-5 py-2.5 sm:w-auto"
        >
          <span>Przejdź do projektu</span>
          <ArrowRight
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </ButtonLink>
      </div>
    </div>
  );
};
