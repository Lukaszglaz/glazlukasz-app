export interface PrivacyRightsItem {
  title: string;
  desc: string;
}

export const privacyRightsData: PrivacyRightsItem[] = [
  {
    title: "Dostępu i Sprostowania",
    desc: "Prawo do wglądu w swoje dane oraz ich poprawiania.",
  },
  {
    title: "Usunięcia danych (Prawo do bycia zapomnianym)",
    desc: "Żądanie usunięcia danych, o ile nie zachodzi inna podstawa prawna ich przetwarzania (np. skarbowa).",
  },
  {
    title: "Ograniczenia i Przenoszenia",
    desc: "Wstrzymanie przetwarzania danych lub przesłanie ich do innego podmiotu.",
  },
  {
    title: "Sprzeciwu",
    desc: "Możliwość wniesienia sprzeciwu wobec przetwarzania danych w celach marketingowych.",
  },
];
