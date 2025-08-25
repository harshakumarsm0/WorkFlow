import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        <p className="text-lg">{t('newText')}</p>
        <p className="text-md text-gray-600">{t('subtitle')}</p>
        <p className="max-w-2xl">{t('description')}</p>
        <p className="italic mt-4">{t('welcome')}</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {t('learnMore')}
        </button>
      </div>
    </div>
  );
}
