import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export const LegalSection = ({ icon: Icon, title, children }: Props) => (
  <section>
    <div className="mb-6 flex items-center gap-3">
      <div className="rounded-lg bg-accent/10 p-2 text-accent">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-black tracking-wide text-text-primary uppercase">
        {title}
      </h2>
    </div>
    <div className="rounded-4xl border border-border bg-bg-card p-8 text-sm leading-relaxed text-text-secondary">
      {children}
    </div>
  </section>
);
