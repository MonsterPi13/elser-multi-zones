import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/:locale/comic/:path*",
        // eslint-disable-next-line node/prefer-global/process
        destination: `${process.env.COMIC_URL}/:path*`,
      },
      {
        source: "/:locale/comic",
        // eslint-disable-next-line node/prefer-global/process
        destination: `${process.env.COMIC_URL}/`,
      },
      {
        source: "/:locale/pgc/:path*",
        // eslint-disable-next-line node/prefer-global/process
        destination: `${process.env.PGC_URL}/:path*`,
      },
      {
        source: "/:locale/pgc",
        // eslint-disable-next-line node/prefer-global/process
        destination: `${process.env.PGC_URL}/`,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
