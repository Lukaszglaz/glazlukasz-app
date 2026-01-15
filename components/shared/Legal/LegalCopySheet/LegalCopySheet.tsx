import { CheckCircle2, Copy } from "lucide-react";

interface CopySection {
  id: string;
  group: string;
  desc: string;
  fields: string[];
}

interface Props {
  title: string;
  subtitle: string;
  sections: CopySection[];
  onCopy: () => void;
  copied: boolean;
}

export const LegalCopySheet = ({
  title,
  subtitle,
  sections,
  onCopy,
  copied,
}: Props) => (
  <section className="mt-40 space-y-10">
    <div className="flex flex-col justify-between gap-6 px-2 md:flex-row md:items-end">
      <div>
        <h3 className="text-4xl leading-none font-extrabold tracking-tighter text-text-primary uppercase">
          {title}
        </h3>
        <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-tertiary uppercase">
          {subtitle}
        </p>
      </div>
      <button
        onClick={onCopy}
        className="flex items-center gap-4 rounded-2xl bg-accent px-10 py-5 text-[11px] font-black tracking-widest text-bg-body uppercase shadow-xl shadow-accent/10 transition-all hover:scale-[1.02] active:scale-95"
      >
        {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
        {copied ? "Skopiowano" : "Kopiuj Arkusz"}
      </button>
    </div>
    <div className="overflow-hidden rounded-[2.5rem] border border-border bg-bg-card shadow-2xl">
      <div className="divide-y divide-border/30">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group grid items-stretch lg:grid-cols-12"
          >
            <div className="flex flex-col justify-center border-r border-border/30 bg-bg-body/20 p-8 lg:col-span-4 lg:p-10">
              <h4 className="mb-2 text-lg leading-none font-black tracking-tighter uppercase">
                {section.group}
              </h4>
              <p className="text-[9px] font-bold tracking-widest text-accent uppercase italic">
                {section.desc}
              </p>
            </div>
            <div className="p-8 lg:col-span-8 lg:p-10">
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                {section.fields.map((field, idx) => (
                  <div key={idx} className="group/field relative pl-6">
                    <div className="absolute top-1 left-0 h-[80%] w-px bg-text-primary/20 transition-colors group-hover/field:bg-accent" />
                    <div className="absolute top-1 -left-[2.5px] h-1.5 w-1.5 rounded-full border border-text-primary/30 bg-bg-card transition-all group-hover/field:border-accent group-hover/field:bg-accent" />
                    <div className="space-y-1.5">
                      <p className="text-[12px] font-bold tracking-tight text-text-primary uppercase">
                        {field}
                      </p>
                      <div className="h-px w-full bg-linear-to-r from-text-primary/20 to-transparent" />
                      <p className="text-[10px] tracking-tighter text-tertiary uppercase">
                        Dane wejściowe...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
