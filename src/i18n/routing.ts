import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh-CN", "zh-TW", "en-US", "es-ES", "ja-JP"],

  // Used when no locale matches
  defaultLocale: "en-US",
});
