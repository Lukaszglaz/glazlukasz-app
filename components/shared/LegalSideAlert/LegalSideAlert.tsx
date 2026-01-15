import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  items: string[];
  bgIcon: LucideIcon;
}

export const LegalSideAlert = ({
  icon: Icon,
  title,
  items,
  bgIcon: BgIcon,
}: Props) => (
  <div className="relative overflow-hidden rounded-[2.5rem] border border-destructive/20 bg-destructive/5 p-10 lg:col-span-5">
    <div className="relative z-10">
      <h4 className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.3em] text-destructive uppercase">
        <Icon size={14} /> {title}
      </h4>
      <ul className="space-y-4 text-[13px] text-text-secondary opacity-70">
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
    <BgIcon
      className="absolute -right-10 -bottom-10 text-destructive opacity-[0.03]"
      size={200}
    />
  </div>
);
