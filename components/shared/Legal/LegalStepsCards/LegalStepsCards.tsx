import { LucideIcon } from "lucide-react";

export interface LegalStepItem {
  icon: LucideIcon;
  label: string;
  val: string;
  sub: string;
  highlight?: boolean;
}

export const LegalStepsCards = ({ items }: { items: LegalStepItem[] }) => (
  <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
    {items.map((item, i) => (
      <div
        key={i}
        className={`rounded-[2.5rem] border border-border p-10 transition-all ${
          item.highlight ? "border-accent/30 bg-accent/5" : "bg-bg-card"
        }`}
      >
        <div
          className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${
            item.highlight
              ? "bg-accent text-bg-body"
              : "bg-accent/10 text-accent"
          }`}
        >
          <item.icon size={24} />
        </div>
        <span className="mb-2 block text-[10px] font-black tracking-[0.4em] text-accent uppercase">
          {item.label}
        </span>
        <h3
          className={`mb-4 text-sm font-extrabold tracking-tighter uppercase ${
            item.highlight ? "text-accent" : "text-text-primary"
          }`}
        >
          {item.val}
        </h3>
        <p className="text-[13px] leading-relaxed text-text-secondary opacity-60">
          {item.sub}
        </p>
      </div>
    ))}
  </div>
);
