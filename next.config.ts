/* eslint-disable node/prefer-global/process */
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/:locale/comic/:path*",
        destination: `${process.env.COMIC_URL}/:path*`,
      },
      {
        source: "/:locale/pgc/:path*",
        destination: `${process.env.PGC_URL}/pgc/:locale/:path*`,
      },
      {
        source: "/:locale/anime/:path*",
        destination: `${process.env.ANIME_URL}/anime/:locale/:path*`,
      },
      // {
      //   source: "/:locale/anime",
      //   destination: `${process.env.ANIME_URL}/anime/:locale`,
      // },
      // {
      //   source: "/anime/:path*",
      //   destination: `${process.env.ANIME_URL}/anime/:path*`,
      // },
      // {
      //   source: "/anime",
      //   destination: `${process.env.ANIME_URL}/anime`,
      // },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
