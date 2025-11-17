import { SmallOfferCard } from "@/components/shared/SmallOfferCard/SmallOfferCard";
import { Timer } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SmallOfferCard
        offerName={"Szybka Realizacja"}
        offerDescription={"Natychmiastowa Implementacja"}
        icon={Timer}
      />
    </div>
  );
}
