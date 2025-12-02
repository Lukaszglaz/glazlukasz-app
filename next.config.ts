import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const isDevOrPreview = process.env.VERCEL_ENV !== "production";

    if (isDevOrPreview) {
      return [
        {
          source: "/",
          destination: "/v2",
          permanent: false,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
