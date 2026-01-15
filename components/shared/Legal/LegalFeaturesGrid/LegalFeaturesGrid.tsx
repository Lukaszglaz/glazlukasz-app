import { LucideIcon } from "lucide-react";

export interface LegalFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  title: string;
  accentTitle: string;
  features: LegalFeatureItem[];
}

export const LegalFeaturesGrid = ({ title, accentTitle, features }: Props) => (
  <div className="space-y-12 lg:col-span-7">
    <h2 className="text-4xl font-extrabold tracking-tighter text-text-primary uppercase">
      {title} <span className="text-accent">{accentTitle}</span>
    </h2>
    <div className="grid gap-8 sm:grid-cols-2">
      {features.map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <item.icon className="shrink-0 text-accent" size={20} />
          <div>
            <h4 className="text-[13px] font-black tracking-widest text-text-primary uppercase">
              {item.title}
            </h4>
            <p className="text-[12px] text-text-secondary">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
