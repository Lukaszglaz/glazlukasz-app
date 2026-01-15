export interface AnalyticsDataItem {
  provider: string;
  company: string;
  trackingId: string;
  optOutUrl: string;
  description: string;
}

export const analyticsData: AnalyticsDataItem = {
  provider: "Google Analytics",
  company: "Google Ireland Limited",
  trackingId: "G-3ZG24K6KB2",
  optOutUrl: "https://tools.google.com/dlpage/gaoptout",
  description:
    "Informacje generowane przez cookie na temat korzystania z Serwisu (w tym adres IP, który jest anonimizowany) są przesyłane do Google. Wykorzystujemy te dane wyłącznie do celów statystycznych, aby ulepszać kod i architekturę strony.",
};
