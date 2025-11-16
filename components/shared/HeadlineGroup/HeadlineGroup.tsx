import { clsx } from "clsx";

interface HeadlineGroupProps {
  header: string;
  description?: string;
  className?: string;
}

export const HeadlineGroup: React.FC<HeadlineGroupProps> = ({
  header,
  description,
  className,
}) => {
  return (
    <div className={clsx("px-4 py-4", className)}>
      <h2 className="mb-3 text-3xl font-semibold text-text-primary sm:mb-4 sm:text-4xl">
        {header}
      </h2>
      {description && <p className="text-base sm:text-lg">{description}</p>}
    </div>
  );
};
