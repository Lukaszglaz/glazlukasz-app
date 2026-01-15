import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  buttonText: string;
  href: string;
}

export const LegalContactCard = ({
  icon: Icon,
  title,
  buttonText,
  href,
}: Props) => (
  <div className="flex flex-1 flex-col items-center justify-center rounded-[3rem] bg-accent p-10 text-center text-black">
    <Icon className="mb-4" size={32} />
    <p className="mb-4 text-xl font-black tracking-wide uppercase">{title}</p>
    <a
      href={href}
      className="rounded-xl bg-black px-8 py-3 text-[10px] font-black tracking-widest text-white uppercase transition-transform hover:scale-105"
    >
      {buttonText}
    </a>
  </div>
);
