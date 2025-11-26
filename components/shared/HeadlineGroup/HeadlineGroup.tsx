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
      <h2 className="sm:text-md mb-3 text-3xl font-semibold sm:mb-4">
        {header}
      </h2>
      {description && <p className="text-base sm:text-lg">{description}</p>}
    </div>
  );
};
