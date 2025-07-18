import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

type RequestContext = {
  requestLocale: string;
};

export default getRequestConfig(async ({ requestLocale }: RequestContext) => {
  let locale = requestLocale;

  // Validate the locale
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default
  };
});
