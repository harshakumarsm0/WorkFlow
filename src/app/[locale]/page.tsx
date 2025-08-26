import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl">{t('subtitle')}</p>
        <div className="max-w-2xl mx-auto">
          <p className="mb-4">{t('description')}</p>
          
        </div>
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:underline">{t('learnMore')}</a>
        </div>
      </div>
    </div>
  );
}
