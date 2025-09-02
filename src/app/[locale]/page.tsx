import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function Home() {
  const t = useTranslations("pages.homepage");

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center gap-y-5 bg-orange-100">
      <div className="flex items-center gap-x-2">
        <h1 className="font-inter text-5xl font-bold">Let's build the future</h1>
        <Button variant="outline" size="icon" className="rounded-full">
          <ArrowRight size="24" />
        </Button>
      </div>
      <p className="text-3xl font-extrabold text-emerald-500">{t("hello")}</p>
    </main>
  );
}
